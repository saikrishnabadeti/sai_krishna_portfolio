export const PERSON = {
  name: 'Sai Krishna Subrahmanyam Badeti',
  shortName: 'Sai Krishna Badeti',
  role: 'Python Backend Developer',
  experience: '1+ year',
  location: 'Andhra Pradesh, India',
  tagline:
    'Building scalable backend systems using FastAPI, Docker, and async processing',
  summary:
    'Python Developer with 1+ year of experience in FastAPI, REST APIs, and Docker. Skilled in building scalable backend systems, handling async tasks, and designing secure APIs.',
  phone: '+91 7995530089',
  email: 'badetisaikrishna143@gmail.com',
  github: 'https://github.com/saikrishnabadeti',
  linkedin: 'https://www.linkedin.com/in/sai-krishna-badeti-7a4929263',
  profileImage: '/sk_profile_image.jpg',
  resumePath: '/SaiKrishna_Badeti_Resume.pdf',
} as const

export const ACHIEVEMENTS = [
  'Reduced compiler response time by ~25% using async processing',
  'Built authentication for 300+ API endpoints',
  'Implemented Docker sandboxing for secure code execution',
] as const

export const SKILLS = [
  'Python',
  'FastAPI',
  'REST APIs',
  'Async Programming',
  'JWT',
  'OAuth',
  'SQL',
  'SQLAlchemy',
  'Docker',
  'WebSockets',
  'Git',
] as const

export const TOOLS = [
  {
    name: 'GitHub',
    description: 'Used for team collaboration and tracking project versions',
    icon: 'https://cdn.simpleicons.org/github/38bdf8',
  },
  {
    name: 'GitHub Copilot',
    description:
      'Used for AI-assisted coding to improve development speed and productivity',
    icon: 'https://cdn.simpleicons.org/githubcopilot/38bdf8',
  },
  {
    name: 'Cursor',
    description:
      'Used for vibe coding and faster development workflow using AI assistance',
    icon: '', // rendered with Lucide in Tools.tsx
  },
  {
    name: 'VS Code',
    description:
      'Primary development environment used for writing, debugging, and managing backend applications',
    icon: '/icons/vscode.svg',
  },
] as const

export type Project = {
  title: string
  description: string
  tech: string[]
  features: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'Online Coding Assessment Platform',
    description:
      'Secure platform to compile and execute user code in isolated environments.',
    tech: ['Python', 'FastAPI', 'Docker', 'Redis', 'MySQL', 'Linux'],
    features: [
      '13 REST APIs and WebSocket handlers',
      'Supports 8+ programming languages',
      'Docker sandbox execution',
      'Real-time code execution',
    ],
  },
  {
    title: 'HRMS (Human Resource Management System)',
    description:
      'Backend system for employee and access management with strong security controls.',
    tech: ['Python', 'FastAPI', 'MySQL', 'SQLAlchemy', 'JWT', 'OAuth'],
    features: [
      'Secured 300+ APIs',
      'Role-based access control',
      'IP tracking using GeoIP',
      'WebSocket notifications',
    ],
  },
]
