import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const Navbar = () => {
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Set dark mode as default on initial load
    document.documentElement.classList.add('dark')
    
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Minimal brand mark */}
          <motion.div
            animate={{ scale: scrolled ? 0.8 : 1 }}
            transition={{ duration: 0.5 }}
            className="w-2 h-2 bg-gray-400 rounded-full"
          />

          {/* Just theme toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            onClick={() => setIsDark(!isDark)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 