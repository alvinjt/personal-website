import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

interface Experience {
  company: string
  role: string
  period: string
  logo: string
}

const experiences: Experience[] = [
  {
    company: 'Garmin',
    role: 'Software Engineering Intern',
    period: 'May 2026 - Present',
    logo: '/logos/garmin.svg',
  },
  {
    company: 'John Deere',
    role: 'Student Software Engineer',
    period: 'Jan 2025 - Present',
    logo: '/logos/deere.svg',
  },
  {
    company: 'Boeing',
    role: 'Boeing Research Fellow',
    period: 'Aug 2025 - May 2026',
    logo: '/logos/boeing.svg',
  },
]

interface LogoProps {
  src: string
  company: string
}

function Logo({ src, company }: LogoProps) {
  return (
    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 p-2.5">
      <img
        src={src}
        alt={company}
        className="w-full h-full object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-5 p-5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 transition-colors duration-150"
            >
              <Logo src={exp.logo} company={exp.company} />
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium">{exp.role}</p>
                <p className="text-slate-500 text-sm mt-0.5">{exp.company}</p>
              </div>
              <span className="text-slate-500 text-sm font-mono shrink-0">{exp.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
