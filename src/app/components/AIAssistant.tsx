'use client'
import { motion } from 'framer-motion'

const AIAssistant = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          AI Assistant Project
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-white">Personal AI Assistant</h3>
          <p className="text-lg mb-4 text-gray-300">
            I&apos;m currently developing a cutting-edge personal AI assistant using state-of-the-art technologies:
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            <li>LLaMA2 for advanced natural language processing</li>
            <li>Electron for cross-platform desktop application development</li>
            <li>React for building a responsive and intuitive user interface</li>
          </ul>
          <p className="text-lg mb-6 text-gray-300">
            This project aims to create a highly personalized and efficient AI assistant that can help with various tasks, from scheduling to complex problem-solving.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}

export default AIAssistant
