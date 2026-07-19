import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import { skillCategories } from '../data/skills'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="A working toolkit spanning frontend interfaces, Java backends, databases and the tools that hold it all together."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="group rounded-2xl border border-white/5 bg-card/50 p-6 sm:p-8 transition-colors duration-300 hover:border-accent/30"
          >
            <h3 className="font-display text-xl font-semibold text-text">{cat.label}</h3>
            <p className="mt-2 text-xs text-text-muted leading-relaxed border-b border-white/5 pb-4">
              {cat.description}
            </p>

            <div className="mt-5 space-y-3.5">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ci * 0.05 + si * 0.03 }}
                  className="group/item flex items-center gap-2.5 text-sm text-text-muted hover:text-text transition-colors duration-200"
                >
                  <FiChevronRight className="text-accent shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
