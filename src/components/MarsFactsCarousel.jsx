import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MarsFactsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const facts = [
    {
      title: "Olympus Mons",
      description: "The largest volcano in the solar system, standing at 21.9 km tall – nearly 3 times the height of Mount Everest.",
      icon: "🌋",
      color: "#ef4444",
    },
    {
      title: "Valles Marineris",
      description: "A canyon system stretching 4,000 km long and up to 7 km deep – longer than the continental United States.",
      icon: "🏜️",
      color: "#f59e0b",
    },
    {
      title: "Two Moons",
      description: "Mars has two small moons, Phobos and Deimos. Phobos is slowly spiraling toward Mars and will crash in 50 million years.",
      icon: "🌙",
      color: "#8b5cf6",
    },
    {
      title: "Dust Storms",
      description: "Mars experiences massive dust storms that can engulf the entire planet and last for months at a time.",
      icon: "🌪️",
      color: "#c1440e",
    },
    {
      title: "Water Ice",
      description: "Both polar ice caps contain water ice. The northern cap alone holds enough ice to cover Mars with 11 meters of water if melted.",
      icon: "❄️",
      color: "#06b6d4",
    },
    {
      title: "Sunsets",
      description: "On Mars, sunsets appear blue due to dust particles in the atmosphere scattering light differently than on Earth.",
      icon: "🌅",
      color: "#3b82f6",
    },
  ]

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex >= facts.length) nextIndex = 0
      if (nextIndex < 0) nextIndex = facts.length - 1
      return nextIndex
    })
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="relative overflow-hidden">
        {/* Main carousel content */}
        <div className="relative h-64 md:h-48">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${facts[currentIndex].color}20` }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-5xl">{facts[currentIndex].icon}</span>
              </motion.div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                <h4 className="font-space text-2xl font-bold text-white mb-3">
                  {facts[currentIndex].title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {facts[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          onClick={() => paginate(-1)}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          onClick={() => paginate(1)}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {facts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-mars-orange w-8' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-mars-orange"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={currentIndex}
        />
      </div>
    </div>
  )
}

export default MarsFactsCarousel
