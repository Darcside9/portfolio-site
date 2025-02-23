'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import ThreeScene from './ThreeScene'
import { FaGithub, FaSlack, FaTiktok, FaFacebook } from 'react-icons/fa'

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
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-900"
    >
        <div className="absolute inset-0 z-0 blur-md">
            <ThreeScene/>
        </div>
        
        <div className="relative z-10 text-center p-8 rounded-lg">
        
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[70px] md:text-7x1 font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-poppins"
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


        {/* Buttons Container */}
        <div className='flex items-center justify-center gap-4'>
          
          {/*Github Button*/}
          <motion.a
            href='https://github.com/Darcside9'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{scale: 1.1, rotate:-10}}
            whileTap={{scale: 0.9}}
            className='bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300'
          >
            <FaGithub size={24}/>
          </motion.a>

          {/*Facebook Button*/}
          <motion.a
            href='https://www.facebook.com/profile.php?id=100090027917721'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{scale: 1.1, rotate:10}}
            whileTap={{scale: 0.9}}
            className='bg-blue-800 hover:bg-blue-900 text-white p-3 rounded-full transition-colors duration-300'
          >
            <FaFacebook size={24}/>
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 border-2 border-[#503349] rounded-full transition-colors duration-300"
            onClick={() => alert('Redirecting to Contact Form')}  // Add functionality
          >
            Get in Touch
          </motion.button>

          {/*Slack Button*/}
          <motion.a
            href='https://darc-999.slack.com'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{scale: 1.1, rotate:-10}}
            whileTap={{scale: 0.9}}
            className='bg-[#4A154B] hover:bg-[#783d91] text-white p-3 rounded-full transition-colors duration-300'
          >
            <FaSlack size={24}/>
          </motion.a>

          {/*Instagram Button*/}
          <motion.a
            href='https://www.tiktok.com/@coder__22?is_from_webapp=1&sender_device=pc'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{scale: 1.1, rotate:10}}
            whileTap={{scale: 0.9}}
            className='bg-black-800 hover:bg-red-900 text-white p-3 rounded-full transition-colors duration-300'
          >
            {<FaTiktok size={24}/>}
          </motion.a>


        </div>
      </div>
    </motion.section>
  )
}

export default Hero
