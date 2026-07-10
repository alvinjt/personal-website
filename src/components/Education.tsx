import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <div>
              <span className="text-white font-semibold">Iowa State University</span>
              <span className="text-slate-500 mx-2">·</span>
              <span className="text-slate-400">B.S. Software Engineering, Minor in AI</span>
            </div>
            <span className="text-slate-500 text-sm font-mono">Aug 2023 – May 2027</span>
          </div>

          <ul className="space-y-2.5 text-slate-400 text-sm">
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-slate-600" />
              GPA: 3.96 / 4.0, President's List, Dean's List
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-slate-600" />
              1 of 100 George Washington Carver Full Tuition Scholars
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-slate-600" />
              1 of 30 Tau Beta Pi Iowa Alpha Scholars
            </li>
            <li className="flex gap-3 leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0 bg-slate-600" />
              Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems,
              Software Architecture & Design, Operating Systems, Software Testing, Statistics,
              Matrices & Linear Algebra
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
