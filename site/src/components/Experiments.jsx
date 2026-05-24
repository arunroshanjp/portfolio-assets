import React from 'react'
import { motion } from 'framer-motion'
import { smallProjects } from '../constants'

const smallCardContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const smallCardItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

const Experiments = ({ onProjectClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 md:py-32 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Experiments &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Playground
          </span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={smallCardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {smallProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group p-6 bg-brand-bg/50 rounded-2xl border border-gray-800 backdrop-blur-xl shadow-lg hover:border-cyan-500/50 transition-colors cursor-pointer flex flex-col h-full"
              variants={smallCardItemVariants}
              whileHover={{ y: -8, scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
              onClick={() => onProjectClick(project)}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-lg font-bold text-brand-light mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-brand-dark rounded-full text-xs font-medium text-gray-300 border border-gray-700 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experiments
