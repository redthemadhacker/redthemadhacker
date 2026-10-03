export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flagship' | 'apps' | 'security' | 'tools';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  highlights: string[];
  metrics?: string;
  isArchived?: boolean;
  archiveNotice?: {
    title: string;
    message: string;
  };
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  type: 'certification' | 'education' | 'specialization';
  status: 'Active / Renewal Track' | 'Certified' | 'Completed' | 'In Progress';
  description: string;
  skills: string[];
  verificationRef?: string;
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface PortConnection {
  id: string;
  portNumber: string;
  name: string;
  protocol: string;
  label: string;
  value: string;
  href: string;
  iconName: 'phone' | 'mail' | 'linkedin' | 'github' | 'shield' | 'terminal';
  status: 'ONLINE' | 'ACTIVE' | 'LISTENING';
  description: string;
  isEncrypted?: boolean;
}

export const BIO_DATA = {
  name: "Amari James",
  callsign: "The Mad Hacker",
  handle: "redthemadhacker",
  acronyms: "SE, CySA, LA",
  title: "Certified Software Engineer, Cybersecurity Analyst & Linux Administrator",
  tagline: "Building resilient web systems, offensive/defensive security solutions, and automated infrastructure.",
  shortBio:
    "Certified Software Engineer, Cybersecurity Analyst, and Linux Administrator with experience supporting enterprise IT operations, endpoint security, and software-driven workflow automation. Skilled in incident triage, system diagnostics, secure device management, and developing lightweight engineering solutions to improve operational efficiency. Currently completing renewal training for CompTIA CySA+ and LPIC‑1.",
  extendedBio:
    "Operating at the intersection of full-stack software development, cybersecurity operations, and systems administration. With practical background across enterprise support at Tech Mahindra and TEKSystems, plus direct operational programming at Outside Catz Facilities, I engineer robust digital products while ensuring security integrity across every layer.",
  status: "Open to Select Engineering & SecOps Roles / Advisory",
  location: "Slidell / New Orleans, LA (Available Remote & Hybrid)",
  primaryLinks: {
    fund: "https://www.phonixia.fund/",
    beta: "https://phonixia-7c9c93ef0d42.herokuapp.com/",
    businessRepo: "https://www.allnyteallbyte.co",
    github: "https://github.com/redthemadhacker",
    cylab: "https://learn.cylabacademy.org/users/redthemadhacker",
    linkedin: "https://linkedin.com/in/amari-james",
    email: "mailto:redthemadhacker@gmail.com?subject=Contact%20Amari&body=Hey%20Amari,",
    phone: "tel:9856451621",
    rawEmail: "redthemadhacker@gmail.com",
    encryptedPhone: "[ENCRYPTED // SOCKET-01]"
  }
};

