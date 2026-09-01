/**
 * Centralized Portfolio Data for Vikas Singh
 * Easy to update: modify values in this file to update the entire website content.
 */

export const personalInfo = {
  name: "Vikas Singh",
  initials: "VS",
  role: "Backend Developer / Node.js Developer",
  experienceYears: "4+",
  tagline: "Building scalable backend systems with Node.js.",
  shortBio:
    "Backend Developer with 4+ years of experience building secure, scalable and high-performance APIs, microservices and real-time applications.",
  aboutDetailed:
    "I'm a Backend Developer with 4+ years of experience designing and developing scalable backend applications using Node.js and modern backend technologies. I specialize in architecting REST APIs, microservices, robust database models, and automated CI/CD pipelines that solve real-world business challenges.",
  walmartExperience:
    "Delivered backend and automation solutions supporting Walmart Canada business workflows.",
  location: "India / Remote Available",
  email: "vikas.singh.backend@gmail.com", // Replace with your actual email
  linkedIn: "https://linkedin.com/in/vikas-singh-backend", // Replace with your actual LinkedIn profile
  github: "https://github.com/vkasrajput",
  resumePath: "/Vikas-Singh-Resume.pdf",
};

export const quickStats = [
  {
    number: "4+",
    label: "Years Experience",
    sublabel: "Production-grade backend engineering",
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
    sublabel: "Backend & automation solutions",
    icon: "Building",
  },
];

export const focusAreas = [
  {
    title: "Performance",
    desc: "Optimizing asynchronous event loops, query indexing, response payloads, and sub-millisecond in-memory Redis caching.",
    icon: "Zap",
  },
  {
    title: "Scalability",
    desc: "Decoupling monolithic logic into modular microservices, asynchronous message queues, and stateless containerized workers.",
    icon: "Layers",
  },
  {
    title: "Security",
    desc: "Implementing JWT authentication, RBAC authorization, bcrypt hashing, rate limiting, request validation, and CORS policies.",
    icon: "ShieldCheck",
  },
  {
    title: "Maintainability",
    desc: "Writing clean, testable service-repository code, structured logging, consistent error wrappers, and declarative CI/CD pipelines.",
    icon: "Code2",
  },
];

