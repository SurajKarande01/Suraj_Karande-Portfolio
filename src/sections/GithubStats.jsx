import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiUsers, FiGitBranch, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const USERNAME = 'SurajKarande01'

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value, 10)
    if (isNaN(end) || end <= 0) {
      setCount(end || 0)
      return
    }

    const duration = 1000 // 1s duration
    const stepTime = Math.max(Math.floor(duration / end), 20)
    
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}</span>
}

function SkeletonLoader() {
  return (
    <div className="grid gap-6 animate-pulse">
      {/* Profile Header Skeleton */}
      <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-white/5 bg-card/20 p-6">
        <div className="h-20 w-20 rounded-full bg-white/5" />
        <div className="flex-1 space-y-3">
          <div className="h-6 w-48 rounded bg-white/5" />
          <div className="h-4 w-32 rounded bg-white/5" />
          <div className="h-4 w-full max-w-xl rounded bg-white/5" />
        </div>
        <div className="h-10 w-32 rounded-full bg-white/5" />
      </div>

      {/* Grid Stats Skeleton */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-28 rounded-2xl border border-white/5 bg-card/20 p-6 flex flex-col items-center justify-center space-y-2">
            <div className="h-6 w-6 rounded bg-white/5" />
            <div className="h-8 w-16 rounded bg-white/5" />
            <div className="h-4 w-24 rounded bg-white/5" />
          </div>
        ))}
      </div>

      {/* Row Skeleton */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-64 rounded-2xl border border-white/5 bg-card/20 p-6" />
        <div className="h-64 rounded-2xl border border-white/5 bg-card/20 p-6" />
      </div>

      {/* Contribution Calendar Skeleton */}
      <div className="h-56 rounded-2xl border border-white/5 bg-card/20 p-6" />
    </div>
  )
}

