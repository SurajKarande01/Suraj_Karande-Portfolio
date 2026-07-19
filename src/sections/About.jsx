import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import SectionHeading from '../components/SectionHeading'

const qualities = [
  'Builds secure REST APIs with Spring Boot',
  'Integrates robust security utilizing Spring Security & JWT',
  'Experienced in frontend React.js & state management with Zustand',
  'Utilizes Docker containers for consistent service deployments',
  'Builds scalable backend architectures with microservices',
  'Passionate about writing clean, dry, and maintainable code',
]

const timeline = [
  {
    year: '2021 – 2025',
    title: 'B.Tech in Computer Science & Tech',
    desc: 'Completed engineering at Department of Technology, Shivaji University, Kolhapur. Gained strong foundations in OOP, DBMS, OS, and Data Structures.',
  },
  {
    year: '2025 (Jun – Nov)',
    title: 'Java Full Stack Training',
    desc: 'Completed comprehensive training at Java By Kiran, Pune, designing REST APIs with Spring Boot and persistent layers with Hibernate & MySQL.',
  },
  {
    year: '2025',
    title: 'Feasto — Microservices E-Commerce',
    desc: 'Developed a robust microservices platform with 9 Spring Boot services, real-time driver tracking (Leaflet.js), and live WebSocket notifications.',
  },
  {
    year: '2025',
    title: 'AuthApp — Authentication System',
    desc: 'Built a stateless auth system featuring JWT rotation, OAuth2 (Google/GitHub), React admin console, and Docker container setup.',
  },
  {
    year: 'Now',
    title: 'Open to Opportunities',
    desc: 'Actively seeking Java Full Stack Developer, Backend Developer, or Software Engineer roles to deliver secure, scalable, and high-performance software.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading title="About Me" />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 leading-relaxed text-text-muted"
        >
          <p>
            I'm a <span className="text-text font-medium">Java Full Stack Developer</span> who loves building secure, clean, and highly efficient web applications. I focus on backend engineering with Java, Spring Boot, Spring Security, and Hibernate, and integrate them with responsive React.js frontends.
          </p>

          <p>
            I completed my B.Tech in Computer Science and Tech and went on to train at <span className="text-text font-medium">Java By Kiran, Pune</span>. This training solidified my backend design patterns, RESTful API practices, database modeling with MySQL & PostgreSQL, and Git version control workflows.
          </p>

          <p>
            My key projects include <span className="text-text font-medium">Feasto</span> (a microservices e-commerce application utilizing Spring Cloud and WebSockets) and <span className="text-text font-medium">AuthApp</span> (a secure authentication engine implementing double JWT token rotation and OAuth2). I enjoy containerizing development environments using Docker to simplify deployments.
          </p>

          <p>
            I'm currently seeking a full-time position where I can collaborate with experienced development teams, design secure APIs, optimize database operations, and build intuitive user interfaces that deliver business value.
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {qualities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-card/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative border-l border-white/10 pl-8"
        >
          {timeline.map((item) => (
            <div key={item.title} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.32rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-dark" />

              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {item.year}
              </p>

              <h3 className="mt-2 font-display text-lg font-semibold text-text">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
