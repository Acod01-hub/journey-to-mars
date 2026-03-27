import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const Conclusion = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const marsScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1])
  const marsY = useTransform(scrollYProgress, [0, 1], [200, -100])

  const futureGoals = [
    {
      year: "2030",
      title: "First Crewed Landing",
      description: "Humans set foot on Mars for the first time in history",
    },
    {
      year: "2035",
      title: "Permanent Base",
      description: "Establish self-sustaining habitats with year-round crew",
    },
    {
      year: "2040",
      title: "First Mars-Born Human",
      description: "The beginning of a true interplanetary civilization",
    },
    {
      year: "2050",
      title: "Terraforming Begins",
      description: "Large-scale environmental modification projects start",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32 px-4 overflow-hidden"
    >
      {/* Large Mars background */}
      <motion.div
        className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-30"
        style={{
          scale: marsScale,
          y: marsY,
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #e07035 0%, #c1440e 50%, #8b2500 100%)',
            boxShadow: 'inset -40px -40px 120px rgba(0,0,0,0.5)',
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-nebula-purple/20 border border-nebula-purple/30 rounded-full text-purple-400 text-sm font-space tracking-wider mb-6">
            THE FUTURE AWAITS
          </span>
          
          <h2 className="font-space text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Beyond the <span className="text-gradient">Horizon</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Our journey to Mars is just the beginning. Together, we're building 
            the foundation for humanity's interplanetary future.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {futureGoals.map((goal, index) => (
            <motion.div
              key={goal.year}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              {/* Connecting line */}
              {index < futureGoals.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-mars-orange/50 to-transparent" />
              )}
              
              <motion.div
                className="glass-card p-6 text-center h-full"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-mars-orange/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="font-space text-mars-orange font-bold">{goal.year}</span>
                </motion.div>
                <h3 className="font-space text-lg font-bold text-white mb-2">
                  {goal.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {goal.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-mars-orange/10 via-transparent to-nebula-purple/10" />
          
          <div className="relative z-10">
            <motion.div
              className="inline-block mb-6"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
              }}
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
            
            <h3 className="font-space text-2xl md:text-4xl font-bold text-white mb-4">
              Be Part of the Mission
            </h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Join thousands of pioneers who are helping to make humanity's 
              greatest adventure a reality. The future of space exploration starts with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Mission
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <div className="mb-8">
            <h4 className="font-space text-2xl font-bold text-gradient mb-2">
              Journey to Mars
            </h4>
            <p className="text-gray-500 text-sm">
              An Interactive Web Odyssey
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {['Twitter', 'Discord', 'GitHub', 'YouTube'].map((social) => (
              <motion.a
                key={social}
                href="#"
                className="text-gray-400 hover:text-mars-orange transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            © 2024 Mission Odyssey. All rights reserved.
          </p>

          <motion.div
            className="mt-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-500 hover:text-mars-orange transition-colors"
            >
              <svg className="w-6 h-6 mx-auto rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-xs font-space tracking-wider mt-2 block">BACK TO TOP</span>
            </button>
          </motion.div>
        </motion.footer>
      </div>
    </section>
  )
}

export default Conclusion
