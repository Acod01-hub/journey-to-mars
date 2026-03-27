import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import SpacecraftToggle from './SpacecraftToggle'

const Exploration = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax for journey line
  const journeyProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100])

  const journeyStages = [
    {
      id: 1,
      title: "Launch",
      description: "Powerful rockets propel the spacecraft beyond Earth's atmosphere",
      icon: "🚀",
      color: "#3b82f6",
    },
    {
      id: 2,
      title: "Earth Orbit",
      description: "Initial orbit established for system checks and trajectory alignment",
      icon: "🌍",
      color: "#22c55e",
    },
    {
      id: 3,
      title: "Trans-Mars Injection",
      description: "Spacecraft accelerates to escape velocity, beginning the interplanetary journey",
      icon: "💫",
      color: "#8b5cf6",
    },
    {
      id: 4,
      title: "Deep Space Transit",
      description: "7-month journey through the void, with constant communication with Earth",
      icon: "⭐",
      color: "#f59e0b",
    },
    {
      id: 5,
      title: "Mars Approach",
      description: "Spacecraft enters Mars gravity well, preparing for orbital insertion",
      icon: "🔴",
      color: "#ef4444",
    },
    {
      id: 6,
      title: "Landing",
      description: "Precision landing on the Martian surface at designated site",
      icon: "🏁",
      color: "#c1440e",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] py-20 md:py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 sticky top-20 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-cosmic-blue/20 border border-cosmic-blue/30 rounded-full text-blue-400 text-sm font-space tracking-wider mb-6">
            SPACE TRAVEL
          </span>
          
          <h2 className="font-space text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The <span className="text-gradient">Journey</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Follow the spacecraft's path from Earth to Mars through the vast expanse of space.
          </p>
        </motion.div>

        {/* Journey visualization */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-purple-500 to-mars-orange"
              style={{
                height: useTransform(journeyProgress, (v) => `${v}%`),
              }}
            />
          </div>

          {/* Journey stages */}
          <div className="space-y-32 md:space-y-48 py-20">
            {journeyStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Content card */}
                <motion.div
                  className={`glass-card p-6 md:p-8 md:w-[45%] ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  } text-center`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="text-5xl block mb-4"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {stage.icon}
                  </motion.span>
                  <h3 className="font-space text-xl md:text-2xl font-bold text-white mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-gray-400">
                    {stage.description}
                  </p>
                </motion.div>

                {/* Center marker */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                  style={{ backgroundColor: `${stage.color}30`, borderColor: stage.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                >
                  <motion.div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: stage.color }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Stage number */}
                <div className={`md:w-[45%] flex ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-center`}>
                  <span 
                    className="font-space text-6xl md:text-8xl font-bold opacity-20"
                    style={{ color: stage.color }}
                  >
                    {String(stage.id).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spacecraft details section */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h3 className="font-space text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Spacecraft <span className="text-gradient">Details</span>
          </h3>
          <SpacecraftToggle />
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Exploration
