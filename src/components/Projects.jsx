import { useEffect, useState } from 'react'
import { Github, Link2 } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(`${API}/projects`).then(r => r.json()).then(setProjects).catch(() => setProjects([]))
  }, [])

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured work</h2>
            <p className="text-gray-600 mt-2">A selection of projects that showcase my approach and capabilities.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <article key={idx} className="group rounded-xl overflow-hidden border bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-shadow">
              {p.image && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <p className="mt-2 text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags?.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  {p.repo_url && (
                    <a href={p.repo_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {p.live_url && (
                    <a href={p.live_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
                      <Link2 size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <div className="col-span-full text-center py-10 text-gray-600">
              No projects yet. Use the seed action below to add sample content.
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <a href={`${API}/seed`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md ring-1 ring-gray-300 hover:bg-gray-50">Seed sample content</a>
        </div>
      </div>
    </section>
  )
}
