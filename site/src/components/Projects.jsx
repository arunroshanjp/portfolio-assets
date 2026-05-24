import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { mainProjects } from '../constants'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100, damping: 20 },
  }),
  hover: {
    y: -10, scale: 1.02,
    boxShadow: '0px 20px 40px rgba(6, 182, 212, 0.1)',
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
}

const ProjectCard = ({ project, index, onClick }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <motion.div
      ref={ref}
      className="group rounded-2xl overflow-hidden bg-brand-bg/50 border border-gray-800 shadow-lg cursor-pointer backdrop-blur-xl hover:border-blue-500/50 transition-colors duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      onClick={onClick}
      whileHover="hover"
    >
      <div className="h-64 overflow-hidden relative">
        <motion.img
          style={{ y }}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-[120%] object-cover absolute top-[-10%]"
          transition={{ duration: 0.4, ease: 'circOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-light mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
          {project.type}
        </p>
        <p className="text-gray-300 mb-4">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-dark/50 rounded-full text-xs font-medium text-blue-100 border border-blue-900/30 group-hover:border-blue-500/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = ({ onProjectClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 md:py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Projects</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
        {mainProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
