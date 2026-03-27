import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import OrbitPath from './OrbitPath'

const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })

  const earthY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const earthScale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const earthOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Earth */}
      <motion.div
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        style={{
          y: earthY,
          scale: earthScale,
          opacity: earthOpacity,
        }}
      >
        {/* Earth glow */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />
        
        {/* Earth sphere */}
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #4ade80 0%, #22c55e 20%, #0ea5e9 40%, #0284c7 60%, #1e3a8a 100%)',
            boxShadow: 'inset -30px -30px 100px rgba(0,0,0,0.6), 0 0 100px rgba(59,130,246,0.3)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 200,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Cloud patterns */}
          <div className="absolute inset-0 opacity-40">
            <motion.div
              className="absolute top-[20%] left-[10%] w-32 h-16 bg-white/60 rounded-full blur-sm"
              animate={{ x: [0, 50, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-[40%] left-[50%] w-48 h-20 bg-white/50 rounded-full blur-sm"
              animate={{ x: [0, -30, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-[60%] left-[20%] w-40 h-12 bg-white/40 rounded-full blur-sm"
              animate={{ x: [0, 40, 0] }}
              transition={{ duration: 18, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Atmosphere glow */}
        <div
          className="absolute inset-[-10px] rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 60%, rgba(59,130,246,0.2) 100%)',
          }}
        />
      </motion.div>

      {/* Orbit paths */}
      <OrbitPath />

      {/* Rocket launching */}
      <motion.div
        className="absolute bottom-[30%] left-1/2 -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, -300]) }}
      >
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
            <path
              d="M20 0C20 0 10 15 10 40V65H30V40C30 15 20 0 20 0Z"
              fill="url(#rocketBody)"
            />
            <circle cx="20" cy="30" r="6" fill="#1e3a5f" stroke="#87ceeb" strokeWidth="2"/>
            <path d="M10 50L2 70L10 65V50Z" fill="#c1440e"/>
            <path d="M30 50L38 70L30 65V50Z" fill="#c1440e"/>
            <motion.ellipse
              cx="20"
              cy="75"
              rx="8"
              ry="15"
              fill="url(#flame)"
              animate={{ ry: [15, 20, 15], opacity: [1, 0.8, 1] }}
              transition={{ duration: 0.15, repeat: Infinity }}
            />
            <defs>
              <linearGradient id="rocketBody" x1="10" y1="0" x2="30" y2="65">
                <stop offset="0%" stopColor="#f0f0f0"/>
                <stop offset="100%" stopColor="#d0d0d0"/>
              </linearGradient>
              <linearGradient id="flame" x1="20" y1="65" x2="20" y2="90">
                <stop offset="0%" stopColor="#ffd700"/>
                <stop offset="50%" stopColor="#ff6b35"/>
                <stop offset="100%" stopColor="#ff4500"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y: textY }}
      >
        <motion.p
          className="font-space text-mars-orange text-sm md:text-base tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          MISSION ODYSSEY • 2024
        </motion.p>

        <motion.h1
          className="font-space text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="block text-white">Journey to</span>
          <span className="block text-gradient mt-2">Mars</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Embark on an interactive odyssey through space. Experience the future of human exploration.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('introduction')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Begin Mission
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-gray-400 text-sm font-space tracking-wider">SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-mars-orange">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
