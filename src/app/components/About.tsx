'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gray-900"
      id="about"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section (Text content) */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300">
            I&apos;m a passionate UI/UX designer, web developer, and ethical hacker with a keen eye for creating intuitive and visually stunning digital experiences.
            </p>
            <p className="text-lg text-gray-300">
            My expertise spans across modern web technologies like React and Next.js, as well as backend development with Python. I&apos;m also proficient in Linux (Parrot OS) and ethical hacking tools like Metasploit.
            </p>
            <p className="text-lg text-gray-300">
            I believe in the power of technology to solve real-world problems and am constantly pushing the boundaries of what&apos;s possible in the digital realm.
            </p>
          </motion.div>

          {/* Right Section (Skills list) */}
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-lg"
          >
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">Key Skills</h3>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
                <li>UI/UX Design</li>
                <li>Web Development (React, Next.js)</li>
                <li>Mobile App Development</li>
                <li>Python Programming</li>
                <li>Ethical Hacking</li>
                <li>Linux Administration</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
