'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import { title } from 'process'

const projects = [
  {
    title: 'Scienops',
    description: 'Developed a Cutting-Edge Scientific Operations Platform.',
    image: '/images/scienops.png',
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
    image: '/images/google-sites.png',
    tech: ['JavaScript', 'Google Apps Script']
  },
  {
    title: 'Excalidraw Diagrams',
    description: 'Designed and implemented custom diagram components.',
    image: '/images/excalidraw.png',
    tech: ['React', 'SVG', 'Canvas API', 'Excalidraw']
  },
  {
    title: "Portfolio-Website",
    description: 'A sleek portfolio built with Next.js, Tailwind CSS, and Framer Motion, showcasing my projects, skills, and an interactive AI Assistant.',
    image: '/images/portfolio.png',
    tech: ['JavaScript', 'React', 'Next.js']
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
            <div className="relative w-full h-48 object-cover">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                // width={400}
                // height={250}
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-windth: 1200px) 50vw, 33vw'
              />
            </div>
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
