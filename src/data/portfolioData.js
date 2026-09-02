/**
 * Centralized Portfolio Data for Vikas Singh
 * Structured for clear separation between Professional (Company/Private) Projects and Personal (Open Source) Projects.
 */

export const personalInfo = {
  name: "Vikas Singh",
  initials: "VS",
  role: "Backend Developer | Node.js",
  experienceYears: "4+",
  phone: "+91 8787002307",
  phonePrimary: "+91 8787002307",
  phoneSecondary: "+91 8931890395",
  phones: [
    { label: "Primary", number: "+91 8787002307", raw: "+918787002307" },
    { label: "Alternate", number: "+91 8931890395", raw: "+918931890395" },
  ],
  location: "Noida, UP, India",
  statusBadge: "Open to Backend / Node.js Opportunities",
  tagline: "Building scalable backend systems with Node.js.",
  shortBio:
    "Backend Developer with 4+ years of experience building scalable APIs, backend services, microservices, real-time applications and automation solutions.",
  aboutDetailed:
    "I’m a Backend Developer with 4+ years of experience designing and developing scalable backend applications using Node.js and modern backend technologies. My experience includes REST API development, microservices, database design, caching, real-time communication, authentication, third-party integrations, automation, Docker and CI/CD.",
  walmartExperience:
    "Delivered backend and automation solutions supporting Walmart Canada business workflows.",
  email: "vikassinghgmail@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vkasrajput",
  github: "https://github.com/vkasrajput",
  resumePath: "/Vikas-Singh-Resume.pdf",
};

export const quickStats = [
  {
    number: "4+",
    label: "Years Experience",
    sublabel: "Backend & Systems Engineering",
    icon: "Clock",
  },
  {
    number: "Node.js",
    label: "Backend Development",
    sublabel: "Express, Microservices, Async I/O",
    icon: "Server",
  },
  {
    number: "REST APIs",
    label: "& Microservices",
    sublabel: "Scalable architecture & integrations",
    icon: "Network",
  },
  {
    number: "Walmart Canada",
    label: "Project Experience",
    sublabel: "Backend & automation workflows",
    icon: "Building",
  },
];

export const focusAreas = [
  {
    title: "Performance",
    desc: "Optimizing API performance through indexing, Redis caching, async programming, and sub-200ms query optimizations.",
    icon: "Zap",
  },
  {
    title: "Scalability",
    desc: "Designing event-driven microservices, BullMQ + Redis background job queues, and horizontal/vertical scaling architectures.",
    icon: "Layers",
  },
  {
    title: "Security",
    desc: "Implementing JWT, OAuth, RBAC, Helmet, rate limiting, XSS protection, bcrypt hashing, and input validation.",
    icon: "ShieldCheck",
  },
  {
    title: "Maintainability",
    desc: "Following Controller -> Service -> Repository clean architecture, SOLID design patterns, and Swagger/OpenAPI documentation.",
    icon: "Code2",
  },
];

export const skillCategories = [
  {
    id: "backend",
    name: "BACKEND",
    description: "Core runtime, frameworks, real-time protocols & async execution",
    skills: [
      { name: "Node.js", tag: "Runtime", highlight: true },
      { name: "Express.js", tag: "Framework", highlight: true },
      { name: "JavaScript", tag: "Language", highlight: true },
      { name: "REST APIs", tag: "Architecture", highlight: true },
      { name: "Microservices", tag: "Architecture", highlight: true },
      { name: "Socket.IO", tag: "Real-time", highlight: true },
      { name: "WebSockets", tag: "Protocol", highlight: false },
      { name: "Asynchronous Programming", tag: "Core", highlight: true },
    ],
  },
  {
    id: "databases",
    name: "DATABASES",
    description: "NoSQL, relational databases, query indexing & in-memory caching",
    skills: [
      { name: "MongoDB", tag: "NoSQL", highlight: true },
      { name: "MySQL", tag: "Relational / SQL", highlight: true },
      { name: "Redis", tag: "In-Memory / Cache", highlight: true },
    ],
  },
  {
    id: "authentication",
    name: "AUTHENTICATION & API",
    description: "Identity, authorization models, API validation & integration",
    skills: [
      { name: "JWT", tag: "Token Auth", highlight: true },
      { name: "Authentication", tag: "Identity", highlight: true },
      { name: "Authorization", tag: "RBAC", highlight: true },
      { name: "API Integration", tag: "Webhooks", highlight: true },
      { name: "Postman", tag: "Testing", highlight: true },
    ],
  },
  {
    id: "devops",
    name: "DEVOPS & TOOLS",
    description: "Containerization, version control, and CI/CD pipelines",
    skills: [
      { name: "Docker", tag: "Containers", highlight: true },
      { name: "Git", tag: "VCS", highlight: true },
      { name: "GitHub", tag: "Platform", highlight: true },
      { name: "GitHub Actions", tag: "CI/CD", highlight: true },
      { name: "CI/CD", tag: "Automation", highlight: true },
    ],
  },
];

