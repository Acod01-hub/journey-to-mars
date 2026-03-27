import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxStars = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Create different layers of stars with different parallax speeds
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -500])
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -300])
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -150])

  // Generate random stars
  const generateStars = (count, sizeRange) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 300,
      size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
      opacity: 0.3 + Math.random() * 0.7,
      animationDelay: Math.random() * 5,
    }))
  }

  const layer1Stars = generateStars(100, [1, 2])
  const layer2Stars = generateStars(60, [2, 3])
  const layer3Stars = generateStars(30, [3, 5])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-deep-space to-space-black opacity-90" />
      
      {/* Nebula effects */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(74,28,110,0.4) 0%, transparent 70%)',
          y: layer1Y,
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(30,58,95,0.4) 0%, transparent 70%)',
          y: layer2Y,
        }}
      />
      <motion.div
        className="absolute top-3/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(193,68,14,0.3) 0%, transparent 70%)',
          y: layer3Y,
        }}
      />

      {/* Star Layer 1 - Fastest */}
      <motion.div className="absolute inset-0" style={{ y: layer1Y }}>
        {layer1Stars.map((star) => (
          <motion.div
            key={`l1-${star.id}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: star.animationDelay,
            }}
          />
        ))}
      </motion.div>

      {/* Star Layer 2 - Medium */}
      <motion.div className="absolute inset-0" style={{ y: layer2Y }}>
        {layer2Stars.map((star) => (
          <motion.div
            key={`l2-${star.id}`}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              background: `radial-gradient(circle, rgba(255,255,255,${star.opacity}) 0%, transparent 70%)`,
            }}
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: star.animationDelay,
            }}
          />
        ))}
      </motion.div>

      {/* Star Layer 3 - Slowest (brightest stars) */}
      <motion.div className="absolute inset-0" style={{ y: layer3Y }}>
        {layer3Stars.map((star) => (
          <motion.div
            key={`l3-${star.id}`}
            className="absolute"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
          >
            {/* Star glow */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: star.size * 3,
                height: star.size * 3,
                background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: star.animationDelay,
              }}
            />
            {/* Star core */}
            <motion.div
              className="absolute bg-white rounded-full"
              style={{
                width: star.size,
                height: star.size,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Distant planets */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-16 h-16 md:w-24 md:h-24 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #6b7280 0%, #374151 50%, #1f2937 100%)',
          boxShadow: 'inset -5px -5px 20px rgba(0,0,0,0.5)',
          y: layer2Y,
        }}
      />
      <motion.div
        className="absolute top-[60%] left-[5%] w-12 h-12 md:w-20 md:h-20 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #fcd34d 0%, #d97706 50%, #92400e 100%)',
          boxShadow: 'inset -4px -4px 15px rgba(0,0,0,0.4)',
          y: layer3Y,
        }}
      />
    </div>
  )
}

export default ParallaxStars
