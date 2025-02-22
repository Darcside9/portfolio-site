'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Scienops',
    description: 'Developed a Cutting-Edge Scientific Operations Platform.',
    image: '/images/scienops.jpg',
    tech: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Evince',
    description: 'Developed a Pharmaceutical Driven Platform focused on the Implementation of AI in Drug Discovery',
    image: '/images/evince_dev.png',
    tech: ['HTML', 'Python', 'PDF.js']
  },
  {
    title: 'Google Sites Enhancement',
    description: 'Contributed to improving Google Sites functionality.',
    image: '/images/google-sites.jpg',
    tech: ['JavaScript', 'Google Apps Script']
  },
  {
    title: 'Excalidraw Diagrams',
    description: 'Designed and implemented custom diagram components.',
    image: '/images/excalidraw.jpg',
    tech: ['React', 'SVG', 'Canvas API', 'Excalidraw']
  }
]

const Projects = () => {
  return (
    <section className="py-20 bg-black" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500 text-white text-xs px-2 py-1 rounded-lg shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
