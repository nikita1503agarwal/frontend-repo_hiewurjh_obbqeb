import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="py-10 border-t">
        <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name</p>
          <a href="/test" className="hover:text-gray-900">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
