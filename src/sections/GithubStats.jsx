import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiUsers, FiGitBranch } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const USERNAME = 'SurajKarande01'

export default function GithubStats() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`),
        ])
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')
        const user = await userRes.json()
        const repos = await reposRes.json()

        const stars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
        const totalReposWithLang = repos.filter((r) => r.language).length
        const langCount = {}
        repos.forEach((r) => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1
        })
        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([name, count]) => ({
            name,
            percentage: totalReposWithLang ? Math.round((count / totalReposWithLang) * 100) : 0,
          }))

        if (!cancelled) {
          setStats({
            public_repos: user.public_repos,
            followers: user.followers,
            following: user.following,
            stars,
            topLanguages,
          })
        }
      } catch (e) {
        if (!cancelled) setError(true)
      }
    }
    fetchStats()
    return () => {
      cancelled = true
    }
  }, [])

  const cards = stats
    ? [
        { icon: FiGitBranch, label: 'Public Repositories', value: stats.public_repos },
        { icon: FiStar, label: 'GitHub Stars', value: stats.stars },
        { icon: FiUsers, label: 'Followers', value: stats.followers },
        { icon: FiUsers, label: 'Following', value: stats.following },
      ]
    : []

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        title="GitHub Profile"
        subtitle="Showcasing my projects, code quality, and continuous learning through practical software development."
      />

      {error && (
        <p className="text-sm text-text-muted">
          Couldn't reach the GitHub API right now — visit the profile directly at{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent underline">
            {profile.github.replace('https://', '')}
          </a>.
        </p>
      )}

      {!error && (
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {(stats ? cards : Array.from({ length: 4 })).map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/5 bg-card/50 p-6 text-center"
              >
                {stats ? (
                  <>
                    <c.icon className="mx-auto mb-2 text-2xl text-accent" />
                    <p className="font-display text-5xl font-bold text-text">{c.value}</p>
                    <p className="mt-1 text-xs text-text-muted">{c.label}</p>
                  </>
                ) : (
                  <div className="h-16 animate-pulse rounded bg-white/5" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-card/50 p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-text">
                  Language Distribution
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  Primary programming languages across my public repositories.
                </p>

                <div className="mt-6 space-y-4">
                  {stats && stats.topLanguages ? (
                    stats.topLanguages.map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-text-muted">{lang.name}</span>
                          <span className="text-accent font-semibold">{lang.percentage}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-dark/60 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-accent transition-all duration-500"
                            style={{ width: `${lang.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-6 animate-pulse rounded bg-white/5" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card/50 p-6">
              <h2 className="font-display text-xl font-semibold text-text">
                Technologies I Work With
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  'Java 17',
                  'Spring Boot',
                  'Spring Security',
                  'JWT Security',
                  'REST APIs',
                  'Microservices',
                  'React.js',
                  'Zustand',
                  'Tailwind CSS',
                  'MySQL',
                  'PostgreSQL',
                  'Docker',
                  'Git & GitHub',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Real-time GitHub Contribution Calendar Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-card/50 p-6"
          >
            <h3 className="font-display text-lg font-semibold text-text mb-4">
              Contribution Activity
            </h3>
            <div className="overflow-x-auto">
              <div className="min-w-[650px] w-full py-2">
                <img
                  src={`https://ghchart.rshah.org/3B82F6/${USERNAME}`}
                  alt={`${USERNAME}'s GitHub Contribution Chart`}
                  className="w-full filter saturate-[1.2] opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-3 font-mono text-[10px] text-text-muted text-right">
              *Real-time commit calendar.
            </p>
          </motion.div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-fit items-center gap-2 font-mono text-sm text-accent hover:underline"
          >
            <FiGithub /> Explore My GitHub  →
          </a>
        </div>
      )}
    </section>
  )
}
