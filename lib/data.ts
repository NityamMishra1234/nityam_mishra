import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Layers3,
  Rocket,
  ServerCog,
  Sparkles,
} from "lucide-react";

export const site = {
  name: "Nityam Mishra",
  role: "Software Developer at ScratchNest Pvt. Ltd.",
  tagline:
    "Full-stack & AI-native engineer building real-time voice AI systems and production-grade web products.",
  description:
    "Nityam Mishra is a full-stack developer specializing in AI-native applications, voice AI systems, Next.js products, FastAPI and Node backends, and AWS deployments.",
  email: "hello@nityammishra.dev",
  phone: "",
  whatsapp: "",
  socials: {
    github: "https://github.com/NityamMishra1234",
    linkedin: "https://www.linkedin.com/in/nityam-mishra-043295290",
    instagram: "https://www.instagram.com/i.am.nityam/",
    x: "https://x.com/nityam1111",
  },
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export const skillGroups = [
  { title: "Frontend", skills: ["React", "Next.js"] },
  { title: "Backend", skills: ["Node.js", "Express", "Nest.js", "FastAPI"] },
  { title: "Databases", skills: ["MongoDB", "SQL", "PostgreSQL"] },
  { title: "Cloud", skills: ["Docker", "AWS EC2", "AWS S3", "Kubernetes"] },
  { title: "Architecture", skills: ["System Design", "Multi-agent AI"] },
  { title: "AI + Voice", skills: ["Groq", "Sarvam AI", "Deepgram", "Gemini"] },
];

export const stats = [
  { value: "3+", label: "years building" },
  { value: "12+", label: "products shipped" },
  { value: "3", label: "client projects" },
  { value: "20+", label: "core technologies" },
];

export const services = [
  {
    title: "Full-stack web development",
    description:
      "Premium Next.js and React frontends paired with Node, Nest, Express, or FastAPI backends.",
    icon: Code2,
  },
  {
    title: "AI-native product development",
    description:
      "LLM apps, voice AI, chatbots, workflow automation, and multi-agent product systems.",
    icon: BrainCircuit,
  },
  {
    title: "SaaS MVP development",
    description:
      "Focused builds for founders who need a launchable product, not a prototype that stalls.",
    icon: Rocket,
  },
  {
    title: "Freelance and agency delivery",
    description:
      "End-to-end client delivery through GCS, with the business context handled as carefully as the code.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Cloud deployment and scaling",
    description:
      "AWS, Docker, S3, EC2, and pragmatic infra choices for fast, maintainable releases.",
    icon: Cloud,
  },
];

export const whyHire = [
  "Production experience building voice AI systems end-to-end across STT, LLM, TTS, and multi-agent workflows.",
  "True full-stack range across React, Next.js, Node, Nest, FastAPI, SQL, NoSQL, AWS, Docker, and basic Kubernetes.",
  "Commercial proof from shipped client websites for GCS, Pixveda, and DollMeUp.",
  "Currently shipping AI voice products inside a real product team at ScratchNest.",
  "Runs GCS, so he understands engineering delivery, client communication, and product outcomes.",
];

export const projects = [
  {
    title: "Arkiti",
    category: "AI Projects",
    type: "Flagship",
    description:
      "A real-time voice-based AI system built on a multi-agent architecture, designed as an AI-native product end-to-end.",
    impact: "Multi-agent voice AI with FastAPI, Flutter, Groq, Sarvam AI, and Deepgram.",
    stack: ["FastAPI", "Flutter", "Groq", "Sarvam AI", "Deepgram"],
    href: "",
    github: "",
    featured: true,
    icon: Bot,
  },
  {
    title: "Voice AI Product - siro.care",
    category: "AI Projects",
    type: "Professional Work",
    description:
      "Built core voice-AI infrastructure for a production on-call AI product at ScratchNest, kept intentionally high-level for confidentiality.",
    impact: "Production voice AI infrastructure with real users, latency constraints, and reliability needs.",
    stack: ["FastAPI", "Voice AI", "Production Systems", "AI Infrastructure"],
    href: "https://siro.care",
    github: "",
    featured: true,
    icon: ServerCog,
  },
  {
    title: "ResumaAI",
    category: "AI Projects",
    type: "Flagship",
    description:
      "An AI-powered resume builder with a Nest.js backend, React + Vite frontend, Gemini intelligence, MongoDB, and AWS storage.",
    impact: "Generated resumes stored on AWS S3 with backend hosted on AWS EC2.",
    stack: ["Nest.js", "React", "Gemini", "MongoDB", "AWS EC2", "AWS S3"],
    href: "",
    github: "https://github.com/NityamMishra1234/ResumaAiBackend",
    secondaryGithub: "https://github.com/NityamMishra1234/resumaBuilder",
    featured: true,
    icon: Layers3,
  },
  {
    title: "GCS - Garur CS",
    category: "Client Work",
    type: "Agency",
    description:
      "Nityam's own software agency and client-facing company website built with a polished Next.js and Tailwind stack.",
    impact: "Commercial agency presence and lead-generation site.",
    stack: ["Next.js", "Tailwind CSS"],
    href: "https://www.garurcs.in/",
    github: "",
    featured: false,
    icon: BriefcaseBusiness,
  },
  {
    title: "Pixveda",
    category: "Client Work",
    type: "Enterprise Client",
    description:
      "Production website for a real-world enterprise digital marketing agency client.",
    impact: "Delivered a client-ready business website for an operating agency.",
    stack: ["Next.js"],
    href: "https://www.pixveda.in/",
    github: "",
    featured: false,
    icon: Sparkles,
  },
  {
    title: "DollMeUp",
    category: "Client Work",
    type: "Studio Client",
    description:
      "Premium studio website built for a beauty and makeup industry client.",
    impact: "Elegant, conversion-focused studio presence for a client business.",
    stack: ["Next.js", "Vercel"],
    href: "https://dollmeup.vercel.app/",
    github: "",
    featured: false,
    icon: Database,
  },
];

export const assistantKnowledge = `
You represent Nityam Mishra, Software Developer at ScratchNest Pvt. Ltd.
Nityam is a full-stack and AI-native engineer building real-time voice AI systems and production-grade web products.
Core skills: React, Next.js, Node.js, Express, Nest.js, FastAPI, MongoDB, SQL, PostgreSQL, Docker, Kubernetes working knowledge, AWS EC2 and S3, system design, multi-agent AI architectures, Groq, Sarvam AI, Deepgram, Gemini.
Projects: Arkiti is a real-time voice AI system using multi-agent architecture, FastAPI backend, Flutter mobile app, Groq LLM, Sarvam AI and Deepgram STT, Sarvam TTS. siro.care is professional ScratchNest work: describe only as core voice-AI infrastructure for a production on-call AI product, with no proprietary architecture or confidential internals. ResumaAI is an AI resume builder with Nest.js backend, React + Vite frontend, Gemini, MongoDB, AWS EC2, and S3. Client work includes GCS, Pixveda, and DollMeUp.
Nityam is open to full-time roles, freelance work, SaaS MVPs, AI integrations, and agency-style delivery. Be concise, sharp, friendly, and nudge visitors toward contacting him.
`;