export const engineeringExpertiseCards = [
  {
    title: "API Development",
    desc: "Designing secure and maintainable REST APIs using Node.js and Express.js.",
    icon: "Server",
  },
  {
    title: "Database Engineering",
    desc: "Working with MongoDB and MySQL for data modelling, queries, indexing and optimization.",
    icon: "Database",
  },
  {
    title: "Caching",
    desc: "Using Redis to improve performance and reduce unnecessary database load.",
    icon: "Zap",
  },
  {
    title: "Real-Time Systems",
    desc: "Building real-time communication and event-driven features using Socket.IO/WebSockets.",
    icon: "Radio",
  },
  {
    title: "Authentication",
    desc: "Implementing JWT-based authentication and authorization.",
    icon: "ShieldCheck",
  },
  {
    title: "DevOps",
    desc: "Containerizing applications with Docker and automating testing and deployment through CI/CD.",
    icon: "GitBranch",
  },
];

export const architectureSteps = [
  {
    title: "1. Client & API Gateway",
    desc: "Inbound requests pass through reverse proxies with Helmet headers, CORS policies, rate limiting, and SSL termination.",
    tech: ["HTTPS", "Helmet", "CORS", "Rate Limiter"],
  },
  {
    title: "2. Authentication & Validation",
    desc: "Validates JWT tokens, OAuth / OTP logins, and enforces granular Role-Based Access Control and strict schema validation.",
    tech: ["JWT", "RBAC Guard", "Input Validation", "Bcrypt"],
  },
  {
    title: "3. Express.js Routing & Controllers",
    desc: "Handles HTTP routing, request parsing, parameter extraction, and delegates work to business service layers.",
    tech: ["Express Router", "Async Handler", "RFC 7807 Error Handling"],
  },
  {
    title: "4. Business Logic & Services",
    desc: "Executes pure business logic, background job dispatches via BullMQ, real-time Socket.IO broadcasts, and 3rd-party integrations.",
    tech: ["Domain Services", "BullMQ Queues", "Socket.IO", "Cron Jobs"],
  },
  {
    title: "5. MongoDB / MySQL Database",
    desc: "Persistent storage with optimized schema models, aggregation pipelines, transactions, and connection pools.",
    tech: ["MongoDB Mongoose", "MySQL Connection Pools", "Query Indexing"],
  },
  {
    title: "6. Redis Caching & DevOps",
    desc: "Redis cache-aside lookup for sub-millisecond responses, multi-stage Docker containerization, and automated CI/CD.",
    tech: ["Redis Cache", "Docker", "GitHub Actions CI/CD", "Logging"],
  },
];

