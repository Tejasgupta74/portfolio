export const siteConfig = {
  title: 'Tejas Gupta — Full-Stack Developer & GenAI Builder',
  description: 'Tejas Gupta is a Computer Science undergraduate at Chitkara University (CGPA 8.39) building enterprise full-stack platforms and GenAI-powered web apps. Seeking software engineering internships.',
  url: 'https://tejasgupta.dev',
  email: 'tejasgupta079@gmail.com',
  location: 'Punjab, India (IST / UTC+5:30)',
  status: 'Available for work — Remote-first & On-site',
  social: {
    github: 'https://github.com/Tejasgupta74',
    linkedin: 'https://linkedin.com/in/tejas-gupta-b865a23ba',
  },
};

export const hero = {
  name: 'Tejas Gupta',
  tagline: 'Full-stack developer building enterprise platforms and GenAI apps',
  roles: [
    'Full-Stack Developer',
    'Enterprise Platform Builder',
    'GenAI Web App Engineer',
    'Final-Year CSE Undergrad',
  ],
  bio: 'Computer Science undergraduate at Chitkara University (CGPA 8.39). Specialized in architecting multi-tenant web systems, robust RBAC authentication, and production GenAI pipelines with sub-3s inference.',
  badge: 'Open to internships — Available worldwide',
  cta: {
    primary: { label: 'Start a conversation', href: '#contact' },
    secondary: { label: 'Explore my work', href: '#projects' },
    doors: { label: 'Enter skill doors', href: '#skills' },
  },
  photo: {
    src: '/images/tejas.jpg',
    alt: 'Portrait of Tejas Gupta',
    badge: 'Final-year CSE, Chitkara University',
  },
  abilityCard: {
    id: 'TG-2027-CSE',
    title: 'Tejas Gupta',
    subtitle: 'Full-Stack & GenAI Engineer',
    institution: 'Chitkara University, Punjab',
    degree: 'B.E. Computer Science (2023 – 2027)',
    stats: [
      { label: 'Academic CGPA', value: '8.39', detail: 'Chitkara University' },
      { label: 'LeetCode DSA', value: '102+', detail: 'Problems Solved' },
      { label: 'ServiceNow Certs', value: 'CSA + CAD', detail: 'Admin & App Dev' },
      { label: 'Availability', value: 'Open', detail: 'Internships 2025' },
    ],
  },
};

export const doors = [
  {
    number: '01',
    title: 'Full-Stack Web',
    badge: 'Enterprise Architecture',
    icon: '⚡',
    color: '#00E5A0',
    summary: 'End-to-end full-stack engineering from database schema design to responsive, accessible client interfaces.',
    skills: ['React.js', 'Node.js/Express', 'MongoDB', 'MySQL', 'TailwindCSS', 'MVC', 'REST APIs'],
    steps: [
      { step: '01', title: 'Discovery & Schema Modeling', desc: 'Relational & NoSQL database architecture with indexed queries and data integrity.' },
      { step: '02', title: 'RESTful API Engineering', desc: 'Node/Express micro-endpoints with input sanitization, middleware chains, and validation.' },
      { step: '03', title: 'Modern UI/UX Development', desc: 'Component-driven React architectures styled with Tailwind CSS and Framer Motion.' },
      { step: '04', title: 'Optimization & Deployment', desc: 'Code-splitting, sub-second TTFB, and zero-downtime continuous delivery.' },
    ],
  },
  {
    number: '02',
    title: 'AI Integrations',
    badge: 'GenAI & LLM Pipelines',
    icon: '🧠',
    color: '#A78BFA',
    summary: 'Integrating cutting-edge foundation models to transform unstructured data into actionable intelligence.',
    skills: ['Grok AI API', 'Google Gemini API', 'LLM-powered features', 'Prompt Engineering', 'PDFKit'],
    steps: [
      { step: '01', title: 'Model Selection & API Integration', desc: 'Integrating Gemini & Grok APIs with streaming payloads and error fallbacks.' },
      { step: '02', title: 'Prompt Strategy & Verification', desc: 'Structured outputs (JSON Schema), system instruction tuning, and few-shot calibration.' },
      { step: '03', title: 'Automated Document Synthesis', desc: 'Generating professional PDF diagnostic reports on the fly via Node.js PDFKit.' },
      { step: '04', title: 'Latency Tuning', desc: 'Optimizing payload sizes and token generation for sub-3s inference roundtrips.' },
    ],
  },
  {
    number: '03',
    title: 'Backend & Security',
    badge: 'Access & Concurrency',
    icon: '🔐',
    color: '#F59E0B',
    summary: 'Hardening multi-tenant web platforms with cryptographic security, role isolation, and race-free transactions.',
    skills: ['JWT auth', 'RBAC', 'Token-versioned session revocation', 'Atomic transactions', 'Bcrypt Hashing'],
    steps: [
      { step: '01', title: 'Granular Role-Based Access', desc: 'Hierarchical permission gates for Super Admin, Faculty, Student, and Accountant roles.' },
      { step: '02', title: 'Token-Versioned Revocation', desc: 'Stateless JWT authentication backed by database token versions to revoke sessions instantly.' },
      { step: '03', title: 'Atomic MongoDB Pipelines', desc: 'Race-condition prevention using $inc and conditional $cond pipelines for fee balances.' },
      { step: '04', title: 'Data Cryptography', desc: 'Bcrypt salt rounds, cryptographic password resets, and secure HTTP-only cookies.' },
    ],
  },
  {
    number: '04',
    title: 'Cloud & DevOps',
    badge: 'Infrastructure & CI/CD',
    icon: '☁️',
    color: '#3B82F6',
    summary: 'Automating software delivery with containers, automated testing, and dependable cloud deployments.',
    skills: ['AWS', 'GCP', 'Docker', 'Jenkins', 'GitHub Actions', 'Render deployment'],
    steps: [
      { step: '01', title: 'Containerization', desc: 'Reproducible multi-stage Docker builds minimizing image weight and attack surfaces.' },
      { step: '02', title: 'CI/CD Pipeline Automation', desc: 'Automated linting, unit tests, and integration test runners on GitHub Actions.' },
      { step: '03', title: 'Cloud Platform Orchestration', desc: 'Deploying backend services and static SPAs with auto-healing and log monitoring.' },
      { step: '04', title: 'Observability & Scaling', desc: 'Monitoring response metrics, error thresholds, and database connection pooling.' },
    ],
  },
  {
    number: '05',
    title: 'Core Languages',
    badge: 'Foundations & Polyglot',
    icon: '💻',
    color: '#EC4899',
    summary: 'Deep foundational problem-solving across object-oriented, functional, and procedural paradigms.',
    skills: ['Python', 'JavaScript (ES6+)', 'Java', 'C/C++', 'SQL'],
    steps: [
      { step: '01', title: 'Data Structures & Algorithms', desc: '102+ LeetCode problems solved with optimal time and space complexity.' },
      { step: '02', title: 'Modern JavaScript Ecosystem', desc: 'Async/await, event loop mechanics, ES modules, DOM manipulation, and promises.' },
      { step: '03', title: 'Backend Scripting in Python', desc: 'Automation scripts, data manipulation, and lightweight AI experimentation.' },
      { step: '04', title: 'Relational & Structured SQL', desc: 'Complex joins, aggregation grouping, transactions, and indexing strategies.' },
    ],
  },
];

