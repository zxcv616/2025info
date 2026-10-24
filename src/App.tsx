import { useEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, Crosshair, Plus } from 'lucide-react'
import {
  profile,
  about,
  focus,
  projects,
  experience,
  type Project,
} from './data/portfolio'

function SystemGraphic({
  kind = 'hero',
}: {
  kind?: 'hero' | 'detection' | 'tracking'
}) {
  return (
    <svg
      className={`system-graphic graphic-${kind}`}
      viewBox="0 0 640 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`grid-${kind}`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            stroke="currentColor"
            strokeOpacity=".12"
          />
        </pattern>
      </defs>
      <rect width="640" height="400" fill={`url(#grid-${kind})`} />
      {kind === 'detection' ? (
        <>
          <path
            d="M-20 310 660 100M-20 330 660 120M210-30 390 430M240-30 420 430"
            stroke="currentColor"
            strokeOpacity=".17"
            strokeWidth="16"
          />
          {[
            [120, 244, 60, 30],
            [266, 198, 44, 26],
            [424, 146, 58, 32],
            [302, 77, 24, 47],
            [367, 289, 26, 49],
            [492, 237, 19, 28],
          ].map(([x, y, w, h], i) => (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={w}
                height={h}
                stroke="currentColor"
                strokeOpacity=".8"
              />
              <text
                x={x}
                y={y - 8}
                fill="currentColor"
                fontSize="9"
                fontFamily="monospace"
              >
                {i === 5 ? 'PERSON' : 'VEHICLE'}
              </text>
              <path
                d={`M${x + w / 2 - 4} ${y + h / 2}h8m-4-4v8`}
                stroke="currentColor"
              />
            </g>
          ))}
        </>
      ) : (
        <>
          <circle
            cx="320"
            cy="200"
            r="150"
            stroke="currentColor"
            strokeOpacity=".16"
          />
          <circle
            cx="320"
            cy="200"
            r="100"
            stroke="currentColor"
            strokeOpacity=".24"
          />
          <circle
            cx="320"
            cy="200"
            r="48"
            stroke="currentColor"
            strokeOpacity=".3"
          />
          <path
            d="M320 20V380M140 200H500"
            stroke="currentColor"
            strokeOpacity=".25"
            strokeDasharray="3 7"
          />
          <path
            d="M112 310 178 293 228 252 288 235 342 175 410 140 493 76"
            stroke="currentColor"
            strokeOpacity=".7"
          />
          <path
            d="m155 88 72 34 52 49 70 42 72 16 82 56"
            stroke="currentColor"
            strokeOpacity=".35"
            strokeDasharray="5 5"
          />
          <path d="m341 165 7 17-8-4-7 5z" fill="currentColor" />
          <circle cx="421" cy="229" r="4" fill="currentColor" />
          <rect
            x="327"
            y="157"
            width="30"
            height="32"
            stroke="currentColor"
            strokeOpacity=".6"
          />
          <text
            x="370"
            y="169"
            fill="currentColor"
            fontSize="9"
            fontFamily="monospace"
          >
            {kind === 'hero' ? 'SYSTEM / OBSERVE' : 'TRACK / 001'}
          </text>
          <text
            x="436"
            y="247"
            fill="currentColor"
            fontSize="9"
            fontFamily="monospace"
          >
            {kind === 'hero' ? 'SIGNAL / PROCESS' : 'TRACK / 002'}
          </text>
        </>
      )}
      <path
        d="M16 32V16h16M608 16h16v16M16 368v16h16M608 384h16v-16"
        stroke="currentColor"
        strokeOpacity=".65"
      />
      <text
        x="28"
        y="365"
        fill="currentColor"
        fillOpacity=".5"
        fontSize="8"
        fontFamily="monospace"
      >
        CONCEPTUAL SYSTEM DIAGRAM / NOT LIVE DATA
      </text>
    </svg>
  )
}

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={15} />
    </a>
  )
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <article className="featured-project" data-reveal>
      <div className="project-visual">
        <div className="visual-caption mono">
          <span>
            0{index + 1} /{' '}
            {project.featured === 'detection'
              ? 'COMPUTER VISION'
              : 'SITUATIONAL AWARENESS'}
          </span>
          <Crosshair size={16} />
        </div>
        <SystemGraphic kind={project.featured} />
      </div>
      <div className="project-content">
        <div className="project-category mono">{project.category}</div>
        <h3>{project.name}</h3>
        <p className="project-subtitle">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <div className="metrics">
          {project.metrics?.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <ExternalLink href={project.link!}>{project.linkLabel}</ExternalLink>
          {project.demo && (
            <ExternalLink href={project.demo}>Recorded demo</ExternalLink>
          )}
        </div>
        <details>
          <summary>
            Engineering notes & limitations <Plus size={15} />
          </summary>
          <div className="detail-content">
            {project.year && <p className="mono">{project.year}</p>}
            <ul>
              {project.details?.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <h4>Scope & limitations</h4>
            <p>{project.limitations}</p>
            {project.demo && (
              <p className="attribution">
                Aircraft data:{' '}
                <a
                  href="https://adsb.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  adsb.fi
                </a>
                . Map data:{' '}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenStreetMap contributors
                </a>
                .
              </p>
            )}
          </div>
        </details>
      </div>
    </article>
  )
}