export default function GithubStats() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchStats = async () => {
    setLoading(true)
    setError(false)
    try {
      // 1. Fetch primary profile and repo details
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
      const topicsSet = new Set()
      
      repos.forEach((r) => {
        if (r.language) {
          langCount[r.language] = (langCount[r.language] || 0) + 1
        }
        if (r.topics && Array.isArray(r.topics)) {
          r.topics.forEach((t) => topicsSet.add(t))
        }
      })
      
      const topLanguages = Object.entries(langCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4)
        .map(([name, count]) => ({
          name,
          percentage: totalReposWithLang ? Math.round((count / totalReposWithLang) * 100) : 0,
        }))

      const fetchedTopics = Array.from(topicsSet)
        .map(t => t.replace(/-/g, ' '))
        .slice(0, 15)

      setStats({
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        avatar_url: user.avatar_url,
        name: user.name || user.login,
        login: user.login,
        bio: user.bio || 'Java Full Stack Developer | Spring Boot + React.js',
        stars,
        topLanguages,
        topics: fetchedTopics.length > 0 ? fetchedTopics : [
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
          'Git & GitHub'
        ]
      })
      setLoading(false)
    } catch (e) {
      console.error('GitHub stats fetch failed:', e)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (error) {
    return (
      <section id="github" className="mx-auto max-w-6xl px-6 py-28 text-center">
        <SectionHeading
          title="GitHub Profile"
          subtitle="Showcasing my projects, code quality, and continuous learning through practical software development."
        />
        <div className="mx-auto max-w-md rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-sm">
          <p className="text-sm text-text-muted mb-4">
            Could not retrieve GitHub profile data. This is usually due to GitHub's rate limits. Please try again or visit my profile directly.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={fetchStats}
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent/80 transition-all focus:outline-none"
            >
              Retry Loading
            </button>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-text hover:bg-white/10 transition-all"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    )
  }

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
        subtitle="Showcasing my projects, code quality and continuous learning through practical software development."
      />

      {loading && <SkeletonLoader />}

      {!loading && stats && (
        <div className="grid gap-6">
          {/* GitHub User Profile Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-white/10 bg-card/40 p-6 backdrop-blur-sm"
          >
            <img
              src={stats.avatar_url}
              alt={stats.name}
              className="h-20 w-20 rounded-full border-2 border-accent/50"
            />
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display text-2xl font-bold text-text">{stats.name}</h3>
              <p className="font-mono text-sm text-accent">@{stats.login}</p>
              <p className="mt-2 text-sm text-text-muted max-w-2xl">{stats.bio}</p>
            </div>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-text hover:bg-white/10 hover:border-accent/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Follow Profile
            </a>
          </motion.div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl border border-white/5 bg-card/50 p-6 text-center"
              >
                <c.icon className="mx-auto mb-2 text-2xl text-accent" />
                <p className="font-display text-5xl font-bold text-text">
                  <AnimatedCounter value={c.value} />
                </p>
                <p className="mt-1 text-xs text-text-muted">{c.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Double Columns: Activity Graph & Tech Stack */}
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
                  GitHub Activity Graph
                </h3>
                <p className="mt-1 text-xs text-text-muted">
                  Contributions, commits and activity timeline.
                </p>

                <div className="mt-6 flex justify-center items-center">
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&bg_color=00000000&color=e2e8f0&line=3b82f6&point=10b981&area=true&area_color=3b82f6&hide_border=true`}
                    alt="GitHub Activity Graph"
                    className="w-full h-auto filter saturate-[1.1] brightness-[0.9] hover:brightness-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card/50 p-6">
              <h2 className="font-display text-xl font-semibold text-text">
                Technologies I Work With
              </h2>
              <p className="mt-1 text-xs text-text-muted mb-5">
                 Tech ecosystem from my public projects.
              </p>

              <div className="flex flex-wrap gap-3">
                {stats.topics.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent capitalise"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Real-time GitHub Analytics (Stats & Streaks) — live SVG cards that auto-update */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* Live Stats Card — shows total stars, commits, PRs, issues, contributed-to */}
            <div className="rounded-2xl border border-white/10 bg-card/50 p-6 flex flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-text">
                  GitHub Profile Stats
                </h3>
                <span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 font-mono font-semibold">
                  <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  Live Stats
                </span>
              </div>
              <div className="w-full flex justify-center items-center py-2 overflow-hidden">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&include_all_commits=true&count_private=true&cache_seconds=1800&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=ffffff&bg_color=00000000`}
                  alt="GitHub Profile Stats"
                  className="w-full max-w-[400px] h-auto filter saturate-[1.1] brightness-[0.9] hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a backup server if the public instance is rate-limited or down
                    e.target.onerror = null;
                    e.target.src = `https://github-readme-stats-one.vercel.app/api?username=${USERNAME}&show_icons=true&include_all_commits=true&count_private=true&cache_seconds=1800&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=ffffff&bg_color=00000000`;
                  }}
                />
              </div>
            </div>

            {/* Live Streak Card — shows total contributions, current streak, longest streak */}
            <div className="rounded-2xl border border-white/10 bg-card/50 p-6 flex flex-col justify-between items-center">
              <div className="w-full flex items-center justify-between mb-4">
                <h3 className="font-display text-lg font-semibold text-text">
                  Contribution Streak
                </h3>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-mono font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Streak
                </span>
              </div>
              <div className="w-full flex justify-center items-center py-2 overflow-hidden">
                <img
                  src={`https://streak-stats.demolab.com/?user=${USERNAME}&theme=transparent&hide_border=true&ring=3b82f6&fire=10b981&currStreakNum=10b981&sideNums=ffffff&sideLabels=ffffff&dates=e2e8f0`}
                  alt="GitHub Streak Stats"
                  className="w-full max-w-[400px] h-auto filter saturate-[1.1] brightness-[0.9] hover:brightness-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex w-fit items-center gap-2 font-mono text-sm text-accent hover:underline animate-fade-in"
          >
            <FiGithub /> Explore My GitHub →
          </a>
        </div>
      )}
    </section>
  )
}
