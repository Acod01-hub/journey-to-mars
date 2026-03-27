import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import ParallaxStars from './components/ParallaxStars'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Exploration from './components/Exploration'
import Insight from './components/Insight'
import Conclusion from './components/Conclusion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <ParallaxStars />
            <Hero />
            <Introduction />
            <Exploration />
            <Insight />
            <Conclusion />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
