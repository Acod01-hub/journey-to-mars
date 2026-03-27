import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SpacecraftToggle = () => {
  const [activeSection, setActiveSection] = useState('propulsion')

  const sections = {
    propulsion: {
      title: "Propulsion System",
      icon: "🔥",
      specs: [
        { label: "Engine Type", value: "Raptor Full-Flow" },
        { label: "Thrust", value: "2,300 kN" },
        { label: "Fuel", value: "Liquid Methane + LOX" },
        { label: "Specific Impulse", value: "380s (vacuum)" },
      ],
      description: "Advanced full-flow staged combustion engines provide the immense thrust needed to escape Earth's gravity and perform interplanetary maneuvers.",
    },
    lifesupport: {
      title: "Life Support",
      icon: "💨",
      specs: [
        { label: "Oxygen Generation", value: "MOXIE System" },
        { label: "Water Recycling", value: "95% Efficiency" },
        { label: "CO2 Scrubbing", value: "Active Chemical" },
        { label: "Crew Capacity", value: "6-12 Astronauts" },
      ],
      description: "Closed-loop environmental systems maintain breathable atmosphere and recycle water, enabling extended missions far from Earth's resources.",
    },
    navigation: {
      title: "Navigation",
      icon: "🧭",
      specs: [
        { label: "Primary", value: "Deep Space Network" },
        { label: "Backup", value: "Star Tracker Array" },
        { label: "Precision", value: "±10m at Mars" },
        { label: "Communication", value: "X-Band / Ka-Band" },
      ],
      description: "Advanced autonomous navigation systems combined with Earth-based tracking ensure precise trajectory control across millions of kilometers.",
    },
    habitat: {
      title: "Crew Habitat",
      icon: "🏠",
      specs: [
        { label: "Volume", value: "825 m³" },
        { label: "Radiation Shield", value: "Water Wall + Polyethylene" },
        { label: "Artificial Gravity", value: "Rotation System" },
        { label: "Storage", value: "100 tons cargo" },
      ],
      description: "Spacious living quarters with radiation protection and optional rotation for artificial gravity ensure crew health during the 7-month journey.",
    },
  }

  return (
    <div className="glass-card p-6 md:p-8">
      {/* Toggle buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(sections).map(([key, section]) => (
          <motion.button
            key={key}
            className={`px-4 py-2 rounded-full font-space text-sm transition-all duration-300 flex items-center gap-2 ${
              activeSection === key
                ? 'bg-mars-orange text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
            onClick={() => setActiveSection(key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{section.icon}</span>
            <span className="hidden sm:inline">{section.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Visualization */}
          <div className="relative aspect-square max-w-sm mx-auto">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(224, 112, 53, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                {/* Inner ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  fill="none"
                  stroke="rgba(224, 112, 53, 0.3)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>

            {/* Central spacecraft icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative">
                <motion.span
                  className="text-7xl"
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  {sections[activeSection].icon}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-mars-orange/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Floating data points */}
            {sections[activeSection].specs.map((spec, index) => {
              const angle = (index * 90 + 45) * (Math.PI / 180)
              const radius = 80
              const x = 100 + Math.cos(angle) * radius
              const y = 100 + Math.sin(angle) * radius
              
              return (
                <motion.div
                  key={spec.label}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-mars-orange rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h4 className="font-space text-2xl font-bold text-white mb-3">
                {sections[activeSection].title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {sections[activeSection].description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sections[activeSection].specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="bg-white/5 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    {spec.label}
                  </p>
                  <p className="text-white font-space font-semibold">
                    {spec.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SpacecraftToggle
