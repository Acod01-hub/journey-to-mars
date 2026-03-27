import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-space-black"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Launch pad */}
      <div className="relative">
        {/* Ground/Platform */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-t-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Rocket */}
        <motion.div
          className="relative z-10"
          initial={{ y: 0 }}
          animate={{ y: [-5, -300] }}
          transition={{
            duration: 2.5,
            delay: 1,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          {/* Rocket SVG */}
          <svg
            width="80"
            height="160"
            viewBox="0 0 80 160"
            fill="none"
            xmlns="[w3.org](http://www.w3.org/2000/svg)"
          >
            {/* Rocket body */}
            <motion.path
              d="M40 0C40 0 20 30 20 80V130H60V80C60 30 40 0 40 0Z"
              fill="url(#rocketGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            
            {/* Window */}
            <motion.circle
              cx="40"
              cy="60"
              r="12"
              fill="#1e3a5f"
              stroke="#87ceeb"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            />
            <motion.circle
              cx="40"
              cy="60"
              r="6"
              fill="#87ceeb"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Fins */}
            <motion.path
              d="M20 100L5 140L20 130V100Z"
              fill="#c1440e"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.path
              d="M60 100L75 140L60 130V100Z"
              fill="#c1440e"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            />

            {/* Flame */}
            <motion.g
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.ellipse
                cx="40"
                cy="155"
                rx="15"
                ry="25"
                fill="url(#flameGradient)"
                animate={{
                  ry: [25, 35, 25],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 0.15,
                  repeat: Infinity,
                }}
              />
              <motion.ellipse
                cx="40"
                cy="150"
                rx="10"
                ry="18"
                fill="#ffd700"
                animate={{
                  ry: [18, 25, 18],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                }}
              />
              <motion.ellipse
                cx="40"
                cy="145"
                rx="5"
                ry="10"
                fill="#fff"
                animate={{
                  ry: [10, 15, 10],
                }}
                transition={{
                  duration: 0.08,
                  repeat: Infinity,
                }}
              />
            </motion.g>

            <defs>
              <linearGradient id="rocketGradient" x1="20" y1="0" x2="60" y2="130">
                <stop offset="0%" stopColor="#e8e8e8" />
                <stop offset="50%" stopColor="#d0d0d0" />
                <stop offset="100%" stopColor="#b0b0b0" />
              </linearGradient>
              <linearGradient id="flameGradient" x1="40" y1="130" x2="40" y2="180">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="50%" stopColor="#ff4500" />
                <stop offset="100%" stopColor="#ff0000" />
              </linearGradient>
            </defs>
          </svg>

          {/* Smoke particles */}
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 rounded-full bg-gray-400/30"
                style={{
                  left: `${(i % 3) * 15 - 15}px`,
                }}
                animate={{
                  y: [0, 100],
                  x: [(i % 2 === 0 ? -1 : 1) * 20, (i % 2 === 0 ? -1 : 1) * 50],
                  scale: [0.5, 2],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.8 + i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="font-space text-2xl md:text-3xl text-white mb-4">
          Preparing for Launch
        </h2>
        <motion.div className="flex gap-1 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-mars-orange rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Countdown */}
      <motion.p
        className="absolute bottom-10 font-space text-mars-orange/70 text-sm tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        MISSION ODYSSEY • DESTINATION: MARS
      </motion.p>
    </motion.div>
  )
}

export default Loader
