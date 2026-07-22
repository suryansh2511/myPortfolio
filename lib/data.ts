// Central content file — edit copy, links, and data here.
// Everything rendered on the site is sourced from this file.

export const site = {
  name: "Suryansh Kumar Pathak",
  role: "Software Engineer",
  location: "Seattle, WA",
  email: "suryansh.kumarpathak@gmail.com",
  github: "https://github.com/suryansh-pathak", // TODO: replace with real handle
  linkedin: "https://linkedin.com/in/suryansh-pathak", // TODO: replace with real handle
  resumeUrl: "/resume.pdf", // TODO: drop your real resume PDF into /public/resume.pdf
  domain: "suryanshpathak.dev", // TODO: point at your registered domain
};

export const hero = {
  eyebrow: "Software Engineer · Distributed Systems · Applied AI",
  headline: "Engineering backend systems that scale — and the AI that runs on them.",
  subheadline:
    "I build distributed systems, cloud platforms, and GenAI products for millions of users — including Microsoft Copilot for M365 Admin Center, serving 500K+ enterprise administrators.",
  ctas: [
    { label: "View Resume", href: "/resume.pdf", primary: true, external: false, download: true },
    { label: "See Projects", href: "#projects", primary: false },
    { label: "Get in Touch", href: "#contact", primary: false },
  ],
  stats: [
    { value: "500K+", label: "enterprise admins served" },
    { value: "2M+", label: "requests handled daily" },
    { value: "99.95%", label: "service availability" },
    { value: "<150ms", label: "P95 latency" },
  ],
};

export const headlineOptions = [
  "Engineering backend systems that scale — and the AI that runs on them.",
  "Distributed systems engineer building the backbone of enterprise AI.",
  "I build backend platforms that run at scale — for millions of requests and 500K+ admins.",
];

