'use client'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
