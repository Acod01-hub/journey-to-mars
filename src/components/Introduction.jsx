import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

const Introduction = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const missionStats = [
    { value: "225M", label: "KM Distance", icon: "🚀" },
    { value: "7", label: "Month Journey", icon: "⏱️" },
    { value: "687", label: "Days per Year", icon: "🌍" },
    { value: "-60°C", label: "Avg Temperature", icon: "🌡️" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32 px-4"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-mars-orange/10 border border-mars-orange/30 rounded-full text-mars-orange text-sm font-space tracking-wider mb-6"
            variants={itemVariants}
          >
            MISSION OVERVIEW
          </motion.span>
          
          <motion.h2
            className="font-space text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            The Red Planet
            <span className="text-gradient"> Awaits</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Mars, the fourth planet from the Sun, has captivated humanity's imagination 
            for centuries. Now, we stand on the brink of making interplanetary travel a reality.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {missionStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                borderColor: "rgba(224, 112, 53, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="text-4xl block mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.icon}
              </motion.span>
              <motion.h3
                className="font-space text-2xl md:text-3xl font-bold text-white mb-1"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left column - Mars visualization */}
          <motion.div
            className="relative aspect-square max-w-md mx-auto"
            variants={itemVariants}
          >
            {/* Mars */}
            <motion.div
              className="absolute inset-[15%] rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, #e07035 0%, #c1440e 50%, #8b2500 100%)',
                boxShadow: 'inset -20px -20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(193,68,14,0.3)',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 100,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Surface features */}
              <div className="absolute top-[30%] left-[20%] w-16 h-8 bg-[#a83808] rounded-full opacity-60 blur-[2px]" />
              <div className="absolute top-[50%] left-[40%] w-24 h-10 bg-[#a83808] rounded-full opacity-50 blur-[2px]" />
              <div className="absolute top-[65%] left-[25%] w-12 h-6 bg-[#a83808] rounded-full opacity-40 blur-[2px]" />
              
              {/* Polar ice cap */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-16 h-8 bg-white/30 rounded-full blur-[3px]" />
            </motion.div>

            {/* Orbit ring */}
            <motion.div
              className="absolute inset-0 border-2 border-mars-orange/20 rounded-full"
              style={{ borderStyle: 'dashed' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* Orbiting moon (Phobos) */}
            <motion.div
              className="absolute w-4 h-4 bg-gray-400 rounded-full shadow-lg"
              style={{ top: '10%', left: '50%' }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              initial={{ transformOrigin: "0 250%" }}
            />

            {/* Glow effect */}
            <div className="absolute inset-[10%] rounded-full bg-mars-orange/10 blur-3xl" />
          </motion.div>

          {/* Right column - Mission details */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-space text-xl md:text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-mars-orange/20 rounded-lg flex items-center justify-center text-mars-orange">
                  01
                </span>
                Why Mars?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mars is the most accessible planet for human exploration. With a day length 
                similar to Earth's and evidence of water ice, it offers the best conditions 
                for establishing a sustainable human presence beyond our home planet.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-space text-xl md:text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-mars-orange/20 rounded-lg flex items-center justify-center text-mars-orange">
                  02
                </span>
                The Challenge
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Reaching Mars requires overcoming immense challenges: the vast distance, 
                radiation exposure, and the need for self-sustaining systems. Our mission 
                addresses each of these with cutting-edge technology.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-space text-xl md:text-2xl font-semibold text-white mb-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-mars-orange/20 rounded-lg flex items-center justify-center text-mars-orange">
                  03
                </span>
                Our Vision
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We envision a future where humans are a multi-planetary species. This mission 
                is the first step toward establishing a permanent presence on Mars, paving 
                the way for generations to come.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Introduction
