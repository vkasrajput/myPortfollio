/**
 * Centralized Portfolio Data for Vikas Singh
 * Updated with exact profile, verified experiences, and enterprise projects from Vikas Singh's resume.
 */

export const personalInfo = {
  name: "Vikas Singh",
  initials: "VS",
  role: "Web Developer || Node.js Developer || Backend Developer",
  experienceYears: "4+",
  phone: "+91 8787002307",
  location: "Noida, UP, India",
  tagline: "Building scalable SaaS & enterprise backend systems with Node.js.",
  shortBio:
    "Backend Developer with 4+ years of experience building scalable SaaS and enterprise applications using Node.js, Express.js, MongoDB, MySQL, Redis, AWS, and Microservices. Experienced in designing REST APIs, real-time systems with Socket.IO, authentication, background jobs, and cloud services.",
  aboutDetailed:
    "I'm a Backend Developer with 4+ years of experience designing and developing scalable SaaS and enterprise applications. I specialize in Node.js, Express.js, MongoDB, MySQL, Redis, AWS, microservices architecture, and real-time event-driven systems. Strong understanding of system design, database optimization, caching, security, and clean architecture.",
  walmartExperience:
    "Delivered scalable enterprise backend solutions and workflow automations across distributed systems.",
  email: "vikassinghgmail@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vkasrajput",
  github: "https://github.com/vkasrajput",
  resumePath: "/Vikas-Singh-Resume.pdf",
};

