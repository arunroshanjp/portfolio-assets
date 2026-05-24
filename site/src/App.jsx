import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TransitionStory from './components/TransitionStory'
import Projects from './components/Projects'
import Experiments from './components/Experiments'
import Contact from './components/Contact'
import ReactiveBackground from './components/ReactiveBackground'
import ProjectModal from './components/ProjectModal'

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSection, setActiveSection] = useState('hero')

  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    transition: useRef(null),
    projects: useRef(null),
    experiments: useRef(null),
    contact: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const docHeight = document.body.offsetHeight

      if (scrollY + viewportHeight >= docHeight - 50) {
        if (activeSection !== 'contact') setActiveSection('contact')
        return
      }
      if (scrollY < 50) {
        if (activeSection !== 'hero') setActiveSection('hero')
        return
      }

      const triggerLine = scrollY + viewportHeight * 0.3
      const sections = [
        { id: 'hero', ref: sectionRefs.hero },
        { id: 'about', ref: sectionRefs.about },
        { id: 'transition', ref: sectionRefs.transition },
        { id: 'projects', ref: sectionRefs.projects },
        { id: 'experiments', ref: sectionRefs.experiments },
        { id: 'contact', ref: sectionRefs.contact },
      ]

      for (const section of sections) {
        const element = section.ref.current
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (triggerLine >= offsetTop && triggerLine < offsetBottom) {
            if (activeSection !== section.id) setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <ReactiveBackground />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10">
        <div ref={sectionRefs.hero} id="hero"><Hero /></div>
        <div ref={sectionRefs.about} id="about"><About /></div>
        <div ref={sectionRefs.transition} id="transition"><TransitionStory /></div>
        <div ref={sectionRefs.projects} id="projects"><Projects onProjectClick={openModal} /></div>
        <div ref={sectionRefs.experiments} id="experiments"><Experiments onProjectClick={openModal} /></div>
        <div ref={sectionRefs.contact} id="contact"><Contact /></div>
      </main>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </AnimatePresence>
    </>
  )
}

export default App
