import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

interface Project {
  name: string
  note: string | null
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'SharedSpace',
    note: null,
    description:
      'Backend for a roommate management platform. Built REST APIs, OAuth 2.0 auth, and a CI/CD pipeline in Java and Spring Boot. Supports messaging, chore tracking, Stripe billing, maintenance requests, and AI-powered recipe generation.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'OAuth 2.0', 'Stripe', 'REST Assured'],
  },
  {
    name: 'LiftMate',
    note: null,
    description:
      'Android fitness tracker app built with Java and Kotlin. Implemented user authentication and account management with Firebase Authentication. Designed intuitive interfaces for users to create, track, and plan workout sets targeting specific body regions.',
    tags: ['Java', 'Kotlin', 'Android', 'Firebase'],
  },
  {
    name: 'Bomb Detection Robot',
    note: null,
    description:
      'Embedded software in C for an autonomous bomb detection robot. Implemented movement logic, sensor integration for hazard and object detection, and a real-time monitoring UI for a simulated environment.',
    tags: ['C', 'Embedded Systems', 'Sensors', 'Real-Time'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-white font-semibold">{project.name}</h3>
                {project.note && (
                  <span className="text-xs text-slate-500 shrink-0 mt-0.5">{project.note}</span>
                )}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs text-slate-500 border border-slate-800 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
