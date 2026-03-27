import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MarsFactsCarousel from './MarsFactsCarousel'

const Insight = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  const missionCards = [
    {
      id: 1,
      title: "Surface Exploration",
      description: "Deploy rovers and drones to map Martian terrain and identify resources",
      icon: "🤖",
      image: "linear-gradient(135deg, #c1440e 0%, #e07035 100%)",
      stats: { area: "500 km²", duration: "2 years" },
    },
    {
      id: 2,
      title: "Habitat Construction",
      description: "Build sustainable living quarters using local Martian materials",
      icon: "🏗️",
      image: "linear-gradient(135deg, #1e3a5f 0%, #3b82f6 100%)",
      stats: { capacity: "12 crew", completion: "18 months" },
    },
    {
      id: 3,
      title: "Resource Extraction",
      description: "Extract water ice and produce oxygen and fuel from Martian atmosphere",
      icon: "⛏️",
      image: "linear-gradient(135deg, #4a1c6e 0%, #8b5cf6 100%)",
      stats: { water: "1000L/day", oxygen: "500L/day" },
    },
    {
      id: 4,
      title: "Scientific Research",
      description: "Search for signs of past life and study Martian geology",
      icon: "🔬",
      image: "linear-gradient(135deg, #065f46 0%, #10b981 100%)",
      stats: { experiments: "50+", samples: "1000+" },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 md:py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-mars-red/20 border border-mars-red/30 rounded-full text-mars-orange text-sm font-space tracking-wider mb-6">
            LANDING ON MARS
          </span>
          
          <h2 className="font-space text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mission <span className="text-gradient">Objectives</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Once on Mars, our crew will undertake groundbreaking activities that will 
            shape the future of human space exploration.
          </p>
        </motion.div>

        {/* Mission cards grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {missionCards.map((card) => (
            <motion.div
              key={card.id}
              className="group relative"
              variants={cardVariants}
            >
              <motion.div
                className="glass-card overflow-hidden cursor-pointer h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card header with gradient */}
                <div
                  className="h-32 relative"
                  style={{ background: card.image }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-6xl filter drop-shadow-lg">{card.icon}</span>
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-white font-space text-sm tracking-wider">VIEW DETAILS</span>
                  </motion.div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="font-space text-xl font-bold text-white mb-2 group-hover:text-mars-orange transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {card.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4">
                    {Object.entries(card.stats).map(([key, value]) => (
                      <motion.div
                        key={key}
                        className="bg-white/5 rounded-lg px-3 py-2"
                        whileHover={{ backgroundColor: "rgba(224, 112, 53, 0.1)" }}
                      >
                        <p className="text-gray-500 text-xs uppercase">{key}</p>
                        <p className="text-white font-space font-semibold">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-mars-orange/0 rounded-2xl pointer-events-none"
                  whileHover={{ borderColor: "rgba(224, 112, 53, 0.5)" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mars facts carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="font-space text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Mars <span className="text-gradient">Facts</span>
          </h3>
          <MarsFactsCarousel />
        </motion.div>
      </div>

      {/* Background Mars surface texture */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-mars-red/5 to-transparent pointer-events-none" />
    </section>
  )
}

export default Insight
