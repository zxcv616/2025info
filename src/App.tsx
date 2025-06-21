import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set dark mode as default on initial load
    document.documentElement.classList.add('dark')
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Minimal loading animation - expanding line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="h-px bg-gray-700"
          />
          
          {/* Loading text appears later */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <p className="text-xs text-gray-400 font-light tracking-[0.3em] uppercase">
              loading...
            </p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-700"
    >
      <Navbar />
      <Hero />
    </motion.div>
  )
}

export default App 