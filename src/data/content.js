// Single source of truth for all site copy and structured content.
// Edit here — components read from this file, not hardcoded text.

export const site = {
  name: 'Kennedy Gabriel',
  role: 'Full-Stack Engineer building thoughtful, intelligent products across web and AI.',
}

export const hero = {
  eyebrow: 'software engineer & builder',
  name: 'Kennedy Gabriel',
  role: 'Full-Stack Engineer building thoughtful, intelligent products across web and AI.',
  supporting:
    'I design and ship full-stack products end-to-end — from React and Vue interfaces to Django and FastAPI backends — with machine learning woven in where it adds real value. Based in Lagos, Nigeria, building for the world.',
  ctaPrimary: { label: 'View my work', target: '#projects' },
  ctaSecondary: { label: 'Get in touch', target: '#contact' },
}

export const about = {
  eyebrow: 'a little about me',
  paragraphs: [
    "I'm Kennedy — a software engineer who works comfortably across the whole stack, from pixel-level frontend polish to backend architecture to training and deploying machine learning models.",
    "Over the past five years I've gone from freelancing on individual client projects to leading full-stack delivery at CleverTech, a digital solutions agency, where I own products end-to-end — architecture, build, deployment, and everything in between.",
    "I'm especially drawn to projects where AI actually solves a real problem, not just decorates one: fraud detection that catches what matters, tools that explain their own reasoning, systems that adapt to the person using them.",
  ],
  stats: [
    { value: '5', label: 'Years Building' },
    { value: '20+', label: 'Projects Shipped' },
    { value: 'Web · Backend · AI', label: 'Three Domains' },
  ],
}

export const skills = {
  eyebrow: 'what I work with',
  groups: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Django', 'FastAPI', 'Python', 'REST APIs'],
    },
    {
      title: 'AI / ML',
      items: [
        'XGBoost',
        'Random Forest',
        'Isolation Forest',
        'Gradient Boosting',
        'Explainable AI',
        'Model Deployment',
      ],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git/GitHub', 'Vercel', 'Render'],
    },
  ],
}

export const experience = {
  eyebrow: 'where I\u2019ve been',
  entries: [
    {
      role: 'Lead Full-Stack Engineer',
      company: 'CleverTech (Digital Solutions Agency)',
      period: '2024 – Present',
      location: 'Lagos, Nigeria (Remote)',
      points: [
        'Led full-stack architecture and delivery for client web applications, building with React/Next.js on the frontend and Node.js/Django on the backend, improving average page-load performance by up to 40%.',
        'Directed end-to-end engineering process from requirements through deployment across concurrent client engagements, maintaining on-time delivery across all projects.',
        'Integrated AI-driven features into client products, including automated content and workflow tools that cut manual processing time by an estimated 30%.',
      ],
    },
    {
      role: 'Freelance Software Engineer',
      company: 'Self-Employed',
      period: '2021 – 2024',
      location: 'Remote',
      points: [
        'Delivered 15+ full-stack and frontend projects for individual and small-business clients using React, Vue, Angular, and Node.js, maintaining a consistent on-time delivery record.',
        'Built and deployed production REST APIs with Django and FastAPI, integrating third-party services and machine learning models into client-facing products.',
        'Designed responsive, SEO-optimized websites and landing pages that increased client lead conversion rates by up to 25%.',
      ],
    },
  ],
}

export const education = {
  degree: 'BSc, Computer Science',
  school: 'Caleb University, Imota, Lagos',
  period: 'Nov 2022 – Jul 2026 · Second Class Upper (2.1 Honors)',
}

export const projects = {
  eyebrow: 'selected work',
  items: [
    {
      name: 'Sentinel-Pay',
      tagline: 'AI Fraud Detection Middleware',
      tech: ['TypeScript', 'Python', 'XGBoost', 'Random Forest', 'Isolation Forest'],
      description:
        'Built a production-grade AI middleware combining XGBoost, Random Forest, and Isolation Forest models to cut false-positive fraud flags in Nigerian digital payment systems.',
      github: 'https://github.com/Kennedy200/sentinel-pay',
    },
    {
      name: 'Ademy-AI',
      tagline: 'Intelligent E-Learning Platform',
      tech: ['React', 'TypeScript', 'FastAPI', 'Django'],
      description:
        'A full-stack e-learning platform with AI-driven performance monitoring — seeded and structured 336 lessons across 7 courses for adaptive delivery.',
      github: 'https://github.com/Kennedy200/Ademy-AI',
    },
    {
      name: 'Lucid',
      tagline: 'Explainable AI Threat Scanner',
      tech: ['TypeScript'],
      description:
        'An Explainable AI tool that scans URLs in real time, detecting malicious threats and generating plain-English risk explanations for non-technical users.',
      github: 'https://github.com/Kennedy200/Lucid',
    },
    {
      name: 'Note-Nexus',
      tagline: 'Academic Notes Marketplace',
      tech: ['TypeScript', 'Node.js'],
      description:
        'A full-stack marketplace enabling university students to share and monetize academic notes through a rewards and airtime-redemption system.',
      github: 'https://github.com/Kennedy200/Note-Nexus',
    },
    {
      name: 'RouteOptima',
      tagline: 'Multi-Stop Route Optimizer',
      tech: ['TypeScript'],
      description:
        'A heuristic-based, multi-stop route optimization engine with interactive map visualization to minimize total travel distance and time.',
      github: 'https://github.com/Kennedy200/RouteOptima',
    },
  ],
}

export const contact = {
  eyebrow: 'let\u2019s talk',
  headline: 'Have a project in mind? Let\u2019s build it.',
  email: 'kennedychigozie883@gmail.com',
  phone: '0705 723 3318',
  github: 'https://github.com/Kennedy200',
  location: 'Lagos, Nigeria',
}

export const nav = {
  links: [
    { label: 'Work', target: '#experience' },
    { label: 'Projects', target: '#projects' },
    { label: 'Skills', target: '#skills' },
    { label: 'Experience', target: '#experience' },
    { label: 'Contact', target: '#contact' },
  ],
}

export const footer = {
  text: '© 2026 Kennedy Gabriel. Built with Vue, Three.js & Tailwind.',
}
