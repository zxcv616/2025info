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

export const about = [
  `I work on low-level systems in Rust, web interfaces in React and TypeScript, and data processing in Python. At Halden, I’m building endpoint security software.`,
  `Outside of that, I’ve been working on aerial object detection, aircraft and vessel tracking, and browser-based video tools. I like being involved in the whole project, from the underlying data to the interface.`,
]

export const focus = [
  'Systems & EDR (Rust)',
  'Full-stack web (React / TS)',
  'Backends & data (Python)',
  'Real-time & async',
  'Computer vision & ML',
  'Tracking & signal processing',
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
  featured?: 'detection' | 'tracking'
  category?: string
  demo?: string
  metrics?: { value: string; label: string }[]
  details?: string[]
  limitations?: string
}

export const projects: Project[] = [
  {
    name: 'Overwatch',
    tagline: 'Aerial object detection',
    category: 'Computer vision / Transfer learning',
    featured: 'detection',
    description:
      'I fine-tuned YOLO11n on VisDrone aerial imagery to detect vehicles and people from above. I built the training and evaluation pipeline, then made a comparison site to show where fine-tuning helped and where it still failed.',
    stack: [
      'Python',
      'PyTorch',
      'YOLO11n',
      'pycocotools',
      'Google Colab',
      'JavaScript',
      'Cloudflare Pages',
    ],
    link: 'https://overwatch-aerial.pages.dev/',
    linkLabel: 'View project',
    year: '',
    metrics: [
      { value: '15.09%', label: 'mAP@0.5 · from 2.21%' },
      { value: '1,610', label: 'Held-out test images' },
      { value: '25', label: 'Automated tests' },
    ],
    details: [
      'Trained for 50 epochs on 6,471 images, with 548 validation images for development. Fixed configurations, a random seed, checkpoint recovery, and recorded model and data hashes make the workflow reproducible.',
      'Converted datasets and mapped six shared COCO / VisDrone classes. Compared frozen models with identical inference settings and explicit handling of ignored regions.',
      'Shared-class mAP@0.5 improved by 12.88 percentage points. mAP@0.5:0.95 rose from 1.29% to 7.57%; small-object AP rose from 0.21% to 1.76%. All six classes improved, led by cars and buses.',
      'Built an interactive comparison site with 12 annotated examples of improvements and failures. Tests cover conversion, evaluation, checkpoint recovery, and error analysis.',
    ],
    limitations:
      'Small objects and bicycles remain difficult. At a 0.25 confidence cutoff on validation, recall rose from 5.54% to 25.28%, while precision fell from 77.58% to 67.57%. One training seed; documented COCO-style evaluation, not official VisDrone leaderboard scores. Real-time inference and onboard deployment have not been evaluated.',
  },
  {
    name: 'Sentinel',
    tagline: 'Airspace & maritime situational awareness',
    category: 'Tracking systems / Anomaly detection',
    featured: 'tracking',
    description:
      'I built a platform for tracking aircraft and vessels on a live map. It ingests position reports, maintains tracks, flags anomalies, and replays recorded data so I can test the same scenarios consistently.',
    stack: [
      'Python',
      'FastAPI',
      'asyncio',
      'WebSockets',
      'Leaflet',
      'Kalman filtering',
      'pytest',
      'Render',
    ],
    link: 'https://sentinel-live-2nt0.onrender.com/',
    linkLabel: 'Open live site',
    demo: 'https://sentinel-airspace.mwieckin.workers.dev/',
    year: 'Oct 2026–Present',
    metrics: [
      { value: '110', label: 'Python tests' },
      { value: 'ADS-B / AIS', label: 'Aircraft & vessel integrations' },
      { value: 'JSONL', label: 'Deterministic replay' },
    ],
    details: [
      'Ingests regional aircraft data from adsb.fi, with an additional OpenSky integration. Tracks recent trails and active, gap, and lost states. A shared collector serves all visitors without multiplying upstream polling.',
      'Flags emergency transponder codes and signal gaps with source-health checks, airport proximity filtering, and alert deduplication. A constant-velocity Kalman filter smooths tracks and shows short-term estimates separately from observed positions.',
      'Includes AIS WebSocket ingestion, vessel tracking, domain filters, and configurable loitering detection. FastAPI and WebSockets stream updates to a Leaflet map with search, track details, trails, and an event log.',
      'Retry backoff, rate-limit handling, payload validation, and stale-data checks support resilient ingestion. Original provider messages are recorded in JSONL; 110 tests cover tracking, alerts, compressed responses, shared polling, and replay consistency.',
    ],
    limitations:
      'The public site shows Bay Area aircraft from adsb.fi, refreshing every five minutes. Render Free may take about a minute to wake. Live vessel ingestion is not enabled publicly; the recorded demo includes synthetic maritime scenarios. Hosted history and logs reset on restart, and predictions stop after 60 seconds. Anomalies indicate conditions for review, not confirmed intent. Portfolio demonstration; not intended for navigation or operational decisions.',
  },
  {
    name: 'Lyric Video',
    tagline: 'Song → vertical lyric video, entirely in the browser',
    description:
      'Web app that turns a song into a vertical lyric video. Upload audio and background media, auto-transcribe with local Whisper, fix timing in the editor, pick a look, and export an MP4. Every frame is rendered client-side with ffmpeg.wasm, no uploads.',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind',
      'ffmpeg.wasm',
      'FastAPI',
      'faster-whisper',
    ],
    link: 'https://github.com/zxcv616/musicbot',
    linkLabel: 'GitHub',
    year: '2025',
  },
  {
    name: 'Bastion',
    tagline: 'Endpoint detection and response in Rust',
    description:
      'Endpoint detection and response for schools, clinics, small hospitals, and professional firms (25–2,000 seats). HIPAA/FERPA-ready, with a Rust agent and backend, kernel telemetry, gRPC over mTLS, and a native Flutter console.',
    stack: [
      'Rust 2024',
      'Tonic gRPC',
      'Axum',
      'SurrealDB',
      'Flutter',
      'mTLS / AES-256-GCM',
    ],
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
