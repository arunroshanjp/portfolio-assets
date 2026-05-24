import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../constants'

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const resumeUrl = 'https://drive.google.com/file/d/1gdajNn9JdsyrsPX-WZjXquG-MfOA3T_J/view?usp=sharing'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({ top: targetElement.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center justify-center w-full pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
          className="pointer-events-auto flex items-center p-1.5 bg-brand-dark/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50"
        >
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="pl-5 pr-3 py-2 text-white font-bold text-sm tracking-widest hover:text-blue-400 transition-colors"
          >
            AR
          </a>
          <div className="w-px h-4 bg-white/20 mx-1" />
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              )
            })}
          </div>
          <AnimatePresence>
            {activeSection !== 'hero' && (
              <motion.div
                initial={{ width: 0, opacity: 0, scale: 0.8 }}
                animate={{ width: 'auto', opacity: 1, scale: 1 }}
                exit={{ width: 0, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0, stiffness: 300, damping: 30 }}
                className="flex items-center overflow-hidden"
              >
                <div className="w-px h-4 bg-white/20 mx-1 ml-2 flex-shrink-0" />
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-4 pr-5 py-2 text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap"
                >
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* Mobile Navbar */}
      <header className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="text-xl font-black tracking-widest text-white z-50 relative"
          >
            ARUNROSHAN
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="z-50 relative p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <motion.span
                className="block w-full h-0.5 bg-white rounded-full origin-right"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -1 : 0 }}
              />
              <motion.span
                className="block w-3/4 h-0.5 bg-white rounded-full"
                animate={{ opacity: menuOpen ? 0 : 1 }}
              />
              <motion.span
                className="block w-full h-0.5 bg-white rounded-full origin-right"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 1 : 0 }}
              />
            </div>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-brand-dark flex flex-col items-center justify-center space-y-8 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-3xl font-bold transition-colors ${activeSection === link.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400' : 'text-gray-500 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-500 hover:text-white transition-colors mt-4 flex items-center gap-2 border-2 border-white/10 px-6 py-2 rounded-full"
              >
                RESUME
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Navbar
