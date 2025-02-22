import Header from './components/Header'
import Hero from './components/Hero'  /* Fixed import path */
import About from './components/About'
import Projects from './components/Projects'
import AIAssistant from './components/AIAssistant'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />  {/* Hero section for main introduction */}
      <About />
      <Projects />
      <AIAssistant />
      <Skills />
      <Footer />
    </main>
  )
}
