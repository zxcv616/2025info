// Single source of truth for everything on the page.
// Anything you should double-check is marked with a TODO comment.

export const profile = {
  name: 'Matthew Wiecking',
  role: 'Software Engineer',
  // Short positioning line under the hero name.
  tagline: 'Building across Rust, TypeScript, and Python.',
  location: 'San Francisco, CA',
  status: 'Self-employed',
  email: 'mwiecking@me.com',
  github: 'https://github.com/zxcv616',
  linkedin: 'https://www.linkedin.com/in/mwiecking',
}

// Words that cycle in the hero (keep them short).
export const roles = [
  'full-stack engineer',
  'systems builder',
  'founder of Halden',
]

export const about = [
  // TODO: tighten this bio in your own voice (it's drafted from your existing framing).
  `I'm a software engineer who likes shipping the whole thing, from kernel-level
   telemetry in Rust to client-side video rendering in the browser. Currently
   self-employed in San Francisco, building Halden and a handful of products
   across security, audio, and trading.`,
  `Comfortable spanning the stack: low-level systems and EDR tooling in Rust,
   product UIs in React/TypeScript, and data-heavy backends in Python. I care
   about fast, honest software that does exactly what it says.`,
]

export const focus = [
  'Systems & EDR (Rust)',
  'Full-stack web (React / TS)',
  'Backends & data (Python)',
  'Real-time & async',
  'Signal processing',
]

export type Project = {
  name: string
  tagline: string
  description: string
  stack: string[]
  link?: string
  linkLabel?: string
  note?: string
  year: string
}

export const projects: Project[] = [
  {
    name: 'Lyric Video',
    tagline: 'Song → vertical lyric video, entirely in the browser',
    description:
      'Web app that turns a song into a vertical lyric video. Upload audio and background media, auto-transcribe with local Whisper, fix timing in the editor, pick a look, and export an MP4. Every frame is rendered client-side with ffmpeg.wasm, no uploads.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind', 'ffmpeg.wasm', 'FastAPI', 'faster-whisper'],
    link: 'https://github.com/zxcv616/musicbot',
    linkLabel: 'GitHub',
    year: '2025',
  },
  {
    name: 'Bastion',
    tagline: 'Rust EDR for orgs priced out of CrowdStrike',
    description:
      'Endpoint detection and response for schools, clinics, small hospitals, and professional firms (25–2,000 seats). HIPAA/FERPA-ready, with a Rust agent and backend, kernel telemetry, gRPC over mTLS, and a native Flutter console.',
    stack: ['Rust 2024', 'Tonic gRPC', 'Axum', 'SurrealDB', 'Flutter', 'mTLS / AES-256-GCM'],
    note: 'Private repo · Halden Technologies · v13.1.0',
    year: '2024–26',
  },
  {
    name: 'eyeswideshut',
    tagline: 'Insider-signal detection for Polymarket',
    description:
      'Python bot that watches Polymarket for likely insider/informed trading and copies those trades. Async ingestion from on-chain and market data, a signal-detection engine, risk-managed execution, and Telegram alerts.',
    stack: ['Python', 'asyncio', 'web3', 'SQLAlchemy', 'FastAPI', 'Telegram'],
    link: 'https://github.com/zxcv616/eyeswideshut',
    linkLabel: 'GitHub',
    year: '2025',
  },
  {
    name: 'Outscaled.GG',
    tagline: 'ML prop predictions for LoL esports',
    description:
      'Series-level player-prop prediction for League of Legends esports. Recency-weighted empirical modeling blended with a Negative Binomial distribution, real market-line ingestion, walk-forward backtesting, and a live paper-trading dashboard.',
    stack: ['Python', 'FastAPI', 'Pandas', 'SciPy', 'React', 'Docker'],
    link: 'https://github.com/zxcv616/Outscaled2',
    linkLabel: 'GitHub',
    year: '2026',
  },
  {
    name: 'proxy-scraper',
    tagline: 'Go proxy aggregator + validator',
    description:
      'Pulls proxy lists from 15 public sources, dedupes them, tests each concurrently against a judge endpoint, and returns only the ones that work, ranked by latency. Interactive shell plus direct CLI subcommands.',
    stack: ['Go', 'SOCKS5 / SOCKS4', 'Concurrency', 'CLI'],
    link: 'https://github.com/zxcv616/proxy-scraper',
    linkLabel: 'GitHub',
    year: '2025',
  },
  {
    name: 'prizepicks-scraper',
    tagline: 'Timestamped PrizePicks line snapshots',
    description:
      'Fetches PrizePicks player-prop projections and stores clean, queryable snapshots. Handles DataDome protection via local browser or unlocker APIs, caches recent pulls, and exports to SQLite, CSV, or JSON.',
    stack: ['Python', 'Playwright', 'SQLite', 'CLI'],
    link: 'https://github.com/zxcv616/prizepicks-scraper',
    linkLabel: 'GitHub',
    year: '2025',
  },
]

export type Experience = {
  role: string
  company: string
  year: string
  detail: string
}

// TODO: verify titles/years before you publish.
export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Tanium',
    year: '2025',
    detail: 'Full-stack development.',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Gentian',
    year: '2024',
    detail: 'Developed internal tools.',
  },
  {
    role: 'Software Developer',
    company: 'Altaris',
    year: '2022',
    detail: 'Network architecture.',
  },
]
