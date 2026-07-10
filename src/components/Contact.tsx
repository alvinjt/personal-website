import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      if (res.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
      }
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Contact" />

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-10">
                <CheckCircle2 size={36} className="text-slate-400 mb-3" />
                <p className="text-white font-medium mb-1">Message sent</p>
                <p className="text-slate-500 text-sm mb-5">I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value="a84e06ef-65ad-4568-af32-e14881434d26" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Your name"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="Email Address"
                      placeholder="your@email.com"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="Email Subject"
                    placeholder="Subject"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Message</label>
                  <textarea
                    name="Message Body"
                    rows={5}
                    placeholder="Your message"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-white hover:bg-slate-100 disabled:bg-slate-700 text-slate-900 font-semibold text-sm rounded-lg transition-colors duration-150"
                >
                  {loading ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
