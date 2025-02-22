'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ThreeScene from './ThreeScene'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "UI/UX Designer | Web Developer | Ethical Hacker"
  const typingSpeed = 100  // Adjust typing speed (in milliseconds)

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(prevText => prevText + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, typingSpeed)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900" hero-section
    >
        <div className="absolute inset-0 z-10">
            <ThreeScene/>
        </div>
      <div className="relative z-10 text-center bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          D∆RC
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl mb-8"
          aria-live="polite"  // Adds accessibility for screen readers
        >
          {text}
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          onClick={() => alert('Redirecting to Contact Form')}  // Add functionality
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.section>
  )
}

export default Hero
