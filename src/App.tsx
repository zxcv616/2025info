import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Lock, Mail, MapPin } from 'lucide-react'
import { profile, focus, projects, experience } from './data/portfolio'

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.06 },
  }),
}

const socials = [
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
  { href: profile.github, icon: Github, label: 'GitHub' },
  { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
]

function Block({ i, className = '', children }: { i: number; className?: string; children: React.ReactNode }) {
  return (
    <motion.div custom={i} variants={fade} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-5 px-5 py-10 sm:px-8">
        {/* Header */}
        <Block i={0} className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {profile.status} · Available
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-none tracking-tight text-ink-900 sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-display text-lg text-ink-700 sm:text-xl">
              {profile.role}
              <span className="text-accent"> — building across Rust, TypeScript &amp; Python</span>
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:items-end">
            <span className="flex items-center gap-1.5 font-mono text-xs text-ink-500">
              <MapPin size={13} /> {profile.location}
            </span>
            <div className="flex items-center gap-1">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-ink-900/10 bg-paper-100 p-2.5 text-ink-700 transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </Block>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Selected work */}
          <Block i={1} className="card lg:col-span-2">
            <p className="eyebrow mb-4">Selected Work</p>
            <div className="flex flex-col divide-y divide-ink-900/10">
              {projects.map((p) => {
                const Tag = p.link ? 'a' : 'div'
                return (
                  <Tag
                    key={p.name}
                    {...(p.link
                      ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex flex-col gap-2 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base font-semibold text-ink-900">
                          {p.name}
                        </h3>
                        {p.link ? (
                          <ArrowUpRight
                            size={15}
                            className="text-ink-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          />
                        ) : (
                          <Lock size={12} className="text-ink-400" />
                        )}
                      </div>
                      <p className="text-sm text-ink-500">{p.tagline}</p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                      {p.stack.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-paper-200 px-2 py-0.5 font-mono text-[10px] text-ink-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </Tag>
                )
              })}
            </div>
          </Block>

          {/* About */}
          <Block i={2} className="card">
            <p className="eyebrow mb-3">About</p>
            <p className="text-sm leading-relaxed text-ink-700">
              Full-stack engineer shipping the whole thing — from kernel-level EDR in
              Rust to client-side video rendering in the browser. Self-employed in SF,
              building Halden.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-ink-900/10 px-2.5 py-1 text-[11px] text-ink-700"
                >
                  {f}
                </span>
              ))}
            </div>
          </Block>

          {/* Experience */}
          <Block i={3} className="card lg:col-span-2">
            <p className="eyebrow mb-4">Experience</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {experience.map((e) => (
                <div key={e.company} className="flex flex-col">
                  <span className="font-mono text-[11px] text-accent">{e.year}</span>
                  <span className="mt-1 font-display text-sm font-semibold text-ink-900">
                    {e.company}
                  </span>
                  <span className="text-xs text-ink-500">{e.role}</span>
                </div>
              ))}
            </div>
          </Block>

          {/* Contact CTA */}
          <Block i={4} className="card flex flex-col justify-between bg-ink-900 text-paper">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper-300/70">
              Get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 flex items-center justify-between gap-2"
            >
              <span className="font-display text-sm font-medium leading-tight text-paper-100 sm:text-base">
                {profile.email}
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Block>
        </div>

        {/* Footer */}
        <Block i={5} className="flex items-center justify-between pt-1">
          <span className="font-mono text-[11px] text-ink-400">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="font-mono text-[11px] text-ink-400">{profile.github.replace('https://', '')}</span>
        </Block>
      </div>
    </div>
  )
}

export default App
