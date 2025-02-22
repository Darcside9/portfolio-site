'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg"
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center space-x-8">
          <li>
            <Link href="/" className="text-white text-xl font-semibold">My Portfolio</Link>
          </li>
          <li className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white hover:text-blue-400 transition-colors">About</Link>
            <Link href="#projects" className="text-white hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="#skills" className="text-white hover:text-blue-400 transition-colors">Skills</Link>
            <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
          </li>
          <li className="md:hidden">
            <button className="text-white">☰</button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