export const engineeringPrinciples = [
  {
    id: "clean-architecture",
    title: "Clean Architecture & Layer Separation",
    summary:
      "Separating controllers, services, and repositories prevents spaghetti code and makes unit testing straightforward.",
    snippet: `// Controller -> Service -> Repository separation
export const getBookingDetails = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const { userId, role } = req.user; // Populated by auth middleware
    
    // Service orchestrates business rules and repository calls
    const booking = await bookingService.getBookingById(bookingId, userId, role);
    return res.status(200).json({ success: true, data: booking });
  } catch (error) {
    next(error); // Delegated to centralized error handler
  }
};`,
  },
  {
    id: "caching-pattern",
    title: "Redis Cache-Aside Strategy",
    summary:
      "Drastically reduces database query load by verifying in-memory cache before executing heavy database aggregations.",
    snippet: `// High-performance cache-aside helper
export const getCachedOrFetch = async (key, ttlSeconds, fetchFn) => {
  const cachedData = await redisClient.get(key);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  
  const freshData = await fetchFn();
  if (freshData) {
    await redisClient.setEx(key, ttlSeconds, JSON.stringify(freshData));
  }
  return freshData;
};`,
  },
  {
    id: "error-handling",
    title: "Centralized Error Handling & Security",
    summary:
      "Prevents leaking stack traces in production while returning standardized API error envelopes to clients.",
    snippet: `// Custom Operational Error & Centralized Middleware
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal Server Error';
  
  logger.error({ message: err.message, stack: err.stack, path: req.path });
  
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};`,
  },
  {
    id: "cicd-docker",
    title: "Containerization & CI/CD Pipeline",
    summary:
      "Automated testing, multi-stage Docker builds, and zero-downtime delivery using GitHub Actions.",
    snippet: `# GitHub Actions CI/CD workflow
name: Backend CI/CD Pipeline
on:
  push:
    branches: [ main ]
jobs:
  test-and-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test
      - name: Build & Push Docker Image
        run: |
          docker build -t app:\${{ github.sha }} .
          # Tag and push to container registry`,
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company: "Appening.co",
    period: "March 2025 - 07 July 2026",
    badge: "Recent Experience",
    highlights: [
      "Developed scalable backend services for MaidMe Maid Service Management Platform, LOOP Dental SaaS, Mehlia Property Management SaaS and Kargone Used Car Marketplace.",
      "Designed REST APIs for multi-role systems using Node.js, Express.js and MongoDB. Implemented JWT authentication, OTP login, Google/Apple Sign-In and RBAC.",
      "Built real-time notifications and chat using Socket.IO and Firebase Cloud Messaging (FCM). Integrated AWS S3, SendGrid, Apple/Google In-App Purchases and Swagger documentation.",
      "Optimized API performance through indexing, Redis caching and query optimization.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "AWS S3",
      "BullMQ",
      "JWT",
      "Swagger",
    ],
  },
  {
    title: "Solution Engineer (Solution Engineering & Architect)",
    company: "KNNX Corp (DLT Labs), Hyderabad",
    period: "1 Jan 2022 - March 2025",
    badge: "Core Engineering",
    highlights: [
      "Delivered backend and automation solutions supporting enterprise and Walmart Canada business workflows.",
      "Developed scalable backend solutions for enterprise applications using Node.js and Express.js.",
      "Implemented real-time WebSocket communication for high-performance, event-driven applications.",
      "Designed and deployed RESTful APIs with JWT authentication and role-based authorization.",
      "Enhanced system performance with Redis caching and asynchronous programming.",
      "Conducted code reviews, debugging and error handling (RFC 7807), and performance tuning to ensure reliability.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "WebSockets",
      "Redis",
      "MongoDB",
      "MySQL",
      "Microservices",
      "Postman",
      "RFC 7807",
    ],
  },
  {
    title: "Drupal Developer",
    company: "Open Sense labs, New Delhi",
    period: "15 March 2021 - 15 Sep 2021",
    badge: "Web Development",
    highlights: [
      "Developed custom themes and templates using Drupal 8 to create responsive UI/UX.",
      "Collaborated on front-end template rendering and structured content management architectures.",
    ],
    technologies: ["Drupal 8", "PHP", "JavaScript", "HTML5", "CSS3", "Git"],
  },
];

