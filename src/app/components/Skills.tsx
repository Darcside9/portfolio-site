'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Ethical Hacking', level: 75 },
  { name: 'Linux (Parrot OS)', level: 80 },
]

const Skills = () => {
  return (
    <section className="py-20 bg-black" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <div className="bg-gray-700 h-4 rounded-full mb-4">
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-purple-600 h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  aria-label={`${skill.name} skill level ${skill.level}%`}
                />
              </div>
              <p className="text-sm text-gray-400">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
