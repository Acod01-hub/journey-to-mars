import { motion } from 'framer-motion'

const OrbitPath = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="orbitGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c1440e" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#e07035" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c1440e" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="orbitGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Orbit path 1 */}
      <motion.ellipse
        cx="500"
        cy="700"
        rx="400"
        ry="150"
        fill="none"
        stroke="url(#orbitGradient1)"
        strokeWidth="1"
        strokeDasharray="10 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      {/* Orbit path 2 */}
      <motion.ellipse
        cx="500"
        cy="700"
        rx="500"
        ry="200"
        fill="none"
        stroke="url(#orbitGradient2)"
        strokeWidth="1"
        strokeDasharray="15 10"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      {/* Animated satellite on orbit 1 */}
      <motion.g
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "500px 700px" }}
      >
        <circle cx="900" cy="700" r="4" fill="#e07035">
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="900" cy="700" r="8" fill="none" stroke="#e07035" strokeOpacity="0.3">
          <animate
            attributeName="r"
            values="8;16;8"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.g>

      {/* Animated satellite on orbit 2 */}
      <motion.g
        initial={{ rotate: 180 }}
        animate={{ rotate: -180 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "500px 700px" }}
      >
        <circle cx="1000" cy="700" r="3" fill="#3b82f6">
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </motion.g>

      {/* Mars destination indicator */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <circle cx="500" cy="150" r="20" fill="#c1440e" fillOpacity="0.3" />
        <circle cx="500" cy="150" r="10" fill="#e07035" />
        <motion.circle
          cx="500"
          cy="150"
          r="30"
          fill="none"
          stroke="#c1440e"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={{ r: [30, 50, 30], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <text x="500" y="200" textAnchor="middle" fill="#e07035" fontSize="12" fontFamily="Orbitron">
          DESTINATION
        </text>
      </motion.g>
    </svg>
  )
}

export default OrbitPath
