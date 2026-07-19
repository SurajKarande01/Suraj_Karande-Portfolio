import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'
import Button from '../components/Button'

export default function Hero() {
  // Generate sequence array for TypeAnimation dynamically from profile.roles
  const animationSequence = []
  profile.roles.forEach((role) => {
    animationSequence.push(role)
    animationSequence.push(2000)
  })

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 grid-bg"
    >
      {/* ambient shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float" />

      <div className="relative mx-auto max-w-4xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>

          <div className="mt-4 font-mono text-xl text-accent sm:text-2xl">
            {animationSequence.length > 0 && (
              <TypeAnimation
                key={profile.roles.join(',')}
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
          </div>

          <p className="mt-6 max-w-xl leading-relaxed text-text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.resumeUrl} download="Resume_Suraj_Karande.pdf" className="focus-ring">
              <Button variant="primary">
                <FiDownload /> Download Resume
              </Button>
            </a>
            <ScrollLink to="projects" smooth duration={500} offset={-80}>
              <Button variant="outline">View Projects</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500} offset={-80}>
              <Button variant="ghost">Contact Me</Button>
            </ScrollLink>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="focus-ring text-xl text-text-muted hover:text-accent transition-colors"
            >
              <FiMail />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
