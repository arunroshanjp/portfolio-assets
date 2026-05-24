import React from 'react'
import { motion } from 'framer-motion'

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 100, damping: 20 },
  }),
}

const summaryBoxVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 120, damping: 15 } },
}

const steps = [
  {
    title: 'Years in VFX Matchmove/Layout',
    description: 'Mastered precision, camera tracking, and 3D space. Collaborated with large, cross-functional teams to bring cinematic stories to life, learning the art of visual consistency and pixel-perfect execution.',
    icon: '🎬',
  },
  {
    title: 'The Spark for UI/UX',
    description: "I realized UI/UX aligned perfectly with how I think and create. It lets me combine creativity and problem-solving to design experiences that genuinely connect with people, and that's what sparked my shift into this field",
    icon: '💡',
  },
  {
    title: 'Embracing Product Design',
    description: "I'm now focused on Product Design, using my transferable skills to create user-centered experiences. I'm actively learning, building case studies, and excited to design meaningful digital products.",
    icon: '🚀',
  },
]

const TransitionStory = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 md:py-32 bg-brand-bg/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My Journey:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              From Pixels to People
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="p-8 bg-brand-bg/50 rounded-2xl border border-gray-800 backdrop-blur-xl shadow-lg flex flex-col"
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={i}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 flex-grow">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-6 rounded-2xl bg-brand-bg/50 border border-gray-800 text-center backdrop-blur-xl"
          variants={summaryBoxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Transferable Skills
          </h4>
          <p className="text-gray-300">
            Attention to Detail • Visual Storytelling • Cross-Functional Team Collaboration
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TransitionStory