export const projects = [
  // ==========================================
  // PROFESSIONAL / COMPANY PROJECTS (Source code is private)
  // ==========================================
  {
    id: "maidme",
    title: "MaidMe",
    category: "Professional Projects",
    type: "Service Booking Platform",
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    badge: "Professional Project",
    shortDescription:
      "Backend platform supporting service booking workflows, user management, reviews, notifications and real-time communication.",
    problemSolved:
      "Service platforms often struggle with real-time availability sync, concurrent booking clashes, and delayed notifications. MaidMe solved this with distributed locking in Redis and instant bidirectional Socket.IO events.",
    keyContributions: [
      "Developed REST APIs using Node.js and Express.js",
      "Implemented authentication and authorization",
      "Designed and worked with MongoDB data models",
      "Developed booking and availability APIs",
      "Implemented real-time communication using Socket.IO",
      "Worked on notification functionality",
      "Worked with FCM token management",
      "Implemented and optimized backend business logic",
      "Debugged and resolved production/development issues",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "JWT",
    ],
    architecture: {
      client: "Mobile & Web Client Portals",
      gateway: "Express.js REST & WebSocket Gateway with JWT & RBAC",
      services: "Booking Engine, FCM Notification Worker, Review Service",
      database: "MongoDB (Documents) + Redis (Pub/Sub & Caching)",
    },
    challenges: "Handling concurrent booking requests for shared service provider slots without race conditions.",
    solution: "Implemented Redis distributed locks and atomic MongoDB findAndModify operations ensuring zero double-bookings.",
  },
  {
    id: "loop-dental",
    title: "LOOP Dental SaaS",
    category: "Professional Projects",
    type: "Enterprise Practice Management Platform",
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    badge: "Professional Project",
    shortDescription:
      "Enables dental clinics to manage appointments, patients, staff, billing, and day-to-day clinic operations in one unified platform.",
    problemSolved:
      "Handling HIPAA-compliant patient health records while maintaining sub-200ms API response times across heavy appointment scheduling calendars.",
    keyContributions: [
      "Compliance: Ensured HIPAA-compliant data handling with encryption, audit logging, and RBAC.",
      "Real-time Features: Built a Socket.IO-powered notification system for appointment updates & clinical alerts.",
      "API Integrations: Integrated Google Business Reviews API, OAuth2 authentication, and webhook endpoints.",
      "Performance: Achieved sub-200ms response times through caching, database indexing, and query optimization.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Redis",
      "OAuth2",
      "HIPAA Security",
    ],
    architecture: {
      client: "Clinic Admin, Doctor & Patient Web Applications",
      gateway: "Express.js REST Gateway with HIPAA Encryption & Audit Logger",
      services: "Appointment Scheduler, Socket.IO Alert Engine, Review Integrator",
      database: "Encrypted MongoDB + Redis Cache",
    },
    challenges: "Ensuring HIPAA-compliant data encryption at rest and in transit while maintaining high-speed search across patient records.",
    solution: "Engineered field-level encryption combined with optimized indexing and Redis cache-aside querying.",
  },
  {
    id: "walmart-canada-solutions",
    title: "Walmart Canada Solutions",
    category: "Professional Projects",
    type: "Enterprise Workflow & Automation Solutions",
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    badge: "Professional Project / Client Experience",
    shortDescription:
      "Delivered backend and automation solutions supporting Walmart Canada business workflows.",
    problemSolved:
      "Streamlining mission-critical business workflows, automating manual data reconciliation, and providing reliable backend services with zero downtime.",
    keyContributions: [
      "Engineered backend services and automation pipelines supporting business operations.",
      "Developed robust REST endpoints and asynchronous processing workers.",
      "Integrated data flows between enterprise systems with error boundaries and structured logs.",
      "Optimized queries and caching layers in MySQL and Redis to ensure reliability under heavy operational demands.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "MySQL",
      "Redis",
      "Process Automation",
    ],
    architecture: {
      client: "Internal Business Systems & Automated Webhooks",
      gateway: "Express.js API Router with Strict Schema Validation",
      services: "Workflow Automation Workers & Data Synchronization Services",
      database: "Enterprise MySQL Database + Redis In-Memory Cache",
    },
    challenges: "Processing high volumes of asynchronous enterprise business events without data loss or pipeline bottlenecks.",
    solution: "Implemented resilient retry mechanisms, circuit breakers, and structured RFC 7807 error boundaries.",
  },
  {
    id: "kargone",
    title: "Kargone – Used Car Marketplace",
    category: "Professional Projects",
    type: "Marketplace / Multi-Role SaaS (Appening.co)",
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    badge: "Professional Project",
    shortDescription:
      "A marketplace connecting car sellers with verified dealers for fast, transparent vehicle sales—covering listings, offers, chat, payments, and admin operations.",
    problemSolved:
      "Coordinating multi-tier role permissions (Seller, Dealer, Admin) with instant offer updates and high-speed search across vehicle specs. Built secure RBAC APIs and automated background lead allocation.",
    keyContributions: [
      "Developed RESTful APIs for a multi-role car marketplace supporting Seller, Dealer, and Admin modules using Node.js, Express.js, and MongoDB.",
      "Implemented JWT & OTP authentication, Role-Based Access Control (RBAC), and secured APIs with Helmet, rate limiting, XSS protection, and request validation.",
      "Integrated AWS S3 for vehicle image/document uploads and AWS SES for transactional email notifications.",
      "Implemented Bull + Redis queues and Cron Jobs for background tasks such as lead allocation, billing, reminders, and scheduled platform operations.",
      "Documented REST APIs using Swagger and followed a Controller -> Service -> Repository architecture for clean, maintainable, and scalable code.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "BullMQ",
      "Redis",
      "AWS S3",
      "AWS SES",
      "JWT",
      "Swagger",
    ],
    architecture: {
      client: "Seller / Dealer / Admin Web & Mobile Clients",
      gateway: "Express.js API Router with Helmet, Rate Limiter & RBAC",
      services: "Listing, Offer Engine, BullMQ Background Queues & SES Worker",
      database: "MongoDB (Vehicles/Users) + Redis (Cache & Queues)",
    },
    challenges: "Handling asynchronous background operations like lead distribution and scheduled billing without blocking client API response times.",
    solution: "Offloaded heavy tasks to BullMQ workers connected to Redis with exponential backoff retries.",
  },
  {
    id: "mehlia",
    title: "Mehlia – Property Management SaaS",
    category: "Professional Projects",
    type: "Property Management SaaS (Appening.co)",
    isPrivate: true,
    githubUrl: null,
    liveUrl: null,
    badge: "Professional Project",
    shortDescription:
      "All-in-one platform for landlords and property managers to manage properties, tenants, rent collection, leases, and maintenance from a single platform.",
    problemSolved:
      "Managing subscription tiers, multi-currency financial analytics, and real-time maintenance communication between landlords and tenants. Built real-time Socket.IO chat and automated rent reminders with Bull + Redis.",
    keyContributions: [
      "Implemented Google/Apple Sign-In, and Role-Based Access Control (RBAC).",
      "Built subscription management with plan-based feature, storage, unit, and user limits.",
      "Developed real-time landlord–tenant messaging using Socket.IO and push notifications with Firebase Cloud Messaging (FCM).",
      "Implemented rent payment, expense tracking, multi-currency financial analytics, and Excel report generation.",
      "Automated rent reminders, overdue payment alerts, lease expiration notifications, and background jobs using Bull, Redis, and Cron Jobs.",
      "Integrated AWS S3 for document uploads and Apple/Google In-App Purchase (IAP) verification.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Firebase FCM",
      "BullMQ",
      "Redis",
      "AWS S3",
    ],
    architecture: {
      client: "Landlords & Tenants Web/Mobile Apps",
      gateway: "Express.js REST & Socket.IO Gateway with RBAC",
      services: "Billing & Subscriptions, FCM Push Notifications, Rent Tracker",
      database: "MongoDB + Redis Session/Cache Store",
    },
    challenges: "Real-time synchronization of lease documents, payment alerts, and instant tenant-landlord messaging.",
    solution: "Integrated Socket.IO rooms partitioned by lease agreement with Firebase Cloud Messaging push notification fallbacks.",
  },

  // ==========================================
  // PERSONAL PROJECTS (Open Source & Demonstrations)
  // ==========================================
  {
    id: "cicd-node-backend",
    title: "CI/CD Node Backend",
    category: "Personal Projects",
    type: "Personal / Open-Source Project",
    isPrivate: false,
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: null,
    badge: "Personal Project",
    shortDescription:
      "Production-style Node.js backend project demonstrating automated testing, Docker containerization and CI/CD deployment workflows.",
    problemSolved:
      "Manual deployment caused inconsistent environment configurations and production downtime. Standardized the pipeline to validate, build, and publish immutable container images automatically.",
    keyContributions: [
      "Created GitHub Actions workflow executing linting, unit test suites, and security scans on push.",
      "Engineered multi-stage Dockerfile reducing production container footprint by over 60%.",
      "Configured automated container image tagging and publishing to Amazon Elastic Container Registry (ECR).",
      "Implemented zero-downtime container rollout scripts with environment variable validation.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Docker",
      "GitHub Actions",
      "AWS ECR",
      "CI/CD",
    ],
    architecture: {
      client: "Developer Git Push",
      gateway: "GitHub Webhook & Actions Runner",
      services: "Install Dependencies -> Run Tests -> Multi-stage Docker Builder",
      database: "Amazon ECR Container Registry",
    },
    challenges: "Minimizing container build time and image size for rapid CI/CD test execution.",
    solution: "Used multi-stage Docker builds with alpine base images and npm layer caching in GitHub Actions.",
  },
  {
    id: "ai-voice-chatbot",
    title: "AI Voice Chatbot",
    category: "Personal Projects",
    type: "Personal / AI Project",
    isPrivate: false,
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: null,
    badge: "Personal Project",
    shortDescription:
      "Interactive conversational backend combining Google Gemini API with speech-to-text / text-to-speech pipelines for natural voice dialogue.",
    problemSolved:
      "High latency in streaming AI responses degrades voice conversational experience. Implemented streamed response chunking and prompt engineering for low-latency backend replies.",
    keyContributions: [
      "Built Node.js/Express middleware connecting client voice inputs to Gemini API.",
      "Implemented streaming response handling to send immediate audio/text chunks to the frontend.",
      "Created session context managers to retain multi-turn conversation memory efficiently.",
      "Secured API keys on the server side to eliminate frontend vulnerability exposure.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Web Audio API",
      "REST",
    ],
    architecture: {
      client: "React Web App (Voice Audio Stream)",
      gateway: "Express.js API Endpoint with Rate Limiter",
      services: "Gemini AI Inference Service & Session Context Manager",
      database: "In-Memory Session Store",
    },
    challenges: "Handling real-time token streaming to playback speech without audible buffering gaps.",
    solution: "Streamed text chunks as they arrive from Gemini API and triggered progressive browser speech synthesis.",
  },
];

