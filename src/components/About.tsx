import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-5 text-slate-400 text-base leading-relaxed"
        >
          <p>
            I am a senior at Iowa State University majoring in Software Engineering with a minor
            in Artificial Intelligence. Currently, I'm interning at Garmin over the summer and
            work as a Student Software Engineer at John Deere during the school year. In my free
            time, I enjoy cheering on the Cyclones and playing soccer.
          </p>
          <p>
            Thanks for visiting my website! Feel free to contact me if you'd like to connect or
            discuss how I can bring value to your team.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