function App() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = mainRef.current
    if (!root || !('IntersectionObserver' in window)) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer: IntersectionObserver | undefined
    const elements = Array.from(
      root.querySelectorAll<HTMLElement>('[data-reveal]'),
    )
    const seen = new Set<Element>()
    const updateMotion = () => {
      observer?.disconnect()
      if (preference.matches) {
        elements.forEach((element) => element.classList.remove('is-revealed'))
        return
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-revealed')
            seen.add(entry.target)
            observer?.unobserve(entry.target)
          })
        },
        { threshold: 0.08 },
      )
      elements.forEach((element) => {
        if (!seen.has(element)) observer?.observe(element)
      })
    }
    updateMotion()
    preference.addEventListener('change', updateMotion)
    return () => {
      observer?.disconnect()
      preference.removeEventListener('change', updateMotion)
      elements.forEach((element) => element.classList.remove('is-revealed'))
    }
  }, [])
  const featured = projects.filter((project) => project.featured)
  const other = projects.filter((project) => !project.featured)
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a href="#" className="wordmark" aria-label={`${profile.name}, home`}>
          <span className="personal-wordmark">
            MW<span className="wordmark-divider">/</span>Portfolio
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">
            Contact <ArrowUpRight size={13} />
          </a>
        </nav>
      </header>
      <main id="main" ref={mainRef}>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-top mono">
            <span>{profile.role}</span>
            <span>{profile.location}</span>
          </div>
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">
                Matthew
                <br />
                <em>Wiecking.</em>
              </h1>
            </div>
            <div className="hero-intro">
              <p>
                I’m a software engineer working across Rust, TypeScript, and
                Python. My projects range from endpoint security to computer
                vision and aircraft tracking.
              </p>
              <p className="hero-current">
                Currently self-employed and building Halden.
              </p>
              <div className="hero-actions">
                <a className="text-link" href="#work">
                  View projects <ArrowDown size={15} />
                </a>
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <a className="text-link" href={`mailto:${profile.email}`}>
                  Email <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="work"
          className="work-section wrap"
          aria-labelledby="work-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <span className="eyebrow">Personal projects</span>
              <h2 id="work-title">Selected projects.</h2>
            </div>
            <p>
              Two recent projects, with demos, results, and notes on how I built
              them.
            </p>
          </div>
          <div className="featured-grid">
            {featured.map((project, index) => (
              <FeaturedProject
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
          <div className="archive-heading" data-reveal>
            <h3>Other projects</h3>
            <span className="mono">{other.length} projects</span>
          </div>
          <div className="archive">
            {other.map((project, index) => (
              <article className="archive-row" data-reveal key={project.name}>
                <span className="archive-number mono">
                  {String(index + 3).padStart(2, '0')}
                </span>
                <div>
                  <h4>{project.name}</h4>
                  <p>{project.tagline}</p>
                  <details className="archive-details">
                    <summary>
                      Project details <Plus size={13} />
                    </summary>
                    <div className="detail-content">
                      <p>{project.description}</p>
                      {project.note && <p>{project.note}</p>}
                    </div>
                  </details>
                </div>
                <div className="archive-stack mono">
                  {project.stack.slice(0, 3).join(' / ')}
                </div>
                {project.link ? (
                  <ExternalLink href={project.link}>
                    {project.linkLabel}
                  </ExternalLink>
                ) : (
                  <span className="private-label mono">Private</span>
                )}
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="wrap about-layout" data-reveal>
            <div>
              <span className="eyebrow">Background</span>
              <h2 id="about-title">About me.</h2>
              <div className="about-copy">
                {about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="focus-list">
                {focus.map((item) => (
                  <span key={item}>
                    <Plus size={12} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="experience">
              <span className="eyebrow">Experience</span>
              {experience.map((item) => (
                <div className="experience-row" key={item.company}>
                  <span className="mono">{item.year}</span>
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section wrap"
          aria-labelledby="contact-title"
        >
          <span className="eyebrow">Contact</span>
          <div className="contact-layout" data-reveal>
            <div className="contact-intro">
              <h2 id="contact-title">Get in touch.</h2>
              <p>Email is the best way to reach me.</p>
            </div>
            <div>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
                <ArrowUpRight size={24} />
              </a>
              <div className="social-links">
                <ExternalLink href={profile.github}>GitHub</ExternalLink>
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap mono">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#">Back to top ↑</a>
        <span>San Francisco, California</span>
      </footer>
    </>
  )
}
export default App
