import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: '100vh', opacity: 0 },
  visible: { y: '0', opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 100, damping: 20 } },
}

const contentContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
}

const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
}

const mockupVariants = {
  rest: { scale: 1, filter: 'grayscale(100%)', transition: { duration: 0.4 } },
  hover: { scale: 1.05, filter: 'grayscale(0%)', transition: { duration: 0.3 } },
}

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ProjectModal = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const isKioskProject = project.id === 102
  const isTVProject = project.id === 103
  const isAirbnbProject = project.id === 104

  let mockupsTitle = 'Mockups'
  if (isKioskProject) mockupsTitle = 'UI Screens'
  if (isAirbnbProject) mockupsTitle = 'Study'

  const mockupsGridClass = (isKioskProject || isTVProject || isAirbnbProject)
    ? 'flex flex-col gap-8'
    : 'grid grid-cols-1 md:grid-cols-2 gap-4'

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-brand-bg/80 backdrop-blur-xl w-full max-w-4xl h-[90vh] rounded-2xl overflow-y-auto p-8 relative border border-gray-800 shadow-2xl shadow-white/5"
          variants={modal}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          >
            <CloseIcon />
          </button>

          <motion.div variants={contentContainerVariants} initial="hidden" animate="visible">
            <motion.h2 variants={contentItemVariants} className="text-4xl font-bold mb-2 text-white pr-10">
              {project.title}
            </motion.h2>
            <motion.p variants={contentItemVariants} className="text-lg text-gray-400 mb-6">
              {project.type}
            </motion.p>

            {!isTVProject && project.liveLink && (
              <motion.div variants={contentItemVariants} className="mb-10">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full shadow-lg border-2 border-white"
                  whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  View Project
                </motion.a>
              </motion.div>
            )}

            <div className="space-y-10">
              {project.problem && (
                <motion.div variants={contentItemVariants}>
                  <h3 className="text-2xl font-bold text-gray-200 mb-3">Problem Statement</h3>
                  <p className="text-gray-300">{project.problem}</p>
                </motion.div>
              )}

              {project.summary && (
                <motion.div variants={contentItemVariants}>
                  <h3 className="text-2xl font-bold text-gray-200 mb-3">Summary</h3>
                  <p className="text-gray-300">{project.summary}</p>
                </motion.div>
              )}

              {project.embedUrl && (
                <motion.div variants={contentItemVariants} className="w-full aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
                  <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width="100%"
                    height="100%"
                    src={project.embedUrl}
                    allowFullScreen
                    title="Embedded Project"
                  />
                </motion.div>
              )}

              {project.process && (
                <motion.div variants={contentItemVariants}>
                  <h3 className="text-2xl font-bold text-gray-200 mb-3">Design Process</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    {project.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-brand-dark rounded-full text-sm font-medium text-gray-300 border border-gray-700">
                          {step}
                        </span>
                        {index < project.process.length - 1 && (
                          <span className="text-gray-500 text-xl">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.learnings && (
                <motion.div variants={contentItemVariants}>
                  <h3 className="text-2xl font-bold text-gray-200 mb-3">Key Learnings</h3>
                  <p className="text-gray-300 italic">{project.learnings}</p>
                </motion.div>
              )}

              {project.mockups && (
                <motion.div variants={contentItemVariants}>
                  {!isTVProject && (
                    <h3 className="text-2xl font-bold text-gray-200 mb-4">{mockupsTitle}</h3>
                  )}
                  <div className={mockupsGridClass}>
                    {project.mockups.map((mockupUrl, index) => (
                      <motion.div
                        key={index}
                        className="rounded-lg shadow-lg overflow-hidden cursor-zoom-in"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        onClick={() => setSelectedImage(mockupUrl)}
                      >
                        <motion.img
                          src={mockupUrl}
                          alt={`${mockupsTitle} ${index + 1}`}
                          className="w-full object-cover"
                          variants={mockupVariants}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-black/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </button>
            <motion.img
              src={selectedImage}
              alt="Full Screen View"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectModal
