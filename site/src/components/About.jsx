import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../constants'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
}

const skillColumnVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100, damping: 20 },
  }),
}

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
)

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const skillIcons = { UX: <UserIcon />, UI: <LayersIcon />, Tools: <ToolsIcon /> }

const borderStyles = {
  UX: { border: 'border-blue-900/30', hover: 'group-hover:border-blue-500/50', bg: 'from-blue-900/10' },
  UI: { border: 'border-purple-900/30', hover: 'group-hover:border-purple-500/50', bg: 'from-purple-900/10' },
  Tools: { border: 'border-emerald-900/30', hover: 'group-hover:border-emerald-500/50', bg: 'from-emerald-900/10' },
}

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 md:py-32 container mx-auto px-6">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto text-center text-lg text-gray-300 space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={itemVariants}>
          For over six years in cinematic VFX, my craft was invisible. As a Matchmove Artist, I lived in a world of pixels and precision, deconstructing complex scenes to create the seamless visual stories you see on screen. It taught me a deep appreciation for the viewer's perspective and the meticulous detail required to make the complex feel effortless.
        </motion.p>
        <motion.p variants={itemVariants}>
          That same obsession with the end-user experience drew me to product design. I discovered that choreographing a perfect camera move and designing an intuitive user flow share the same DNA: empathy, an eye for detail, and a passion for elegant solutions. Today, I use my unique background in motion and storytelling to build digital products that aren't just functional, but feel intuitive and memorable.
        </motion.p>
      </motion.div>

      <motion.div
        className="my-16 md:my-24 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8 rounded-2xl bg-brand-bg/50 border border-gray-800 shadow-lg text-center backdrop-blur-xl">
          <p className="text-2xl italic text-gray-200">
            "I translate cinematic attention to detail from VFX into thoughtful digital product experiences."
          </p>
        </div>
      </motion.div>

      <motion.h3
        className="text-3xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skills</span>
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {skills.map((skillGroup, index) => {
          const style = borderStyles[skillGroup.category] || { border: 'border-gray-800', hover: 'group-hover:border-gray-600', bg: 'from-gray-800/50' }
          return (
            <motion.div
              key={skillGroup.category}
              className={`group p-8 rounded-2xl border ${style.border} ${style.hover} shadow-lg backdrop-blur-xl bg-gradient-to-b ${style.bg} to-transparent transition-colors duration-300`}
              variants={skillColumnVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <div className="flex items-center mb-4">
                {skillIcons[skillGroup.category]}
                <h3 className="text-2xl font-bold text-white ml-3">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 group-hover:text-white transition-colors">{skill}</li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default About
