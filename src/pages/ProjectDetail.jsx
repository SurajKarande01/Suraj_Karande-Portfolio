import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'
import Button from '../components/Button'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const { name, tagline, tech, github, demo, features, caseStudy } = project

  const caseStudySections = [
    { title: 'Overview', body: caseStudy?.overview || project.description },
    { title: 'The Problem', body: caseStudy?.problem },
    { title: 'The Solution', body: caseStudy?.solution },
    { title: 'Architecture', body: caseStudy?.architecture },
    { title: 'Key Challenges', body: caseStudy?.challenges },
    { title: 'Lessons Learned', body: caseStudy?.learning },
  ].filter((section) => section.body)

  return (
    <article className="relative mx-auto max-w-6xl px-6 pb-28 pt-32 min-h-screen">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[150px]" />

      <Link
        to="/#projects"
        className="focus-ring inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline mb-8"
      >
        <FiArrowLeft /> Back to projects
      </Link>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        {/* Left Column - Sticky Meta Info */}
        <div className="space-y-6 lg:sticky lg:top-28 lg:h-fit">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-semibold leading-tight text-text sm:text-4xl"
            >
              {name}
            </motion.h1>
            <p className="mt-3 text-lg font-light text-accent/90">{tagline}</p>
          </div>

          <div className="border-t border-white/5 pt-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/5 bg-card/40 px-2.5 py-1 text-xs text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {(github || demo) && (
            <div className="border-t border-white/5 pt-6 flex flex-col gap-3">
              {github && (
                <Button href={github} variant="outline" className="w-full justify-center text-sm !py-2.5">
                  <FiGithub /> View Source Code
                </Button>
              )}
              {demo && (
                <Button href={demo} variant="primary" className="w-full justify-center text-sm !py-2.5">
                  <FiExternalLink /> Live Demo
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Right Column - Narrative Sections */}
        <div className="space-y-10 lg:pl-4">
          {caseStudySections.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border-b border-white/5 pb-8 last:border-0 last:pb-0"
            >
              <h2 className="font-display text-lg font-semibold text-text mb-3">
                {s.title}
              </h2>
              <p className="leading-relaxed text-text-muted text-sm sm:text-base whitespace-pre-line">
                {s.body}
              </p>
            </motion.div>
          ))}

          {/* Features checklist */}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="pt-2"
            >
              <h2 className="font-display text-lg font-semibold text-text mb-4">
                Core Features
              </h2>
              <ul className="space-y-3">
                {features.map((f, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-base text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </article>
  )
}
