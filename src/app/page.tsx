'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download, Link2, Server, Database, Shield, Rocket, TerminalSquare, GitBranch, Zap, Eye } from 'lucide-react';

/**
 * Jigisa Rathod — Backend Portfolio (distinct design)
 * Stack: React + TailwindCSS + Framer Motion + Lucide icons
 *
 * How to use (Next.js):
 * 1) Create a Next.js app with Tailwind.
 * 2) Save this file as app/page.tsx (or src/app/page.tsx) and export default.
 * 3) Put your resume PDF at public/jigisa_resume.pdf (or change the link below).
 */

const INFO = {
  name: 'Jigisa Rathod',
  title: 'Associate Software Engineer — Backend',
  email: 'rathodjigisa3010@gmail.com',
  phone: '+91-6354812399',
  linkedin: 'https://www.linkedin.com/in/jigisa-rathod',
  resume: '/jigisa_resume.pdf',
  summary:
    'Backend-focused engineer (2.5+ yrs) specializing in Java 8/17, Spring Boot & Micronaut. I migrate legacy systems, build high-performance REST APIs, and design real-time services with WebSocket/Firebase.',
};

const SKILLS = [
  { group: 'Languages', items: ['Java 8/17', 'C', 'C++', 'HTML'] },
  { group: 'Frameworks', items: ['Spring Boot', 'Micronaut (Reactive)', 'Hibernate', 'Thymeleaf'] },
  { group: 'Data', items: ['Cassandra', 'MySQL', 'SQL'] },
  { group: 'Auth & Security', items: ['MSAL (Azure AD)', 'JWT', 'RBAC'] },
  { group: 'Realtime', items: ['WebSocket', 'Socket.IO', 'Firebase'] },
  { group: 'Perf & QA', items: ['JMeter', 'Locust'] },
  { group: 'Reporting', items: ['JasperReports'] },
  { group: 'Tooling', items: ['Git', 'Maven'] },
];

const PROJECTS = [
  {
    title: 'CSS Module — Java Upgrade & Realtime Notifications',
    period: 'May 2023 – Dec 2023',
    points: [
      'Migrated stack from Java 8 → 17; ~30% perf improvement.',
      'Spring Boot → Micronaut (reactive) for faster startup & scalability.',
      'WebSocket + Firebase for reliable realtime notifications.',
    ],
    stack: ['Java 17', 'Micronaut', 'Firebase', 'WebSocket', 'Hibernate', 'SQL'],
  },
  {
    title: 'TRP — R&D & Database Exploration',
    period: 'Jan 2024 – Jun 2024',
    points: [
      'Migrated Spring Boot apps to Micronaut (reactive).',
      'Cassandra integration; load testing with Locust/JMeter.',
    ],
    stack: ['Micronaut', 'Cassandra', 'Locust', 'JMeter', 'REST'],
  },
  {
    title: 'AMS — APIs & Dynamic Reporting',
    period: 'Jul 2024 – Present',
    points: [
      'Integrated existing services into AMS platform; built multiple APIs.',
      'Dynamic reports (auto-size) + export to PDF/CSV/Excel (JasperReports).',
      'Spring Boot → Micronaut migrations for reactive microservices.',
    ],
    stack: ['Micronaut', 'Spring Boot', 'JasperReports', 'SQL', 'REST APIs'],
  },
];