export const skillCategories = [
  {
    id: "backend",
    name: "Backend Engineering",
    description: "Core runtime, frameworks, and real-time protocols",
    skills: [
      { name: "Node.js", tag: "Runtime", highlight: true },
      { name: "Express.js", tag: "Framework", highlight: true },
      { name: "JavaScript (ES6+)", tag: "Language", highlight: true },
      { name: "REST APIs", tag: "Architecture", highlight: true },
      { name: "Microservices", tag: "Architecture", highlight: true },
      { name: "Socket.IO", tag: "Real-time", highlight: false },
      { name: "WebSockets", tag: "Protocol", highlight: false },
      { name: "Async Programming", tag: "Core", highlight: false },
    ],
  },
  {
    id: "databases",
    name: "Databases & Caching",
    description: "NoSQL, relational schemas, and in-memory caches",
    skills: [
      { name: "MongoDB", tag: "NoSQL / Mongoose", highlight: true },
      { name: "MySQL", tag: "Relational / SQL", highlight: true },
      { name: "Redis", tag: "In-Memory / Cache", highlight: true },
      { name: "Database Indexing", tag: "Optimization", highlight: false },
      { name: "Query Optimization", tag: "Performance", highlight: false },
      { name: "Data Aggregations", tag: "Pipelines", highlight: false },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    description: "Containerization, continuous integration, and version control",
    skills: [
      { name: "Docker", tag: "Containers", highlight: true },
      { name: "Git", tag: "VCS", highlight: true },
      { name: "GitHub", tag: "Platform", highlight: true },
      { name: "GitHub Actions", tag: "CI/CD", highlight: true },
      { name: "CI/CD Pipelines", tag: "Automation", highlight: false },
      { name: "Postman", tag: "API Testing", highlight: false },
    ],
  },
  {
    id: "security",
    name: "Security & APIs",
    description: "Identity, authorization, validation, and third-party integrations",
    skills: [
      { name: "JWT", tag: "Tokens", highlight: true },
      { name: "Authentication", tag: "Identity", highlight: true },
      { name: "Authorization (RBAC)", tag: "Access Control", highlight: true },
      { name: "API Integration", tag: "External Services", highlight: true },
      { name: "Rate Limiting", tag: "DDoS Defense", highlight: false },
      { name: "Input Validation", tag: "Security", highlight: false },
    ],
  },
];

export const architectureSteps = [
  {
    title: "1. Client & Gateway Layer",
    desc: "Inbound HTTPS requests reach reverse proxies and API routes with SSL termination, CORS headers, and IP-based rate limiting.",
    tech: ["HTTPS", "Reverse Proxy", "CORS", "Rate Limiter"],
  },
  {
    title: "2. Security & Request Pipeline",
    desc: "JWT verification, role-based authorization guards, and strict request body schema validation before reaching business controllers.",
    tech: ["JWT Verify", "RBAC Guard", "Joi/Zod Validator", "Sanitization"],
  },
  {
    title: "3. Express.js Routing & Controllers",
    desc: "Stateless controllers handle request parsing, parameter extraction, and route delegation to domain-specific business services.",
    tech: ["Express Router", "Async Handler", "Middleware Chain"],
  },
  {
    title: "4. Business Logic & Domain Services",
    desc: "Pure business rules isolated from database queries. Orchestrates caching policies, external integrations, and atomic actions.",
    tech: ["Service Layer", "Event Dispatcher", "Business Rules"],
  },
  {
    title: "5. Data & Cache Tier",
    desc: "Redis cache-aside lookup for hot records. Fallback to MongoDB / MySQL with optimized indexing, transactions, and connection pools.",
    tech: ["Redis Cache", "MongoDB Mongoose", "MySQL Connection Pools"],
  },
  {
    title: "6. Monitoring & Error Boundary",
    desc: "Centralized operational error formatting, structured JSON logging, health check endpoints, and graceful process shutdown.",
    tech: ["Structured Logs", "Global Error Handler", "Health Checks"],
  },
];

export const engineeringPrinciples = [
  {
    id: "clean-architecture",
    title: "Clean Architecture & Layer Separation",
    summary:
      "Separating controllers, services, and repositories prevents spaghetti code and makes unit testing trivial.",
    snippet: `// Controller -> Service -> Repository separation
export const getBookingDetails = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const { userId } = req.user; // populated by auth middleware
    
    // Service orchestrates business validation and caching
    const booking = await bookingService.getBookingById(bookingId, userId);
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
  
  // Structured logging for production observability
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
          # Automated tag and registry push`,
  },
];

export const experiences = [
  {
    title: "Backend / Solution Engineer",
    company: "Client & Workflow Solutions",
    period: "4+ Years Experience",
    badge: "Key Experience",
    highlights: [
      "Delivered backend and automation solutions supporting Walmart Canada business workflows.",
      "Designed and developed scalable RESTful APIs and microservices using Node.js, Express.js, and JavaScript.",
      "Engineered high-performance database schemas and query optimizations in MongoDB and MySQL.",
      "Implemented Redis in-memory caching to reduce database read load and improve API response times.",
      "Built authentication and authorization pipelines leveraging JWT, role-based guards, and security best practices.",
      "Configured Docker containerization and automated CI/CD workflows using GitHub Actions.",
      "Conducted production debugging, log analysis, error tracing, and performance profiling for mission-critical systems.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "Redis",
      "Docker",
      "CI/CD",
      "Git",
      "Postman",
    ],
  },
];

export const projects = [
  {
    id: "maidme",
    title: "MaidMe",
    category: "Service Booking / Backend Application",
    shortDescription:
      "Full-featured on-demand service booking backend with real-time socket updates, automated scheduling, and JWT authentication.",
    problemSolved:
      "Service platforms often struggle with real-time availability sync, concurrent booking clashes, and delayed notifications. MaidMe solved this with distributed locking in Redis and instant bidirectional Socket.IO events.",
    keyContributions: [
      "Architected RESTful API endpoints for user authentication, maid profile management, and dynamic scheduling.",
      "Integrated Socket.IO for real-time booking status notifications and instant customer-provider messaging.",
      "Implemented JWT auth with refresh token rotation and bcrypt password hashing.",
      "Created review and rating aggregation pipelines in MongoDB using aggregation frameworks.",
      "Utilized Redis for temporary session state and active provider location caching.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Redis",
    ],
    architecture: {
      client: "Mobile & Web Clients",
      gateway: "Express.js REST & WebSocket Gateway",
      services: "Auth, Booking Engine, Notification & Review Services",
      database: "MongoDB (Documents) + Redis (Pub/Sub & Caching)",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Featured Backend App",
  },
  {
    id: "loop",
    title: "LOOP",
    category: "Backend Platform & API Integrations",
    shortDescription:
      "Modular backend architecture designed for robust data flow, business workflow automation, and high-throughput API endpoints.",
    problemSolved:
      "Fragmented data pipelines and unmonitored external API integrations lead to data discrepancies and unhandled outages. Built resilient retry mechanisms and structured data persistence.",
    keyContributions: [
      "Developed modular Node.js/Express service layers ensuring separation of concerns and maintainability.",
      "Integrated third-party APIs with exponential backoff and circuit breaker fault tolerance.",
      "Optimized relational and NoSQL database queries for high read/write concurrency.",
      "Implemented standardized logging and error middleware for full operational observability.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MySQL",
      "REST APIs",
      "Postman",
    ],
    architecture: {
      client: "REST Clients / Third-Party Webhooks",
      gateway: "Express.js API Router & Auth Guard",
      services: "Integration Worker & Data Sync Services",
      database: "MySQL / MongoDB Storage",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Core Architecture",
  },
  {
    id: "cicd-node-backend",
    title: "CI/CD Node Backend Pipeline",
    category: "DevOps & Cloud Architecture",
    shortDescription:
      "Automated continuous integration and container deployment pipeline for Node.js microservices with multi-stage Docker builds.",
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
      services: "Automated Test Suite -> Multi-stage Docker Builder",
      database: "Amazon ECR Container Registry",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "DevOps & Cloud",
  },
  {
    id: "ai-voice-chatbot",
    title: "Personal / AI Voice Chatbot",
    category: "AI & Real-Time Application",
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
      "Web APIs",
      "REST",
    ],
    architecture: {
      client: "React Web App (Voice Audio Stream)",
      gateway: "Express.js API Endpoint with Rate Limiter",
      services: "Gemini AI Inference Service & Session Context Manager",
      database: "In-Memory Session Store",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "AI Integration",
  },
];

export const githubRepositories = [
  {
    name: "maidme-backend",
    description:
      "Node.js, Express, MongoDB and Socket.IO backend for on-demand service bookings with real-time events and JWT auth.",
    language: "JavaScript",
    stars: 12,
    forks: 4,
    url: "https://github.com/vkasrajput",
    topics: ["nodejs", "express", "mongodb", "socketio", "redis", "jwt"],
  },
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
    name: "express-microservices-starter",
    description:
      "Clean architecture boilerplate for scalable Express.js backends with Redis caching, Joi validation, and structured logging.",
    language: "JavaScript",
    stars: 24,
    forks: 9,
    url: "https://github.com/vkasrajput",
    topics: ["express", "clean-architecture", "redis", "mysql", "microservices"],
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
];