export const BUILDS_DATA: Project[] = [
  {
    id: "phonixia-fund",
    title: "PHONIXIA: Multiverse Adventure Engine",
    subtitle: "Solo Founder Proposal & System Codex",
    category: "flagship",
    categoryLabel: "Flagship Venture",
    badge: "Active Proposal",
    description:
      "Interactive proposal platform and comprehensive system codex for Phonixia — the solo-developed open-world voxel sandbox MMORPG engineered to dismantle industrial schooling paradigms with emergent gameplay, spatial sandbox nodes, and sovereign economic architecture.",
    longDescription:
      "Engineered as the public-facing venture portal and design codex. Houses detailed system specifications, architectural blueprints for voxel chunk streaming, educational paradigm deconstruction, and fund investment roadmap.",
    tags: ["TypeScript", "Vite", "Tailwind CSS", "Architecture Codex", "Voxel Engine Systems"],
    liveUrl: "https://www.phonixia.fund/",
    githubUrl: "https://github.com/redthemadhacker",
    highlights: [
      "Custom responsive design codex with zero-latency documentation exploration",
      "Comprehensive architectural breakdown of voxel multiverse physics and network loops",
      "Interactive founder investment and vision presentation platform"
    ],
    metrics: "Live Global Portal"
  },
  {
    id: "phonixia-beta",
    title: "Phonixia Interactive Sandbox Engine",
    subtitle: "Playable Beta Engine Deployment",
    category: "flagship",
    categoryLabel: "Live Beta Staging",
    badge: "Playable Staging",
    description:
      "Live playable staging deployment for the Phonixia multiverse adventure universe. Features real-time voxel world rendering, player state coordination, physics simulations, and responsive sandbox controls.",
    longDescription:
      "Active cloud-hosted staging build on Heroku running experimental sandbox voxel interactions. Validates client-side memory budgets, rapid scene transitions, and immersive world generation mechanics.",
    tags: ["Node.js", "WebGL / Three.js Pipeline", "Voxel Rendering", "Heroku", "WebSockets"],
    liveUrl: "https://phonixia-7c9c93ef0d42.herokuapp.com/",
    highlights: [
      "Real-time procedural voxel rendering environment",
      "Interactive spatial movement and terrain interaction",
      "Low-latency deployment pipeline on cloud infrastructure"
    ],
    metrics: "Real-time Sandbox Staging"
  },
  {
    id: "all-nyte-all-byte",
    title: "All Nyte All Byte",
    subtitle: "Bespoke Cybersecurity & Tech Solutions (Byte Lab)",
    category: "flagship",
    categoryLabel: "Byte Lab Venture",
    badge: "Repository Staging",
    description:
      "Bespoke cybersecurity and custom software engineering venture. Designed to handle enterprise security assessments, incident response consulting, lightweight engineering workflows, and specialized tech automation.",
    longDescription:
      "The dedicated business and cybersecurity branch of Amari James. Originating from the Byte Lab initiative, All Nyte All Byte delivers tailored endpoint security audits, workflow automation pipelines, and custom software systems.",
    tags: ["Byte Lab", "Bespoke Security Solutions", "DevSecOps", "Automation Pipelines", "Client Workflows"],
    liveUrl: "https://www.allnyteallbyte.co",
    githubUrl: "https://github.com/redthemadhacker/allnyteallbyte",
    highlights: [
      "Secure client intake and scope specification workflows",
      "Standardized security assessment delivery pipeline",
      "Modular client portal framework and automated reporting"
    ],
    metrics: "Initial Staging in Repo"
  },
  {
    id: "pdr-eddie",
    title: "PDR by Eddie",
    subtitle: "Production Client Web Application",
    category: "apps",
    categoryLabel: "Client Production",
    badge: "Live Production",
    description:
      "Custom commercial company website engineered for a paintless dent repair business. Features a flip-card interactive gallery with image modal inspection, glitch hover micro-interactions, and a custom Formspree photo-quote estimate form with mobile camera support.",
    longDescription:
      "Custom Flexbox architecture engineered for 100% viewport fluidity across smartphone screens and desktop monitors. Integrated Formspree endpoint with multipart photo uploads enabling customers to snap dent damage directly on site. Officially deployed on production domain.",
    tags: ["HTML5", "CSS3 / Flexbox", "JavaScript", "Formspree API", "Production Domain"],
    liveUrl: "https://www.pdrbyeddie.com",
    highlights: [
      "Custom 3D card-flip photo gallery with inspection modal",
      "Multipart mobile camera quote submission pipeline",
      "Fluid responsive layout tested across varied viewport widths",
      "Officially live on custom production domain"
    ],
    metrics: "Production Domain Live"
  },
  {
    id: "kutz-by-kal",
    title: "Kutz by Kal",
    subtitle: "Bespoke Threadwork & Tailoring Showcase",
    category: "apps",
    categoryLabel: "Client Showcase",
    badge: "In Progress",
    description:
      "Custom sewing portfolio engineered to showcase custom bespoke threadwork. Features an interactive estimate request form, smooth slide transitions, high-resolution modal image expansions, and responsive layout for mobile client viewports.",
    longDescription:
      "Built to highlight intricate garment alterations and bespoke creations. Focuses on smooth CSS state transitions, touch-friendly image magnification, and straightforward customer intake.",
    tags: ["JavaScript", "CSS Transitions", "Responsive Layout", "Client Intake", "Heroku"],
    liveUrl: "https://kutsbykal-3b819444b5a5.herokuapp.com/",
    highlights: [
      "Smooth hidden-slide card transitions and custom animation curves",
      "Interactive estimate and bespoke order request form",
      "Full-screen high-res image modal viewer"
    ],
    metrics: "Staging Pipeline"
  },
  {
    id: "hzhq-audio",
    title: "HZHQ Audio Frequency Hub",
    subtitle: "Certified Full-Stack Web Application",
    category: "apps",
    categoryLabel: "Full-Stack System",
    badge: "SE Archive",
    description:
      "Full-stack Express/Node.js web application built for Software Engineering certification. Features secure user authentication, YouTube API integration for streaming pure Hertz-frequency soundscapes, and custom saved playlist libraries.",
    longDescription:
      "Engineered with end-to-end user state persistence, secure password hashing, session tokens, and YouTube Data API endpoints to stream specific binaural/Hertz harmonic frequencies for focus and relaxation.",
    tags: ["Node.js", "Express", "RESTful API", "YouTube Data API", "User Auth & Sessions"],
    liveUrl: "#archived-hzhq",
    githubUrl: "https://github.com/redthemadhacker",
    isArchived: true,
    archiveNotice: {
      title: "SORRY THIS PAGE IS NO LONGER AVAILABLE...",
      message:
        "Disclaimer: The application showcased was produced as an academic project. It was fully functional at the time of completion; however, due to course hosting limitations, the live deployment and API connection are no longer available."
    },
    highlights: [
      "Secure user authentication and credential management",
      "Dynamic YouTube API frequency audio playback integration",
      "Custom user soundscape library persistence",
      "Academic project milestone completed for SE certification"
    ],
    metrics: "Academic Project Completed"
  },
  {
    id: "cylab-training",
    title: "CyLab Academy Security Hub",
    subtitle: "Hands-on CTF & Threat Intelligence Labs",
    category: "security",
    categoryLabel: "Cybersecurity Platform",
    badge: "Live Hub",
    description:
      "Verified cybersecurity training modules, interactive CTF (Capture The Flag) challenge logs, and hands-on laboratory exercises spanning network defense, reconnaissance, privilege escalation, and vulnerability triage.",
    longDescription:
      "Practical cyber training portal documenting completed CTF flags, exploit mitigations, SIEM alert workflows, and Linux system defense drills.",
    tags: ["CyLab Academy", "CTF Challenges", "Wireshark", "Nmap", "SIEM Telemetry", "Incident Triage"],
    liveUrl: "https://learn.cylabacademy.org/users/redthemadhacker",
    highlights: [
      "Verified Capture The Flag challenge completions and writeups",
      "Hands-on packet analysis and defensive network filtering",
      "Vulnerability assessment and remediation validation"
    ],
    metrics: "Live Hub Active"
  },
  {
    id: "central-github",
    title: "Central Git Terminal",
    subtitle: "Source Repositories & Automation Scripts",
    category: "tools",
    categoryLabel: "Source Code Hub",
    badge: "Live Hub",
    description:
      "Central repository terminal hosting active security tools, source scripts, penetration testing utilities, automation workflows, and continuous deployment experiments.",
    longDescription:
      "GitHub home base housing personal dotfiles, bash automation scripts for Ubuntu administration, prototype repositories, and full-stack project foundations.",
    tags: ["Git", "Bash Scripting", "Linux Daemons", "Open Source", "Automation"],
    liveUrl: "https://github.com/redthemadhacker",
    githubUrl: "https://github.com/redthemadhacker",
    highlights: [
      "Automated Linux configuration and setup shell scripts",
      "Active public repositories and full-stack experiments",
      "Version-controlled tooling and project architectures"
    ],
    metrics: "All Repositories Online"
  }
];

export const CREDENTIALS_DATA: Credential[] = [
  {
    id: "cysa-plus",
    title: "CompTIA CySA+ — Cybersecurity Analyst",
    issuer: "CompTIA",
    type: "certification",
    status: "Active / Renewal Track",
    description:
      "Comprehensive validation of behavioral threat detection, proactive threat hunting, security analytics, incident handling, SIEM log analysis, and vulnerability management across enterprise perimeters.",
    skills: ["Threat Detection", "SIEM Telemetry", "Incident Response", "Vulnerability Management", "Security Operations"],
    verificationRef: "CySA+ Renewal In Progress"
  },
  {
    id: "lpic-1",
    title: "LPIC-1 — Linux Administrator",
    issuer: "Linux Professional Institute",
    type: "certification",
    status: "Active / Renewal Track",
    description:
      "Proficiency in Linux fundamentals, system architecture, GNU/Unix commands, package management (dpkg/apt/rpm), file hierarchies, device permissions, and network troubleshooting in live production environments.",
    skills: ["Linux CLI", "System Architecture", "Ubuntu / Debian", "Package Managers", "Process & Service Control"],
    verificationRef: "LPIC-1 Renewal In Progress"
  },
  {
    id: "ga-se",
    title: "Full Stack Software Engineer Immersive",
    issuer: "General Assembly",
    type: "education",
    status: "Certified",
    description:
      "Rigorous full-time software engineering program covering full-stack web application development, algorithms, object-oriented programming, MVC architecture, RESTful API design, and asynchronous execution.",
    skills: ["Full Stack Development", "JavaScript / ES6+", "React", "Node.js / Express", "Database Architecture"],
    verificationRef: "Software Engineering Certification"
  },
  {
    id: "per-scholas",
    title: "Cybersecurity Analyst Specialization",
    issuer: "Per Scholas",
    type: "education",
    status: "Certified",
    description:
      "Intensive technical cybersecurity curriculum focused on enterprise defense, network traffic diagnostics, vulnerability assessments, security policy compliance, and hands-on cyber lab simulations. Completed following Software Engineering immersion.",
    skills: ["Cyber Defense", "Network Traffic Analysis", "Security Controls", "Log Auditing", "Risk Triage"],
    verificationRef: "Cybersecurity Analyst Certification"
  },
  {
    id: "google-ai",
    title: "Google AI Essentials",
    issuer: "Google",
    type: "certification",
    status: "Completed",
    description:
      "Mastering generative AI tools, prompt engineering methodologies, and implementing smart AI-driven workflow automations to elevate engineering throughput and business operations.",
    skills: ["Generative AI", "Prompt Engineering", "Workflow Automation", "LLM Integration"]
  },
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    type: "certification",
    status: "In Progress",
    description:
      "Active training covering multi-platform IT infrastructure, troubleshooting methodology, TCP/IP networking protocols, operating system internals, system administration, and enterprise security basics.",
    skills: ["IT Infrastructure", "TCP/IP Networking", "Operating Systems", "Customer Systems Support", "Diagnostics"]
  },
  {
    id: "cu-boulder-qm",
    title: "Quantum Mechanics for Engineers Specialization",
    issuer: "University of Colorado Boulder",
    type: "specialization",
    status: "In Progress",
    description:
      "Active advanced engineering and physics coursework exploring wave mechanics, quantum states, superposition, operator algebra, and mathematical modeling principles for advanced computational systems.",
    skills: ["Mathematical Modeling", "Wave Mechanics", "Superposition & State Vectors", "Engineering Physics"]
  }
];

export const EXPERIENCE_DATA: ExperienceRole[] = [
  {
    id: "tech-mahindra",
    company: "Tech Mahindra",
    role: "Lvl 1.5 Technical Support Associate",
    period: "Enterprise Support Operations",
    type: "Enterprise IT Services",
    summary:
      "Supported enterprise client infrastructure, resolving complex hardware and software incidents, enforcing strict data security protocols, and evaluating escalation authorizations.",
    responsibilities: [
      "Diagnose and resolve critical hardware and operating system failures under tight SLA timelines.",
      "Ensure strict adherence to secure data handling procedures and enterprise security frameworks.",
      "Provide peer support and technical escalation review for complex cross-platform user tickets.",
      "Document root-cause analyses and standardized technical resolution knowledge-base articles."
    ],
    technologies: ["Enterprise ITIL", "Hardware Diagnostics", "Secure Data Handling", "Incident Escalation", "Windows/Linux Systems"]
  },
  {
    id: "teksystems",
    company: "TEKSystems",
    role: "Service Desk Analyst",
    period: "IT Infrastructure Support",
    type: "Technical Consulting",
    summary:
      "Delivered end-to-end technical issue resolution and secured distributed client workstation environments across diverse corporate networks.",
    responsibilities: [
      "Conducted end-to-end technical triage and remediation for corporate workstation environments.",
      "Configured secure access credentials, VPN connections, and authenticated user permissions.",
      "Investigated network connectivity anomalies and endpoint security software flags.",
      "Collaborated with systems engineering to streamline provisioning and rollout procedures."
    ],
    technologies: ["Active Directory", "Endpoint Security", "VPN & Remote Access", "Network Diagnostics", "IT Service Desk"]
  },
  {
    id: "outside-catz",
    company: "Outside Catz Facilities",
    role: "Operations Manager / IT Programmer",
    period: "Operations & Systems Engineering",
    type: "Operations & Automation",
    summary:
      "Managed organization-wide website administration, digital operational infrastructure, and programmed software automations to accelerate business processes.",
    responsibilities: [
      "Administered web portals, ensuring high uptime, DNS integrity, and mobile responsiveness.",
      "Developed custom software scripts to automate repetitive administrative and inventory tasks.",
      "Managed remote operational workflows, communication channels, and digital asset repositories.",
      "Implemented security best practices for internal files, user authentication, and data integrity."
    ],
    technologies: ["Web Administration", "Scripting & Automation", "Process Optimization", "Digital Infrastructure", "Data Management"]
  }
];

export const PORTS_DATA: PortConnection[] = [
  {
    id: "port-phone",
    portNumber: "PORT // 01",
    name: "Voice Telephony Port",
    protocol: "TEL / ENCRYPTED",
    label: "Encrypted Voice Line",
    value: "[ENCRYPTED_COMMS_SOCKET]",
    href: "dGVsOisxNzA2NjEwMDIyNQ==",
    iconName: "phone",
    status: "ONLINE",
    isEncrypted: true,
    description: "Encrypted direct voice connection socket. Number is protected against scraping and automated dialers."
  },
  {
    id: "port-email",
    portNumber: "PORT // 02",
    name: "Encrypted Dispatch Port",
    protocol: "SMTP / TLS",
    label: "Direct Email",
    value: "redthemadhacker@gmail.com",
    href: "mailto:redthemadhacker@gmail.com?subject=Contact%20Amari&body=Hey%20Amari,",
    iconName: "mail",
    status: "ACTIVE",
    description: "Primary communication channel for project inquiries, technical roles, and collaboration."
  },
  {
    id: "port-linkedin",
    portNumber: "PORT // 03",
    name: "Professional Network Port",
    protocol: "HTTPS / OAUTH",
    label: "LinkedIn Profile",
    value: "linkedin.com/in/amari-james",
    href: "https://linkedin.com/in/amari-james",
    iconName: "linkedin",
    status: "ONLINE",
    description: "Full professional profile, career trajectory, and industry endorsements."
  },
  {
    id: "port-github",
    portNumber: "PORT // 04",
    name: "Source Code Terminal Port",
    protocol: "GIT / SSH",
    label: "GitHub Repositories",
    value: "github.com/redthemadhacker",
    href: "https://github.com/redthemadhacker",
    iconName: "github",
    status: "ACTIVE",
    description: "Public repositories, automation scripts, prototype engines, and source contributions."
  },
  {
    id: "port-cylab",
    portNumber: "PORT // 05",
    name: "CyLab Threat Academy Port",
    protocol: "SEC / CTF",
    label: "CyLab Profile",
    value: "learn.cylabacademy.org/users/redthemadhacker",
    href: "https://learn.cylabacademy.org/users/redthemadhacker",
    iconName: "shield",
    status: "ONLINE",
    description: "Verified cybersecurity challenge achievements, lab completion logs, and CTF records."
  },
  {
    id: "port-fund",
    portNumber: "PORT // 06",
    name: "Phonixia Venture Port",
    protocol: "LIVE / WEB",
    label: "Phonixia Fund",
    value: "phonixia.fund",
    href: "https://www.phonixia.fund/",
    iconName: "terminal",
    status: "ONLINE",
    description: "The Multiverse Adventure Engine proposal codex and founder roadmap."
  }
];

export const SKILLS_MATRIX = [
  {
    category: "Cybersecurity & Defense",
    skills: [
      "Threat Detection & SIEM Analysis",
      "Vulnerability Triage & Management",
      "Incident Response & Containment",
      "Packet Analysis (Wireshark / TCPDump)",
      "Network Scanning (Nmap)",
      "Endpoint Security Hardening",
      "OWASP Web Security",
      "CTF Exploitation & Defense"
    ]
  },
  {
    category: "Software Development",
    skills: [
      "Full-Stack Web Architecture",
      "TypeScript & Modern JavaScript",
      "React 19 & Component Design",
      "Node.js & Express.js APIs",
      "HTML5, Modern CSS & Tailwind",
      "RESTful API Integration",
      "Session Security & Authentication",
      "State Management & Async Data"
    ]
  },
  {
    category: "Systems & Infrastructure",
    skills: [
      "Linux Administration (Ubuntu/Debian)",
      "Bash Shell Scripting & Automation",
      "Kernel & Process Diagnostics",
      "Package Management & Service Daemons",
      "Cloud & Heroku Staging Deployments",
      "Git & Collaborative Version Control",
      "ITIL Service Desk Workflows",
      "Hardware Diagnostics & SLA Resolution"
    ]
  }
];
