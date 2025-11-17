import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setDone(false)
    setError('')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to send message')
      setDone(true)
      e.currentTarget.reset()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
          <p className="mt-2 text-gray-600">Have an idea or role in mind? Let’s talk.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-xl">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label className="text-sm text-gray-600">Name</label>
              <input name="name" required className="px-3 py-2 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" name="email" required className="px-3 py-2 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-gray-600">Subject</label>
            <input name="subject" required className="px-3 py-2 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-gray-600">Message</label>
            <textarea name="message" rows="5" required className="px-3 py-2 rounded-md ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div className="flex items-center gap-3">
            <button disabled={loading} className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 disabled:opacity-60">
              {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />} Send message
            </button>
            {done && <span className="text-green-600 text-sm">Message sent. Thank you!</span>}
            {error && <span className="text-red-600 text-sm">{error}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