export const education = {
  degree: "MCA (Master of Computer Applications)",
  university: "Madan Mohan Malaviya University of Technology, Gorakhpur",
  score: "70%",
  year: "2021",
};

export const githubRepositories = [
  {
    name: "node-cicd-docker-pipeline",
    description:
      "Production-ready CI/CD template for Node.js backends using Docker multi-stage builds, GitHub Actions, and AWS ECR.",
    language: "Dockerfile",
    stars: 18,
    forks: 7,
    url: "https://github.com/vkasrajput",
    topics: ["docker", "github-actions", "aws-ecr", "nodejs", "ci-cd"],
  },
  {
    name: "gemini-voice-assistant-backend",
    description:
      "Low-latency Node.js streaming backend proxy for Google Gemini API real-time voice interactions.",
    language: "JavaScript",
    stars: 15,
    forks: 5,
    url: "https://github.com/vkasrajput",
    topics: ["gemini-api", "nodejs", "react", "websockets", "ai"],
  },
  {
    name: "express-clean-architecture-starter",
    description:
      "Personal boilerplate implementing Controller-Service-Repository pattern, Redis cache-aside, and RFC 7807 error handling.",
    language: "JavaScript",
    stars: 34,
    forks: 14,
    url: "https://github.com/vkasrajput",
    topics: ["express", "clean-architecture", "redis", "microservices", "swagger"],
  },
];
