import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const titleContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const letterVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

const Hero = () => {
  const name = 'Arunroshan'

  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const target = document.getElementById('projects')
    if (target) window.scrollTo({ top: target.offsetTop, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center container mx-auto px-6 text-center overflow-hidden">
      <motion.div
        className="max-w-3xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
          variants={titleContainerVariants}
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 hover:to-blue-400 transition-colors duration-500"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 mb-8"
          variants={itemVariants}
        >
          Product Designer &amp; Ex-VFX Matchmove Artist
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Transforming 6+ years of cinematic precision and storytelling from VFX into intuitive, impactful digital products that users love.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 overflow-hidden ring-2 ring-transparent hover:ring-white/20 hover:ring-inset transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1gdajNn9JdsyrsPX-WZjXquG-MfOA3T_J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/5 text-white font-bold rounded-full border-2 border-white/20 hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            View Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
