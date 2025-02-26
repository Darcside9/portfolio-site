'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import ThreeScene from './ThreeScene'
import { FaGithub, FaSlack, FaTiktok, FaFacebook, FaEnvelope, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  const [text, setText] = useState('')
  const [showIcons, setShowIcons] = useState(false)
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

  const handleDynamicIsland = () => {
    setShowIcons(true)
    setTimeout(() => setShowIcons(false), 4000) // Reset after 4 seconds
  }

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Darcside9" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername" },
    { icon: FaEnvelope, href: "mailto:your.email@example.com" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100090027917721" },
    { icon: FaSlack, href: "https://darc-999.slack.com" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@coder__22?is_from_webapp=1&sender_device=pc" }
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900"
    >
      <div className="absolute inset-0 z-0 blur-md">
        <ThreeScene />
      </div>

      <div className="relative z-10 text-center p-8 rounded-lg">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[70px] md:text-7x1 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-poppins"
        >
          Omotoyosi Jamiu Fujah
        </motion.h1>

        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl mb-8"
          aria-live="polite"
        >
          {text}
        </motion.p>

        {/* Dynamic Island Button and Social Icons */}
        <div className='flex items-center justify-center gap-4'>
          <AnimatePresence>
            {!showIcons && (
              <motion.button
                key="dynamicButton"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDynamicIsland}
                initial={{ width: 140, opacity: 1 }}
                animate={{ width: showIcons ? 300 : 140, opacity: showIcons ? 0 : 1 }}
                exit={{ width: 140, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 overflow-hidden"
              >
                Get in Touch
              </motion.button>
            )}
          </AnimatePresence>

          {showIcons && (
            <AnimatePresence>
              <motion.div
                key="socialIcons"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center gap-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </motion.section>
  )
}

export default Hero;