const ACHIEVEMENTS = [
  'Winner in Inter College IT Events (COC, E-Hunt, Googler, Web Crawler)',
  'Google Analytics 360 & GTM Fundamentals (2020) — multiple GA certificates',
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-200">
      {children}
    </span>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          {title}
        </motion.h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<'projects' | 'skills'>('projects');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight inline-flex items-center gap-2">
            <Server className="h-5 w-5" /> {INFO.name}
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href={INFO.resume} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">
            <Download className="h-4 w-4" /> Resume
          </a>
        </nav>
      </header>

      {/* Hero — split terminal/card layout (distinct from earlier site) */}
      <section id="home" className="relative overflow-hidden">
        {/* subtle grid bg */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.1),transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="text-sm text-neutral-300">{INFO.title}</div>
              <h1 className="mt-1 text-3xl md:text-5xl font-bold tracking-tight">Backend Engineer building fast, reliable APIs</h1>
              <p className="mt-3 text-neutral-300">{INFO.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill><Zap className="h-3.5 w-3.5" /> Java 8/17</Pill>
                <Pill><GitBranch className="h-3.5 w-3.5" /> Spring Boot → Micronaut</Pill>
                <Pill><Database className="h-3.5 w-3.5" /> Cassandra / SQL</Pill>
                <Pill><Shield className="h-3.5 w-3.5" /> MSAL / JWT</Pill>
                <Pill><Rocket className="h-3.5 w-3.5" /> JMeter & Locust</Pill>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${INFO.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"><Mail className="h-4 w-4" /> Email</a>
                <a href={`tel:${INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"><Phone className="h-4 w-4" /> Call</a>
                <a href={INFO.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-4">
              <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-neutral-200">
                <div className="flex items-center gap-2 text-neutral-400 mb-3"><TerminalSquare className="h-4 w-4" /> live session</div>
                <CodeLine>$ curl -s https://api.jigisa.dev/health</CodeLine>
                <CodeLine className="text-emerald-400">
                  {`{"status":"ok","uptime":"152d","latency":"12ms"}`}
                </CodeLine>                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <CodeLine>$ ./migrate --from java8 --to java17</CodeLine>
                <CodeLine className="text-blue-300">migrating services… done in 2m41s · -30% latency</CodeLine>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <CodeLine>$ loadtest --db cassandra --tool jmeter</CodeLine>
                <CodeLine className="text-amber-300">throughput +22% · p95 110ms → 84ms</CodeLine>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <Section id="work" title="Experience">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {PROJECTS.map((p) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <div className="text-xs text-neutral-400">{p.period}</div>
                  </div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-neutral-300 space-y-1.5">
                  {p.points.map((pt) => (<li key={pt}>{pt}</li>))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (<Pill key={s}>{s}</Pill>))}
                </div>
              </motion.div>
            ))}
          </div>
          <aside className="space-y-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <div className="text-sm font-semibold">Highlights</div>
              <ul className="mt-2 list-disc pl-5 text-xs text-neutral-300 space-y-1.5">
                <li>Java 8 → 17 migration across services</li>
                <li>Micronaut (reactive) for microservices</li>
                <li>Realtime notifications with WebSocket + Firebase</li>
                <li>JasperReports for PDF/CSV/Excel exports</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <div className="text-sm font-semibold">Achievements</div>
              <ul className="mt-2 list-disc pl-5 text-xs text-neutral-300 space-y-1.5">
                {ACHIEVEMENTS.map((a) => (<li key={a}>{a}</li>))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Projects vs Skills Tabs */}
      <Section id="projects" title="Projects & Skills">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-2">
          <div className="flex gap-2 p-1">
            {(['projects', 'skills'] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`flex-1 rounded-xl px-3 py-2 text-sm transition ${tab === t ? 'bg-white text-black' : 'text-neutral-300 hover:bg-white/10'}`}>{t.toUpperCase()}</button>
            ))}
          </div>
          <div className="p-4">
            {tab === 'projects' ? (
              <div className="grid md:grid-cols-3 gap-4">
                {PROJECTS.map((p) => (
                  <div key={p.title} className="rounded-xl border border-white/10 bg-neutral-950/50 p-4">
                    <div className="text-sm font-semibold flex items-center gap-2"><Link2 className="h-4 w-4" /> {p.title}</div>
                    <ul className="mt-2 list-disc pl-5 text-xs text-neutral-300 space-y-1.5">
                      {p.points.slice(0, 2).map((pt) => (<li key={pt}>{pt}</li>))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">{p.stack.map((s) => (<Pill key={s}>{s}</Pill>))}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-4">
                {SKILLS.map((g) => (
                  <div key={g.group} className="rounded-xl border border-white/10 bg-neutral-950/50 p-4">
                    <div className="text-sm font-semibold">{g.group}</div>
                    <ul className="mt-2 list-disc pl-5 text-xs text-neutral-300 space-y-1.5">
                      {g.items.map((it) => (<li key={it}>{it}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
            <div className="text-sm text-neutral-300">Let’s connect.</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${INFO.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90"><Mail className="h-4 w-4" /> {INFO.email}</a>
              <a href={`tel:${INFO.phone}`} className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"><Phone className="h-4 w-4" /> {INFO.phone}</a>
              <a href={INFO.linkedin} target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
            <form className="space-y-3">
              <div>
                <label className="text-sm text-neutral-300">Name</label>
                <input className="mt-1 w-full rounded-xl bg-neutral-950 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-neutral-950 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-neutral-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl bg-neutral-950 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Tell me about your project..." />
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:opacity-90">
                Send
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="py-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} {INFO.name} · Built with React & Tailwind</footer>
    </div>
  );
}

function CodeLine({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`font-mono whitespace-pre-wrap leading-relaxed ${className}`}>{children}</div>
  );
}
