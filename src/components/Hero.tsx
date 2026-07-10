import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-400 text-base mb-3 font-mono">Hi, I'm</p>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-5 tracking-tight leading-none">
            Alvin Thomas
          </h1>
          <p className="text-2xl md:text-3xl text-slate-400 font-light mb-8">
            Software Engineer
          </p>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10">
            I build software that solves real problems.
            Currently interning at Garmin and working at John Deere while
            finishing my degree at Iowa State.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/alvinjt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors duration-150"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