export const subheadlineOptions = [
  "Software Engineer in Seattle building distributed systems, cloud platforms, and GenAI products for millions of users — currently shipping Microsoft Copilot for M365 Admin Center.",
  "3+ years designing high-availability backend systems (99.95% uptime, sub-150ms P95) and applied AI architectures — from fraud protection to enterprise Copilot experiences.",
  "Backend and cloud engineer turning distributed-systems expertise into production-grade GenAI platforms — 2M+ requests/day, 500K+ enterprise admins served.",
];

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a Software Engineer based in Seattle with 3+ years building the backend infrastructure that enterprise products run on — distributed systems, cloud-native services, and, more recently, the AI layered on top of them.",
    "At Microsoft (via HCLTech), I've worked on the GenAI assistant architecture behind Copilot for M365 Admin Center, a product used by 500K+ enterprise administrators, and on the RESTful systems underneath it that handle 2M+ requests a day at 99.95% availability. I've also built fraud protection services for real-time risk evaluation and evaluation pipelines (DeepEval, SEVAL) to keep AI outputs trustworthy at scale.",
    "Before that, at Serigor and Softworld Technologies, I built event-driven microservices with Python, RabbitMQ, PostgreSQL, and AWS Aurora, and worked across CI/CD, observability, and cloud infrastructure on Azure and AWS.",
    "I hold an M.S. in Computer Science from UMass Lowell and a B.Tech in Computer Science & Engineering. I care about systems that stay up, APIs that stay fast under load, and AI features that are actually reliable — not just impressive in a demo.",
  ],
  highlights: [
    "M.S. Computer Science, UMass Lowell",
    "B.Tech, Computer Science & Engineering",
    "Seattle, WA",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Microsoft (via HCLTech)",
    role: "Software Engineer",
    period: "2023 — Present", // TODO: confirm exact dates
    location: "Seattle, WA",
    summary:
      "Backend and applied-AI engineering on Microsoft Copilot for M365 Admin Center and the distributed systems that support enterprise-scale admin tooling.",
    achievements: [
      "Co-architected the GenAI assistant powering Copilot for M365 Admin Center, now used by 500K+ enterprise administrators.",
      "Built and operated RESTful distributed systems handling 2M+ requests/day at 99.95% availability and sub-150ms P95 latency.",
      "Designed AI quality and evaluation pipelines using DeepEval and SEVAL to catch regressions in model responses before they reached production.",
      "Built fraud protection backend services for real-time risk evaluation and alerting across high-volume transaction flows.",
      "Partnered with product and applied-science teams to translate LLM capabilities into reliable, latency-bound production features.",
    ],
    stack: ["Python", "Java", "Azure", "Azure OpenAI", "RAG", "LangChain", "PostgreSQL", "Kubernetes"],
  },
  {
    company: "Serigor Inc.",
    role: "Software Engineer",
    period: "2021 — 2023", // TODO: confirm exact dates
    location: "Remote / US",
    summary:
      "Event-driven backend systems and cloud infrastructure for enterprise clients, with a focus on reliability, testing automation, and delivery speed.",
    achievements: [
      "Built event-driven microservices using Python, RabbitMQ, PostgreSQL, and AWS Aurora to decouple high-throughput workflows.",
      "Set up CI/CD pipelines and automated test suites that cut release cycle time and reduced production incidents.",
      "Implemented observability (logging, metrics, tracing) across services to shorten mean time to detection and resolution.",
      "Worked across AWS infrastructure to provision, scale, and harden backend services for production workloads.",
    ],
    stack: ["Python", "RabbitMQ", "PostgreSQL", "AWS Aurora", "AWS", "Docker", "Jenkins"],
  },
  {
    company: "Softworld Technologies",
    role: "Software Engineer",
    period: "2020 — 2021", // TODO: confirm exact dates
    location: "Remote / US",
    summary:
      "Backend platform development and test automation for client-facing systems, with early exposure to cloud infrastructure and distributed architecture.",
    achievements: [
      "Developed backend services and REST APIs supporting core product workflows.",
      "Built automated testing coverage that improved release confidence and reduced manual QA effort.",
      "Contributed to early cloud infrastructure setup and deployment automation on AWS.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "AWS", "SQL"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: ["Java", "Python", "TypeScript", "JavaScript", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  },
  {
    label: "Data & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka", "AWS Aurora"],
  },
  {
    label: "Applied AI & GenAI",
    items: ["Azure OpenAI", "RAG", "LangChain", "LangGraph", "DeepEval", "SEVAL"],
  },
  {
    label: "Systems & Practice",
    items: [
      "Distributed Systems",
      "System Design",
      "Event-Driven Architecture",
      "Observability",
      "CI/CD",
      "High-Availability Design",
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  impact: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

// Illustrative personal/side projects aligned to the resume's domain expertise.
// Replace names, links, and details with your actual repos before publishing.
export const projects: Project[] = [
  {
    name: "RAGForge",
    tagline: "Production-grade RAG framework with a built-in evaluation harness",
    description:
      "A retrieval-augmented generation framework built on LangChain and LangGraph for multi-step, tool-using agents over private document sets. Includes an evaluation harness inspired by DeepEval to score groundedness, relevance, and hallucination rate on every change before it ships.",
    impact: [
      "Automated eval pipeline catches regressions in retrieval quality pre-merge.",
      "Configurable agent graphs support multi-hop reasoning over document corpora.",
      "Designed for self-hosting on Azure OpenAI or any OpenAI-compatible endpoint.",
    ],
    stack: ["Python", "LangChain", "LangGraph", "Azure OpenAI", "DeepEval", "PostgreSQL"],
    links: [{ label: "GitHub", href: "https://github.com/suryansh-pathak/ragforge" }],
    featured: true,
  },
  {
    name: "PulseGuard",
    tagline: "Real-time fraud and anomaly detection service",
    description:
      "An event-driven risk evaluation service that scores transactions in real time and raises alerts on anomalous patterns. Built around a streaming pipeline with sub-200ms scoring latency and a rules + model hybrid decision engine.",
    impact: [
      "Streams and scores transaction events with sub-200ms end-to-end latency.",
      "Hybrid rules-plus-model scoring reduces false positives versus rules-only baselines.",
      "Kafka-backed pipeline decouples ingestion from scoring for independent scaling.",
    ],
    stack: ["Python", "Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    links: [{ label: "GitHub", href: "https://github.com/suryansh-pathak/pulseguard" }],
    featured: true,
  },
  {
    name: "DistribuQueue",
    tagline: "Event-driven task orchestration platform for high-throughput workflows",
    description:
      "A lightweight orchestration layer for decoupling and scaling multi-step backend workflows, built on RabbitMQ with idempotent consumers, retry/backoff policies, and dead-letter handling for production-grade reliability.",
    impact: [
      "At-least-once delivery with idempotent consumers eliminates duplicate side effects.",
      "Configurable retry and dead-letter policies isolate failures without blocking queues.",
      "Kubernetes-native deployment with horizontal autoscaling on queue depth.",
    ],
    stack: ["Python", "RabbitMQ", "AWS Aurora", "Kubernetes", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/suryansh-pathak/distribuqueue" }],
  },
  {
    name: "LatencyLens",
    tagline: "Lightweight observability dashboard for microservices",
    description:
      "A tracing and metrics dashboard for distributed backend systems, aggregating P50/P95/P99 latency, error rates, and dependency maps across services to speed up incident triage.",
    impact: [
      "Cut mean-time-to-detection by surfacing P95/P99 latency regressions in near real time.",
      "Service dependency graph auto-generated from trace data.",
      "Ships as a self-hosted Docker Compose stack for quick adoption.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "GraphQL"],
    links: [{ label: "GitHub", href: "https://github.com/suryansh-pathak/latencylens" }],
  },
];

export const currentlyBuilding = {
  heading: "Currently Building & Exploring",
  items: [
    {
      title: "Agentic RAG systems",
      description:
        "Multi-step, tool-using agents with LangGraph — focused on making retrieval-augmented systems reliable enough for production, not just demos.",
    },
    {
      title: "AI evaluation frameworks",
      description:
        "Practical, automated ways to measure groundedness, relevance, and regression in LLM-powered features before they ship.",
    },
    {
      title: "Distributed systems reliability",
      description:
        "Patterns for high-availability, low-latency backend systems — retries, backpressure, idempotency, and graceful degradation under load.",
    },
  ],
};

export const contact = {
  heading: "Let's talk",
  subheading:
    "Open to backend, full-stack, cloud, and applied AI roles — and always happy to talk distributed systems or GenAI architecture.",
  cta: "Say hello",
};
