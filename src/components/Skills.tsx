import { useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Cloud, Database, FlaskConical, Zap, type LucideIcon } from 'lucide-react'
import SectionHeading from './SectionHeading'

const IC = 'e2e8f0' // icon color (slate-200)

interface Skill {
  name: string
  icon?: string | null
  src?: string
  lucideIcon?: LucideIcon
}

interface SkillGroup {
  label: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java',       icon: null, src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python',     icon: 'python' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'C',          icon: 'c' },
      { name: 'Kotlin',     icon: 'kotlin' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'Spring Boot',  icon: 'springboot' },
      { name: 'React',        icon: 'react' },
      { name: 'Next.js',      icon: 'nextdotjs' },
      { name: 'Node.js',      icon: 'nodedotjs' },
      { name: 'Jest',         icon: 'jest' },
      { name: 'PyTorch',      icon: 'pytorch' },
      { name: 'NumPy',        icon: 'numpy' },
      { name: 'Pandas',       icon: 'pandas' },
      { name: 'Hibernate',    icon: null, lucideIcon: Database },
      { name: 'JUnit',        icon: null, lucideIcon: FlaskConical },
      { name: 'REST Assured', icon: null, lucideIcon: Zap },
    ],
  },
  {
    label: 'Tools & Platforms',
    skills: [
      { name: 'AWS',        icon: null, lucideIcon: Cloud },
      { name: 'Docker',     icon: 'docker' },
      { name: 'Terraform',  icon: 'terraform' },
      { name: 'Jenkins',    icon: 'jenkins' },
      { name: 'Git',        icon: 'git' },
      { name: 'GitHub',     icon: 'github' },
      { name: 'GitLab',     icon: 'gitlab' },
      { name: 'Bitbucket',  icon: 'bitbucket' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL',      icon: 'mysql' },
      { name: 'MongoDB',    icon: 'mongodb' },
      { name: 'Firebase',   icon: 'firebase' },
      { name: 'Prisma',     icon: 'prisma' },
      { name: 'Postman',    icon: 'postman' },
      { name: 'Jira',       icon: 'jira' },
    ],
  },
]

interface Certification {
  name: string
  url: string
}

const certifications: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner', url: 'https://www.credly.com/badges/da25c622-371a-4b92-878a-aa102dbfec1f' },
  { name: 'IBM Full Stack Developer', url: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/3RT7TIGBWV7X' },
  { name: 'Bloomberg Market Concepts', url: 'https://portal.bloombergforeducation.com/certificates/SJQQdeqK2UuTh6UbhTnmopWx' },
]

interface SkillCardProps {
  name: string
  icon?: string | null
  src?: string
  lucideIcon?: LucideIcon
  delay: number
}

function SkillCard({ name, icon, src: directSrc, lucideIcon: LucideIcon, delay }: SkillCardProps) {
  const [errored, setErrored] = useState(false)
  const src = directSrc ?? (icon ? `https://cdn.simpleicons.org/${icon}/${IC}` : null)

  const renderIcon = () => {
    if (src && !errored) {
      return (
        <img
          src={src}
          alt={name}
          onError={() => setErrored(true)}
          className="w-6 h-6 object-contain"
          style={directSrc ? { filter: 'brightness(0) invert(1) opacity(0.85)' } : undefined}
        />
      )
    }
    if (LucideIcon) {
      return <LucideIcon size={20} className="text-slate-500" />
    }
    return (
      <span className="w-6 h-6 flex items-center justify-center text-slate-600 text-[10px] font-mono font-semibold">
        {name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -2 }}
      className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900 transition-colors duration-150 cursor-default select-none"
    >
      {renderIcon()}
      <span className="text-slate-400 text-xs text-center leading-tight">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Skills" />

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">{group.label}</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.skills.map((skill, i) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} src={skill.src} lucideIcon={skill.lucideIcon} delay={i * 0.04} />
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Certifications</p>
            <div className="flex flex-wrap gap-2">
              {certifications.map(cert => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 border border-slate-800 rounded-lg bg-slate-900/40 hover:border-slate-700 hover:text-slate-200 transition-colors duration-150"
                >
                  <BadgeCheck size={14} className="text-slate-500 shrink-0" />
                  {cert.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
