import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/10 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 pt-36 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Available for opportunities
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Building delightful, performant software experiences
          </h1>
          <p className="mt-5 text-gray-600 text-lg md:text-xl">
            Full‑stack engineer focused on React, TypeScript, and Python. I craft robust systems with an eye for design and usability.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-colors">
              View projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md ring-1 ring-gray-300 hover:bg-gray-50 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