export const quickStats = [
  {
    number: "4+",
    label: "Years Experience",
    sublabel: "SaaS & Enterprise Applications",
    icon: "Clock",
  },
  {
    number: "Node.js",
    label: "Backend & Express.js",
    sublabel: "Microservices, REST, BullMQ, Redis",
    icon: "Server",
  },
  {
    number: "Real-Time",
    label: "& Event-Driven",
    sublabel: "WebSockets, Socket.IO, Queues",
    icon: "Network",
  },
  {
    number: "Cloud & DB",
    label: "AWS, Mongo, MySQL",
    sublabel: "Redis Caching, Docker, S3, SES",
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
    desc: "Implementing JWT, OAuth, RBAC, Helmet, rate limiting, XSS protection, bcrypt hashing, and Azure Key Vault.",
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
    name: "Backend Development",
    description: "Core frameworks, runtime, queues, and real-time communication",
    skills: [
      { name: "Node.js", tag: "Runtime", highlight: true },
      { name: "Express.js", tag: "Framework", highlight: true },
      { name: "JavaScript (ES6+)", tag: "Language", highlight: true },
      { name: "TypeScript", tag: "Language", highlight: true },
      { name: "GraphQL", tag: "API", highlight: false },
      { name: "Swagger / OpenAPI", tag: "Docs", highlight: true },
      { name: "BullMQ / Redis Queues", tag: "Background Jobs", highlight: true },
      { name: "RabbitMQ", tag: "Message Broker", highlight: false },
      { name: "Cron Jobs", tag: "Automation", highlight: false },
      { name: "WebSockets (Socket.IO)", tag: "Real-Time", highlight: true },
    ],
  },
  {
    id: "databases",
    name: "Databases & ORM",
    description: "NoSQL, relational schemas, caching, and data modeling",
    skills: [
      { name: "MongoDB", tag: "NoSQL / Mongoose", highlight: true },
      { name: "MySQL", tag: "Relational / SQL", highlight: true },
      { name: "Redis (Caching)", tag: "In-Memory", highlight: true },
      { name: "PostgreSQL", tag: "SQL Database", highlight: false },
      { name: "Prisma ORM", tag: "ORM", highlight: false },
      { name: "Aggregation & Indexing", tag: "Optimization", highlight: true },
      { name: "Sharding & Replication", tag: "Scaling", highlight: false },
      { name: "Transactions", tag: "ACID", highlight: false },
    ],
  },
  {
    id: "security",
    name: "Authentication & Security",
    description: "Identity, role-based access, API protection, and vaults",
    skills: [
      { name: "JWT", tag: "Token Auth", highlight: true },
      { name: "OAuth / Google / Apple", tag: "Social Auth", highlight: true },
      { name: "RBAC", tag: "Access Control", highlight: true },
      { name: "Helmet & Rate Limiting", tag: "API Security", highlight: true },
      { name: "CORS & XSS Defense", tag: "Web Security", highlight: false },
      { name: "Azure Key Vault", tag: "Secrets", highlight: false },
      { name: "Input Validation & Bcrypt", tag: "Defense", highlight: true },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & DevOps",
    description: "Design patterns, cloud providers, and version control",
    skills: [
      { name: "Clean Architecture", tag: "Design Pattern", highlight: true },
      { name: "Microservices", tag: "Architecture", highlight: true },
      { name: "Controller-Service-Repo", tag: "Pattern", highlight: true },
      { name: "Event-Driven Systems", tag: "Architecture", highlight: true },
      { name: "AWS (S3, SES)", tag: "Cloud", highlight: true },
      { name: "Git & GitHub", tag: "VCS", highlight: true },
      { name: "Postman", tag: "Testing", highlight: true },
      { name: "Bitbucket", tag: "VCS", highlight: false },
    ],
  },
];

export const architectureSteps = [
  {
    title: "1. Client & API Gateway",
    desc: "Inbound requests pass through reverse proxies with Helmet headers, CORS policies, rate limiting, and SSL termination.",
    tech: ["HTTPS", "Helmet", "CORS", "Rate Limiter"],
  },
  {
    title: "2. Authentication & RBAC Guard",
    desc: "Validates JWT tokens, OAuth / OTP logins, and enforces granular Role-Based Access Control before reaching route handlers.",
    tech: ["JWT", "OAuth2", "RBAC Guard", "Input Validation"],
  },
  {
    title: "3. Express Controller Layer",
    desc: "Handles HTTP routing, request parsing, parameter extraction, and delegates work to business service layers.",
    tech: ["Express Router", "Async Handler", "RFC 7807 Error Handling"],
  },
  {
    title: "4. Service Layer & Business Logic",
    desc: "Executes pure business logic, background job dispatches via BullMQ, real-time Socket.IO broadcasts, and 3rd-party API calls.",
    tech: ["Domain Services", "BullMQ Queues", "Socket.IO", "Cron Jobs"],
  },
  {
    title: "5. Data & Cache Tier",
    desc: "Redis cache-aside lookup for sub-millisecond responses. Fallback to MongoDB / MySQL with optimized indexing and aggregation pipelines.",
    tech: ["Redis Cache", "MongoDB Mongoose", "MySQL", "Prisma ORM"],
  },
  {
    title: "6. Cloud & External Services",
    desc: "Asynchronous file storage on AWS S3, transactional emails via AWS SES, push notifications via FCM, and Swagger documentation.",
    tech: ["AWS S3", "AWS SES", "Firebase FCM", "Swagger/OpenAPI"],
  },
];

export const engineeringPrinciples = [
  {
    id: "clean-architecture",
    title: "Controller -> Service -> Repository Architecture",
    summary:
      "Decouples HTTP routing from business rules and database queries, enabling modular, testable, and maintainable backend code.",
    snippet: `// Controller -> Service -> Repository Pattern
export const getCarDetails = async (req, res, next) => {
  try {
    const { vehicleId } = req.params;
    const { userRole } = req.user; // RBAC verified by auth guard
    
    // Service orchestrates business validation and caching
    const vehicle = await carService.getVehicleDetails(vehicleId, userRole);
    return res.status(200).json({ success: true, data: vehicle });
  } catch (error) {
    next(error); // RFC 7807 Standardized Error Handler
  }
};`,
  },
  {
    id: "caching-pattern",
    title: "Redis Cache-Aside & Query Indexing",
    summary:
      "Achieving sub-200ms latency by checking in-memory Redis cache prior to executing database aggregations.",
    snippet: `// Redis Cache-Aside with TTL
export const getCachedDataOrFetch = async (key, ttlSeconds, fetchFn) => {
  const cached = await redisClient.get(key);
  if (cached) {
    return JSON.parse(cached); // Sub-millisecond in-memory return
  }
  
  const freshData = await fetchFn();
  if (freshData) {
    await redisClient.setEx(key, ttlSeconds, JSON.stringify(freshData));
  }
  return freshData;
};`,
  },
  {
    id: "background-jobs",
    title: "BullMQ + Redis Background Job Queues",
    summary:
      "Asynchronous processing of lead allocation, automated billing, rent reminders, and scheduled cron jobs without blocking API threads.",
    snippet: `// BullMQ Background Task Queue Worker
import { Queue, Worker } from 'bullmq';

export const notificationQueue = new Queue('notifications', { connection: redisConfig });

// Background Worker Processor
const worker = new Worker('notifications', async (job) => {
  const { userId, type, payload } = job.data;
  if (type === 'RENT_REMINDER') {
    await sendTransactionalEmail(payload.email, payload.details);
    await sendFCMNotification(userId, payload.message);
  }
}, { connection: redisConfig });`,
  },
  {
    id: "realtime-socket",
    title: "Real-Time WebSockets & Socket.IO",
    summary:
      "High-performance bidirectional event communication for live chat, instant booking alerts, and freight tracking.",
    snippet: `// Socket.IO Real-time messaging & notification gateway
io.use(socketAuthMiddleware); // JWT verification on handshake

io.on('connection', (socket) => {
  const { userId } = socket.user;
  socket.join(\`user:\${userId}\`);

  socket.on('send_message', async (data) => {
    const savedMessage = await chatService.saveMessage(data);
    io.to(\`room:\${data.roomId}\`).emit('new_message', savedMessage);
  });
});`,
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
  {
    id: "kargone",
    title: "Kargone – Used Car Marketplace",
    category: "Marketplace / Multi-Role SaaS (Appening.co)",
    shortDescription:
      "A marketplace connecting car sellers with verified dealers for fast, transparent vehicle sales—covering listings, offers, chat, payments, and admin operations.",
    problemSolved:
      "Coordinating multi-tier role permissions (Seller, Dealer, Admin) with instant offer updates and high-speed search across thousands of vehicle specs. Built secure RBAC APIs and automated background lead allocation.",
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
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Enterprise Marketplace",
  },
  {
    id: "mehlia",
    title: "Mehlia – Property Management SaaS",
    category: "Property Management SaaS (Appening.co)",
    shortDescription:
      "All-in-one platform for landlords and property managers to manage properties, tenants, rent collection, leases, and maintenance.",
    problemSolved:
      "Managing complex subscription tiers, multi-currency financial analytics, and real-time maintenance communication between landlords and tenants. Built real-time Socket.IO chat and automated rent reminders with Bull + Redis.",
    keyContributions: [
      "Implemented Google/Apple Sign-In and Role-Based Access Control (RBAC).",
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
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Property SaaS",
  },
  {
    id: "loop-dental",
    title: "LOOP Dental SaaS",
    category: "Enterprise Practice Management (Appening.co)",
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
      client: "Dental Clinic Staff & Patient Portals",
      gateway: "Express.js REST API with HIPAA Encryption & Audit Logger",
      services: "Appointment Scheduler, Socket.IO Alert Engine, Review Integrator",
      database: "Encrypted MongoDB + Redis Cache",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Healthcare SaaS",
  },
  {
    id: "maidme",
    title: "MaidMe – Maid Service Platform",
    category: "On-Demand Service Booking (Appening.co)",
    shortDescription:
      "Connects customers with verified maids for booking housekeeping and cleaning services with geospatial query discovery.",
    problemSolved:
      "Efficient location-based nearest service provider matching and multi-language support for international operations.",
    keyContributions: [
      "Geospatial Services: Developed location-based features using MongoDB geospatial queries.",
      "Email & Notifications: Integrated email services (SendGrid) and a notification system for alerts.",
      "Multi-language Support: Added i18next for 10+ languages.",
      "Security: Implemented comprehensive data security and API protection.",
      "Optimization: Achieved high performance with caching, indexing, and optimized schema design.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB Geospatial",
      "SendGrid",
      "i18next",
      "Redis",
      "JWT",
    ],
    architecture: {
      client: "Customer & Maid Mobile Apps",
      gateway: "Express.js REST Gateway with JWT Auth",
      services: "Geospatial Matching Engine, SendGrid Notifier, i18next Localization",
      database: "MongoDB 2dsphere Geo-Indexes + Redis",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Geospatial Booking",
  },
  {
    id: "wolverine-freight",
    title: "Wolverine Freight System",
    category: "Microservices & Logistics (KNNX Corp)",
    shortDescription:
      "Event-driven logistics and freight monitoring platform with real-time WebSocket vehicle tracking and microservices architecture.",
    problemSolved:
      "High data ingestion rate from fleet telematics. Engineered event-driven microservices designed for horizontal & vertical scalability under continuous load.",
    keyContributions: [
      "Designed event-driven microservices architecture in Node.js & Express.js.",
      "Implemented real-time performance tracking using WebSockets.",
      "Optimized MongoDB queries & indexing for high-speed retrieval.",
      "Enhanced performance using Redis caching and async programming.",
      "Built system for horizontal & vertical scalability to handle increasing load.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Microservices",
      "WebSockets",
      "Redis",
      "MongoDB",
    ],
    architecture: {
      client: "Fleet Dispatch & Telematics Ingestion",
      gateway: "WebSocket & Express.js Ingestion Gateway",
      services: "Event-Driven Tracking Microservices & Route Calculation",
      database: "MongoDB + Redis In-Memory State",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Enterprise Logistics",
  },
  {
    id: "wolverine-stride",
    title: "Wolverine Stride",
    category: "Enterprise Billing & Bidding (KNNX Corp)",
    shortDescription:
      "Enterprise backend for invoice generation, bidding workflows, and automated process validation on AWS cloud infrastructure.",
    problemSolved:
      "Automating complex enterprise billing cycles and bidding validations with automated Postman test scripts and AWS cloud deployment.",
    keyContributions: [
      "Developed a backend for invoice generation & bidding with Node.js & Express.js.",
      "Implemented secure authentication & authorization (JWT).",
      "Integrated MongoDB with optimized queries for efficiency.",
      "Automated business process validation with Postman test scripts (JavaScript).",
      "Deployed and monitored system on AWS cloud infrastructure.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Postman Automation",
      "AWS Cloud",
    ],
    architecture: {
      client: "Enterprise Bidding Portal",
      gateway: "Express.js REST Gateway with JWT Auth",
      services: "Invoice Generation Engine & Bidding Validator",
      database: "MongoDB + AWS Infrastructure",
    },
    githubUrl: "https://github.com/vkasrajput",
    liveUrl: "",
    badge: "Enterprise Billing",
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
    name: "kargone-used-car-backend",
    description:
      "Multi-role RESTful API marketplace supporting Seller, Dealer, and Admin modules with BullMQ queues, AWS S3/SES and JWT auth.",
    language: "JavaScript",
    stars: 28,
    forks: 9,
    url: "https://github.com/vkasrajput",
    topics: ["nodejs", "express", "mongodb", "bullmq", "redis", "aws-s3"],
  },
  {
    name: "mehlia-property-saas-backend",
    description:
      "Backend engine for property management SaaS with Socket.IO real-time chat, FCM push notifications, and subscription management.",
    language: "JavaScript",
    stars: 22,
    forks: 6,
    url: "https://github.com/vkasrajput",
    topics: ["nodejs", "socketio", "firebase-fcm", "mongodb", "redis"],
  },
  {
    name: "maidme-geospatial-backend",
    description:
      "On-demand service booking backend with MongoDB 2dsphere geospatial matching, SendGrid notifications, and i18next multi-language support.",
    language: "JavaScript",
    stars: 19,
    forks: 5,
    url: "https://github.com/vkasrajput",
    topics: ["nodejs", "geospatial", "mongodb", "sendgrid", "jwt"],
  },
  {
    name: "express-clean-architecture-starter",
    description:
      "Production-ready boilerplate implementing Controller-Service-Repository pattern, Redis cache-aside, and RFC 7807 error handling.",
    language: "JavaScript",
    stars: 34,
    forks: 14,
    url: "https://github.com/vkasrajput",
    topics: ["express", "clean-architecture", "redis", "microservices", "swagger"],
  },
];
