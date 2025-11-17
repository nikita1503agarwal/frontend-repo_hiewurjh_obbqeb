import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function About() {
  const [profile, setProfile] = useState(null)
  useEffect(() => { fetch(`${API}/profile`).then(r => r.json()).then(setProfile).catch(() => setProfile(null)) }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
          <p className="mt-4 text-gray-600">
            {profile?.bio || 'I am a software engineer who enjoys building clean, performant, and user‑centric products. I love solving complex problems and turning ideas into delightful experiences.'}
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gray-500">Name</dt>
              <dd className="font-medium">{profile?.name || 'Your Name'}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Title</dt>
              <dd className="font-medium">{profile?.title || 'Software Engineer'}</dd>
            </div>
            {profile?.location && (
              <div>
                <dt className="text-gray-500">Location</dt>
                <dd className="font-medium">{profile.location}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="md:pl-10">
          <div className="aspect-square rounded-2xl overflow-hidden ring-1 ring-gray-200">
            <img src={profile?.avatar || 'https://i.pravatar.cc/600'} alt="Avatar" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}
