'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Download,
  Server,
  TerminalSquare,
  Cpu,
  Database,
  GitBranch,
  Rocket,
  Shield,
  Sparkles,
  Command,
  Copy,
  Send,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TerminalCommand = {
  id: string;
  label: string;
  command: string;
  output: string[];
};

type HighlightCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Project = {
  title: string;
  period: string;
  summary: string;
  impacts: string[];
  stack: string[];
};

type SkillGroup = {
  category: string;
  items: string[];
};

type ApiRequest = {
  id: string;
  method: 'GET' | 'POST';
  url: string;
  description: string;
  curl: string;
  response: {
    status: string;
    body: string[];
  };
};

const INFO = {
  name: 'Jigisa Rathod',
  role: 'Java Backend Engineer',
  experience: '2.5+ years',
  location: 'Ahmedabad, India',
  email: 'rathodjigisa3010@gmail.com',
  phone: '+91-6354812399',
  linkedin: 'https://www.linkedin.com/in/jigisa-rathod',
  resume: '/jigisa_resume.pdf',
  summary:
    'Java backend engineer focused on building reactive services, migrating legacy systems, and shipping real-time user experiences with Spring Boot and Micronaut.',
};

const HERO_TAGS = [
  'Java 17 first',
  'Spring Boot & Micronaut',
  'Realtime APIs',
  'Performance tuning',
];

const TERMINAL_COMMANDS: TerminalCommand[] = [
  {
    id: 'whoami',
    label: 'whoami',
    command: 'whoami',
    output: [
      'Jigisa Rathod',
      `Java Backend Engineer | ${INFO.location}`,
      'Building resilient microservices and realtime user experiences.',
    ],
  },
  {
    id: 'stack',
    label: 'stack --core',
    command: 'stack --core',
    output: [
      'Java 8 & 17 | Spring Boot | Micronaut',
      'Realtime: WebSocket, Firebase, SSE',
      'Data: MySQL, Cassandra, SQL',
    ],
  },
  {
    id: 'status',
    label: 'status --current',
    command: 'status --current',
    output: [
      'Engineering AMS platform APIs with reactive pipelines.',
      'Owning Micronaut migrations and performance tuning.',
    ],
  },
  {
    id: 'contact',
    label: 'contact --open',
    command: 'contact --open',
    output: [
      `email: ${INFO.email}`,
      `phone: ${INFO.phone}`,
      'linkedin: linkedin.com/in/jigisa-rathod',
    ],
  },
];

const API_REQUESTS: ApiRequest[] = [
  {
    id: 'profile',
    method: 'GET',
    url: 'https://api.jigisarathod.dev/v1/profile',
    description: 'Core profile for recruiters: skills, experience, links.',
    curl: "curl -X GET https://api.jigisarathod.dev/v1/profile -H 'Accept: application/json'",
    response: {
      status: '200 OK',
      body: [
        '{',
        '  "name": "Jigisa Rathod",',
        '  "role": "Java Backend Engineer",',
        '  "experience": "2.5+ years",',
        '  "stack": ["Java 17", "Spring Boot", "Micronaut"],',
        '  "contact": {',
        '    "email": "rathodjigisa3010@gmail.com",',
        '    "linkedin": "https://www.linkedin.com/in/jigisa-rathod"',
        '  }',
        '}',
      ],
    },
  },
  {
    id: 'focus',
    method: 'POST',
    url: 'https://api.jigisarathod.dev/v1/focus',
    description: 'What I am solving right now on AMS platform.',
    curl: "curl -X POST https://api.jigisarathod.dev/v1/focus -H 'Content-Type: application/json' -d '{\"module\":\"ams-reporting\"}'",
    response: {
      status: '202 Accepted',
      body: [
        '{',
        '  "module": "ams-reporting",',
        '  "status": "in-progress",',
        '  "nextDeliverable": "Streaming PDF exports backed by Micronaut",',
        '  "lastDeployed": "2025-08-25",',
        '  "owner": "Jigisa Rathod"',
        '}',
      ],
    },
  },
];
const HIGHLIGHTS: HighlightCard[] = [
  {
    icon: Cpu,
    title: 'Modern Java delivery',
    description:
      'Upgrades monoliths to Java 17 microservices with clean interfaces, circuit breakers, and observability baked in.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    description:
      'Implements Azure AD, JWT, and RBAC layers that keep enterprise data safe without slowing delivery.',
  },
  {
    icon: Rocket,
    title: 'Performance obsessed',
    description:
      'Proves impact with load testing, profiling, and focused refactors that cut latency and boost throughput.',
  },
];

