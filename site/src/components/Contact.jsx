import React from 'react'
import { motion } from 'framer-motion'

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/arunroshan-jp-7a3aab184' },
  { name: 'Behance', href: 'https://www.behance.net/arunroshanjp' },
  { name: 'Dribbble', href: 'https://dribbble.com/arunroshan-jp' },
]

const Contact = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section className="flex flex-col justify-center py-12 md:py-24 container mx-auto px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Let's build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            something great.
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        <div className="mt-12 flex flex-col items-center gap-8">
          <a
            href="mailto:arun.roshan.jp@gmail.com"
            className="inline-block text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            arun.roshan.jp@gmail.com
          </a>

          <div className="flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-6">Connect</span>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {socials.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-lg font-medium text-white hover:text-blue-400 transition-colors"
                >
                  {name}
                  <svg
                    className="ml-1.5 w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 w-full">
          <p className="text-gray-500 text-sm">
            Designed &amp; Developed by Arunroshan • © {currentYear}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