export const projects = [
  {
    title: 'Institutional College ERP System',
    tagline: 'Multi-tenant academic enterprise platform with granular RBAC & atomic billing',
    stack: ['React', 'Node/Express', 'MongoDB', 'TailwindCSS', 'JWT', 'ExcelJS'],
    bullets: [
      'Multi-tenant ERP with granular RBAC (Super Admin, Faculty, Student, Accountant), session revocation via token versioning, cryptographic password resets',
      'Atomic fee payments using MongoDB aggregation pipelines ($inc, $cond) that prevent race conditions and overpayments, with PDF receipts',
      'Timezone-resilient attendance with lab-slot indexing and debarment alerts; .xlsx/.csv exports via ExcelJS; integration tests in CI',
    ],
    links: {
      live: 'https://college-erp-frontend-lira.onrender.com',
      api: 'https://college-erp-backend-hj58.onrender.com',
      github: 'https://github.com/Tejasgupta74/college-erp',
    },
    featured: true,
  },
  {
    title: 'AI Resume Optimizer',
    tagline: 'Intelligent job description matching & ATS improvement engine powered by Grok AI',
    stack: ['React', 'Node/Express', 'MongoDB', 'Grok AI API'],
    bullets: [
      'Analyzes resumes against job descriptions, detects missing keywords/skills, gives section-level ATS improvement suggestions',
      'RESTful APIs and a responsive React frontend for upload, JD comparison and AI results',
    ],
    links: {},
    featured: true,
  },
  {
    title: 'AI Plant Disease Detection & Report System (PlantScan)',
    tagline: 'Computer vision plant pathology assistant with downloadable PDF health audits',
    stack: ['Node/Express', 'MongoDB', 'Google Gemini API', 'PDFKit'],
    bullets: [
      'Users upload plant images and get AI diagnosis reports, with downloadable PDFs showing severity, prevention and care',
      'JWT auth with encrypted passwords, deployed on Render, sub-3s inference',
    ],
    links: {
      live: 'https://plantscan-o7ji.onrender.com',
    },
    featured: true,
  },
];

export const timeline = [
  {
    period: 'Aug 2023 – Aug 2027',
    title: 'B.E. in Computer Science and Engineering',
    subtitle: 'Chitkara University, Rajpura, Punjab',
    detail: 'CGPA 8.39 — Core coursework in Operating Systems, Database Management Systems, Computer Networks, and Object-Oriented Programming.',
    icon: '🎓',
  },
  {
    period: '2024 – 2025',
    title: 'ServiceNow Certified System Administrator (CSA)',
    subtitle: 'ServiceNow Certification',
    detail: 'Enterprise IT workflow automation, database schema architecture, user role management, and ITIL process management.',
    icon: '📜',
  },
  {
    period: '2024 – 2025',
    title: 'ServiceNow Certified Application Developer (CAD)',
    subtitle: 'ServiceNow Certification',
    detail: 'Building custom enterprise scoped applications, GlideRecord queries, Business Rules, Client Scripts, and Flow Designer automations.',
    icon: '📜',
  },
  {
    period: 'Ongoing',
    title: 'Data Structures & Algorithms',
    subtitle: 'LeetCode Practice',
    detail: '102 problems solved across dynamic programming, binary search trees, graph traversals, and two-pointer arrays.',
    icon: '🧩',
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#projects' },
  { label: 'Skill Doors', href: '#skills' },
  { label: 'My Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
];