const PROJECTS: Project[] = [
  {
    title: 'CSS Module - Java Upgrade & Realtime Alerts',
    period: 'May 2023 - Dec 2023',
    summary:
      'Led the modernization of a core compliance module while keeping 24/7 uptime for global teams.',
    impacts: [
      'Upgraded from Java 8 to 17 with modular builds and zero downtime cutovers.',
      'Introduced Micronaut alongside Spring Boot for reactive workloads and faster cold starts.',
      'Delivered WebSocket and Firebase channels to broadcast alerts in under 2 seconds.',
    ],
    stack: ['Java 17', 'Micronaut', 'Spring Boot', 'Firebase', 'WebSocket', 'Hibernate', 'SQL'],
  },
  {
    title: 'TRP - Data R&D Initiative',
    period: 'Jan 2024 - Jun 2024',
    summary:
      'Explored new data pipelines and storage strategies for a trading research platform.',
    impacts: [
      'Migrated Spring Boot services to Micronaut, enabling reactive streaming APIs.',
      'Evaluated Cassandra against SQL workloads and validated with JMeter and Locust.',
    ],
    stack: ['Micronaut', 'Spring Boot', 'Cassandra', 'Locust', 'JMeter', 'REST APIs'],
  },
  {
    title: 'AMS Platform - Reactive APIs & Reporting',
    period: 'Jul 2024 - Present',
    summary:
      'Owning backend build-out for a modular asset management system with dynamic reporting.',
    impacts: [
      'Integrated legacy services, hardened authentication, and built cross-team REST APIs.',
      'Automated PDF, CSV, and Excel exports with JasperReports and streaming pipelines.',
      'Guiding teams through Micronaut adoption for event-driven microservices.',
    ],
    stack: ['Java 17', 'Micronaut', 'Spring Boot', 'JasperReports', 'SQL', 'REST'],
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['Java 8/17', 'C', 'C++', 'HTML'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Micronaut', 'Hibernate', 'Thymeleaf'],
  },
  {
    category: 'Data & Messaging',
    items: ['Cassandra', 'MySQL', 'SQL', 'WebSocket', 'Socket.IO', 'Firebase'],
  },
  {
    category: 'Security',
    items: ['Azure AD (MSAL)', 'JWT', 'RBAC', 'OAuth 2.0'],
  },
  {
    category: 'Quality & Tooling',
    items: ['JMeter', 'Locust', 'Git', 'Maven'],
  },
  {
    category: 'Reporting',
    items: ['JasperReports', 'Custom PDF pipelines'],
  },
];

const ACHIEVEMENTS = [
  'Winner in inter-college IT events including Code of Conduct, E-Hunt, Googler, and Web Crawler.',
  'Google Analytics 360 and Google Tag Manager Fundamentals (2020).',
];

function Pill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200 ${className}`}
    >
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          {eyebrow ? (
            <span className="text-xs uppercase tracking-[0.3em] text-sky-300">{eyebrow}</span>
          ) : null}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
          >
            {title}
          </motion.h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function TerminalPanel({
  commands,
  activeCommandId,
  onCommandChange,
}: {
  commands: TerminalCommand[];
  activeCommandId: string;
  onCommandChange: (id: string) => void;
}) {
  const active = commands.find((item) => item.id === activeCommandId) ?? commands[0];

  return (
    <div className="relative rounded-3xl border border-sky-500/30 bg-black/90 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
      <div className="flex items-center justify-between border-b border-sky-500/20 bg-neutral-900/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-sky-500/80" />
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <TerminalSquare className="h-4 w-4 text-sky-400" />
          <span>cmd.exe</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-sky-500/20 bg-sky-500/10 px-4 py-2 font-mono text-xs text-sky-300">
        <span>{INFO.name.toLowerCase().replace(/\s+/g, '')}@portfolio</span>
        <span>~/java</span>
      </div>
      <div className="space-y-3 px-5 py-6 font-mono text-sm">
        <div className="text-sky-400">&gt; {active.command}</div>
        {active.output.map((line) => (
          <div key={line} className="text-neutral-200">
            {line}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-sky-500/20 bg-sky-500/10 px-4 py-3">
        {commands.map((item) => (
          <button
            key={item.id}
            onClick={() => onCommandChange(item.id)}
            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition ${
              item.id === activeCommandId
                ? 'border-sky-500 bg-sky-500 text-black shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                : 'border-sky-500/30 text-sky-200 hover:bg-sky-500/15'
            }`}
          >
            <Command className="h-3.5 w-3.5" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ApiPanel({
  requests,
  activeRequestId,
  onSelectRequest,
  onSendRequest,
  sentRequestId,
}: {
  requests: ApiRequest[];
  activeRequestId: string;
  onSelectRequest: (id: string) => void;
  onSendRequest: (id: string) => void;
  sentRequestId: string | null;
}) {
  const active = requests.find((item) => item.id === activeRequestId) ?? requests[0];
  const [copied, setCopied] = useState(false);
  const showResponse = sentRequestId === active.id;

  const handleCopy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(active.curl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-sky-500/30 bg-neutral-950/90 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
      <div className="flex flex-col lg:flex-row">
        <aside className="border-b border-sky-500/20 bg-black/60 p-5 lg:w-64 lg:border-b-0 lg:border-r">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Requests</div>
          <div className="mt-4 space-y-2">
            {requests.map((request) => (
              <button
                key={request.id}
                onClick={() => onSelectRequest(request.id)}
                className={`w-full rounded-xl border px-3 py-2 text-left text-xs transition ${
                  request.id === active.id
                    ? 'border-sky-500 bg-sky-500/10 text-sky-200'
                    : 'border-white/10 text-neutral-300 hover:border-sky-500/40 hover:text-sky-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md border border-sky-500/40 bg-sky-500/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-sky-200">
                    {request.method}
                  </span>
                  <span className="truncate font-mono text-[10px] text-neutral-400">
                    {request.url.replace('https://', '')}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>
        <div className="flex-1 space-y-5 p-5 lg:p-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-md border border-sky-500/40 bg-sky-500/10 px-2 py-1 font-mono text-xs uppercase text-sky-200">
                {active.method}
              </span>
              <div className="truncate font-mono text-xs text-neutral-300">{active.url}</div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-neutral-300 transition hover:border-sky-500/40 hover:text-sky-200"
                type="button"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? 'Copied!' : 'Copy cURL'}
              </button>
              <button
                onClick={() => onSendRequest(active.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500 px-3 py-2 text-xs font-semibold text-black transition hover:bg-sky-400"
                type="button"
              >
                <Send className="h-3.5 w-3.5" />
                Send
              </button>
            </div>
          </div>
          <pre className="overflow-x-auto rounded-2xl border border-black/40 bg-black/80 p-4 font-mono text-xs text-neutral-200">
            {active.curl}
          </pre>
          <div className="rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
              <span>Response</span>
              <span className={`font-mono ${showResponse ? 'text-sky-300' : 'text-neutral-500'}`}>
                {showResponse ? active.response.status : 'Awaiting send'}
              </span>
            </div>
            <div className="space-y-1 px-4 py-4 font-mono text-xs text-neutral-300">
              {showResponse ? (
                active.response.body.map((line) => <div key={line}>{line}</div>)
              ) : (
                <span>Press Send to simulate the API response.</span>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-neutral-300">
            {active.description}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Portfolio() {
  const [isReady, setIsReady] = useState(false);
  const [activeCommandId, setActiveCommandId] = useState<string>(TERMINAL_COMMANDS[0].id);
  const [activeApiId, setActiveApiId] = useState<string>(API_REQUESTS[0].id);
  const [sentApiId, setSentApiId] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSelectApi = (id: string) => {
    setActiveApiId(id);
    setSentApiId((prev) => (prev === id ? prev : null));
  };

  const handleSendApi = (id: string) => {
    setSentApiId(id);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {!isReady && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950">
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sky-300">Booting services…</span>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <Server className="h-5 w-5 text-sky-400" />
            {INFO.name}
          </a>
          <div className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <a
            href={INFO.resume}
            className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/20"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_58%)]" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-20 md:pb-20 md:pt-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
            <div className="space-y-6">
              <Pill className="border-sky-500/30 bg-sky-500/10 uppercase tracking-[0.3em] text-sky-300">
                Java backend engineer
              </Pill>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold leading-tight text-white md:text-5xl md:leading-tight"
              >
                I architect Java-first platforms that stay fast, observable, and production ready.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="max-w-xl text-sm text-neutral-300 md:text-base"
              >
                {INFO.summary}
              </motion.p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${INFO.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-sky-400"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
                <a
                  href={INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-sky-500/40 bg-white/5 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={`tel:${INFO.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-sky-500/40 hover:text-sky-200"
                >
                  <Phone className="h-4 w-4" />
                  {INFO.phone}
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {HERO_TAGS.map((tag) => (
                  <Pill key={tag} className="border-sky-500/20 bg-sky-500/10 text-sky-200">
                    {tag}
                  </Pill>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <Sparkles className="absolute -left-8 -top-6 h-6 w-6 text-sky-400/70 md:-left-10 md:-top-8" />
              <TerminalPanel
                commands={TERMINAL_COMMANDS}
                activeCommandId={activeCommandId}
                onCommandChange={setActiveCommandId}
              />
              <Sparkles className="absolute -bottom-8 -right-6 h-6 w-6 rotate-12 text-sky-400/60 md:-bottom-10 md:-right-8" />
            </motion.div>
          </div>
        </section>

        <Section id="api" title="API prompt for quick checks" eyebrow="api playground">
          <ApiPanel
            requests={API_REQUESTS}
            activeRequestId={activeApiId}
            onSelectRequest={handleSelectApi}
            onSendRequest={handleSendApi}
            sentRequestId={sentApiId}
          />
        </Section>

        <Section id="about" title="Backend mindset for enterprise Java" eyebrow="about">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="space-y-8">
              <p className="text-sm text-neutral-300 md:text-base">
                I work across the full backend lifecycle: deep-diving legacy code, designing new
                modules, pairing with QA on performance tests, and automating releases. My playbook
                mixes Micronaut for reactive services, Spring Boot for battle-tested modules, and a
                focus on observability so production never feels like a black box.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <Icon className="h-6 w-6 text-sky-400" />
                      <div className="mt-4 text-base font-semibold text-white">{item.title}</div>
                      <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <GitBranch className="h-5 w-5 text-sky-400" />
                Milestones & recognition
              </div>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Projects that shaped my practice" eyebrow="projects">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-950/70 p-6"
              >
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>{project.period}</span>
                  <Pill className="border-sky-500/20 bg-sky-500/10 text-sky-200">
                    Java
                  </Pill>
                </div>
                <div className="mt-4 text-lg font-semibold text-white">{project.title}</div>
                <p className="mt-3 text-sm text-neutral-300">{project.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-200">
                  {project.impacts.map((impact) => (
                    <li key={impact} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Pill
                      key={tech}
                      className="border-sky-500/20 bg-sky-500/10 text-sky-200"
                    >
                      {tech}
                    </Pill>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Tools that keep delivery sharp" eyebrow="skills">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="rounded-2xl border border-white/10 bg-neutral-950/80 p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Database className="h-4 w-4 text-sky-400" />
                    {group.category}
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" title="Let us build something dependable" eyebrow="contact">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-6 md:p-8">
              <div className="text-sm font-semibold text-white">Open to Java backend roles</div>
              <p className="mt-3 text-sm text-neutral-300">
                Whether you need to modernize a legacy platform or ship a greenfield backend, I can
                plug in quickly, map dependencies, and deliver secure, testable services.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${INFO.email}`}
                  className="inline-flex w-full items-center justify-between rounded-xl border border-sky-500/30 bg-sky-500/10 px-4 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-500/20"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {INFO.email}
                  </span>
                  <Sparkles className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${INFO.phone}`}
                  className="inline-flex w-full items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-200 transition hover:border-sky-500/30 hover:text-sky-200"
                >
                  <Phone className="h-4 w-4" />
                  {INFO.phone}
                </a>
                <a
                  href={INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-neutral-200 transition hover:border-sky-500/30 hover:text-sky-200"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin.com/in/jigisa-rathod
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Database className="h-4 w-4 text-sky-400" />
                Recent focus
              </div>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li>Scaling Micronaut services, tuning GraalVM native images, and metrics-first rollouts.</li>
                <li>Designing reporting pipelines that stream data to JasperReports with audit trails.</li>
                <li>Mentoring teams on Java best practices, code reviews, and observability dashboards.</li>
              </ul>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-10 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} {INFO.name}. Crafted with Next.js, Tailwind, and plenty of coffee.
      </footer>
    </div>
  );
}







