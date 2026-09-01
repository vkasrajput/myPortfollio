import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '..', 'public', 'Vikas-Singh-Resume.pdf');

const doc = new PDFDocument({
  size: 'A4', // 595.28 x 841.89
  margins: { top: 32, bottom: 32, left: 38, right: 38 },
  autoFirstPage: true,
  bufferPages: true,
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

const primaryColor = '#9A1B24'; // Deep burgundy/red header accent
const textColor = '#262626';
const darkColor = '#111827';
const grayColor = '#4B5563';

function sectionHeader(title) {
  doc.moveDown(0.35);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(primaryColor).text(title, 38, doc.y);
  doc.moveDown(0.1);
  const y = doc.y;
  doc.strokeColor(primaryColor).lineWidth(0.8).moveTo(38, y).lineTo(557, y).stroke();
  doc.moveDown(0.3);
}

function drawBullet(x, y, type = 'solid') {
  if (type === 'solid') {
    doc.circle(x, y, 1.8).fillColor('#1F2937').fill();
  } else {
    doc.circle(x, y, 1.3).lineWidth(0.75).strokeColor('#4B5563').stroke();
  }
}

// ==========================================
// PAGE 1
// ==========================================

// ---------------- HEADER ----------------
doc.font('Helvetica-Bold').fontSize(18).fillColor(primaryColor).text('Vikas Singh', 38, 32);
doc.font('Helvetica').fontSize(9.5).fillColor(darkColor).text('Web Developer || Node.js Developer || Backend Developer');
doc.font('Helvetica').fontSize(8.5).fillColor(textColor).text('Noida, UP, India');
doc.font('Helvetica').fontSize(8.5).fillColor(textColor).text('8787002307, 8931890395');
doc.font('Helvetica').fontSize(8.5).fillColor(textColor).text('vikassinghgmail@gmail.com');
doc.font('Helvetica').fontSize(8.5).fillColor(textColor).text('https://www.linkedin.com/in/vkasrajput');

// ---------------- OBJECTIVE ----------------
sectionHeader('Objective');
doc.font('Helvetica').fontSize(8.2).fillColor(textColor).text(
  'Backend Developer with 4+ years of experience building scalable SaaS and enterprise applications using Node.js, Express.js, MongoDB, MySQL, Redis, AWS, and Microservices. Experienced in designing REST APIs, real-time systems with Socket.IO, authentication, background jobs, and cloud services. Strong understanding of system design, database optimization, caching, security, and clean architecture.',
  38,
  doc.y,
  { align: 'left', lineGap: 1.5, width: 519 }
);

// ---------------- EXPERIENCE ----------------
sectionHeader('Experience');

function renderExperience(company, role, dates, bullets) {
  const startY = doc.y;
  drawBullet(44, startY + 5, 'solid');
  
  doc.font('Helvetica-Bold').fontSize(9).fillColor(darkColor).text(company, 52, startY, { continued: false });
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(grayColor).text(dates, 350, startY, { width: 207, align: 'right' });
  
  doc.font('Helvetica').fontSize(8.5).fillColor(grayColor).text(role, 52, doc.y + 1);
  doc.moveDown(0.2);

  bullets.forEach(b => {
    const curY = doc.y;
    drawBullet(62, curY + 4, 'hollow');
    doc.font('Helvetica').fontSize(8).fillColor(textColor).text(b, 70, curY, {
      width: 487,
      lineGap: 1.2
    });
    doc.moveDown(0.15);
  });
  doc.moveDown(0.2);
}

renderExperience(
  'Appening.co',
  'Web Developer',
  'March 2025 - 07 July 2026',
  [
    'Developed scalable backend services for MaidMe Maid Service Management Platform, LOOP Dental SaaS, Mehlia Property Management SaaS and Kargone Used Car Marketplace.',
    'Designed REST APIs for multi-role systems using Node.js, Express.js and MongoDB. Implemented JWT authentication, OTP login, Google/Apple Sign-In and RBAC.',
    'Built real-time notifications and chat using Socket.IO and Firebase Cloud Messaging. Integrated AWS S3, SendGrid, Apple/Google In-App Purchases and Swagger documentation.',
    'Optimized API performance through indexing, Redis caching and query optimization.'
  ]
);

renderExperience(
  'KNNX Corp (DLT Labs), Hyderabad',
  'Solution Engineer (Solution Engineering & Architect)',
  '1 Jan 2022 - March 2025',
  [
    'Developed scalable backend solutions for enterprise applications using Node.js and Express.js.',
    'Implemented real-time WebSocket communication for high-performance, event-driven applications.',
    'Designed and deployed RESTful APIs with JWT authentication and role-based authorization.',
    'Enhanced system performance with Redis caching and asynchronous programming.',
    'Conducted code reviews, debugging and error handling (RFC 7807), and performance tuning to ensure reliability.'
  ]
);

renderExperience(
  'Open Sense labs, New Delhi',
  'Drupal Developer',
  '15 March 2021 - 15 Sep 2021',
  [
    'Developed custom themes and templates using Drupal 8 to create responsive UI/UX.'
  ]
);

// ---------------- SKILLS ----------------
sectionHeader('Skills');
const skillsList = [
  { category: 'Programming Languages', items: 'JavaScript (ES6+), Java, Python, typescript' },
  { category: 'Backend Development', items: 'Node.js, Express.js, GraphQL, Swagger, BullMQ, Cron Jobs, Redis, RabbitMQ' },
  { category: 'Databases', items: 'MongoDB, MySQL, Redis (caching), PostgreSQL, Mongoose, Aggregation, Indexing, Transaction, Sharding, Normalised, Denormalize, Replication, Prisma ORM' },
  { category: 'Authentication & Security', items: 'JWT, OAuth, Role-based Access Control, Hemlet, Rate Limiting, CORS, Azure key vault, Input Validation, Bcrypt' },
  { category: 'Real-Time Communication', items: 'WebSockets (Socket.IO)' },
  { category: 'Development Practices', items: 'Agile, SDLC, REST API Design, Asynchronous Programming, Error Handling & Debugging, Gateway Routing, Event Loop' },
  { category: 'Architecture', items: 'MVC, Repository Pattern, Service Layer, Clean Architecture, SOLID Design Patterns, Microservices Architecture, Event-driven Architecture' },
  { category: 'Tools', items: 'Git, GitHub, Bitbucket, Postman, Swagger/OpenAPI' }
];

skillsList.forEach(s => {
  const startY = doc.y;
  drawBullet(44, startY + 4, 'solid');
  doc.font('Helvetica-Bold').fontSize(8).fillColor(darkColor).text(`${s.category}: `, 52, startY, { continued: true });
  doc.font('Helvetica').fontSize(8).fillColor(textColor).text(s.items, { lineGap: 1.2, width: 505 });
  doc.moveDown(0.12);
});

// ---------------- PROJECTS (PAGE 1) ----------------
sectionHeader('Projects');

function renderProject(title, bullets) {
  const startY = doc.y;
  drawBullet(44, startY + 4, 'solid');
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(darkColor).text(title, 52, startY);
  doc.moveDown(0.12);

  bullets.forEach(b => {
    const curY = doc.y;
    drawBullet(62, curY + 4, 'hollow');
    doc.font('Helvetica').fontSize(8).fillColor(textColor).text(b, 70, curY, {
      width: 487,
      lineGap: 1.2
    });
    doc.moveDown(0.15);
  });
  doc.moveDown(0.2);
}

// Project 1: Kargone (Concludes Page 1)
renderProject('Kargone - Used Car Marketplace (Appening.co)', [
  'A marketplace that connects car sellers with verified dealers for fast, transparent vehicle sales—covering listings, offers, chat, payments, and admin operations.',
  'Developed RESTful APIs for a multi-role car marketplace supporting Seller, Dealer, and Admin modules using Node.js, Express.js, and MongoDB.',
  'Implemented JWT & OTP authentication, Role-Based Access Control (RBAC), and secured APIs with Helmet, rate limiting, XSS protection, and request validation.',
  'Integrated AWS S3 for vehicle image/document uploads and AWS SES for transactional email notifications.',
  'Implemented Bull + Redis queues and Cron Jobs for background tasks such as lead allocation, billing, reminders, and scheduled platform operations.',
  'Documented REST APIs using Swagger and followed a Controller -> Service -> Repository architecture for clean, maintainable, and scalable code.'
]);

// ==========================================
// PAGE 2
// ==========================================
doc.addPage();

// Project 2: Mehlia
renderProject('Mehlia – Property Management SaaS (Appening.co)', [
  'It helps landlords and property managers manage properties, tenants, rent collection, leases, and maintenance from a single platform.',
  'Implemented Google/Apple Sign-In, and Role-Based Access Control (RBAC).',
  'Built subscription management with plan-based feature, storage, unit, and user limits.',
  'Developed real-time landlord–tenant messaging using Socket.IO and push notifications with Firebase Cloud Messaging (FCM).',
  'Implemented rent payment, expense tracking, multi-currency financial analytics, and Excel report generation.',
  'Automated rent reminders, overdue payment alerts, lease expiration notifications, and background jobs using Bull, Redis, and Cron Jobs.',
  'Integrated AWS S3 for document uploads and Apple/Google In-App Purchase (IAP) verification.'
]);

// Project 3: LOOP Dental SaaS
renderProject('LOOP Dental SaaS - Enterprise Practice Management ( Appening.Co)', [
  'It enables dental clinics to manage appointments, patients, staff, billing, and day-to-day clinic operations in one platform.',
  'Compliance: Ensured HIPAA-compliant data handling with encryption, audit logging, and RBAC.',
  'Real-time Features: Built a Socket.IO-powered notification system for appointment updates & clinical alerts.',
  'API Integrations: Integrated Google Business Reviews API, OAuth2 authentication, and webhook endpoints.',
  'Performance: Achieved sub-200ms response times through caching, database indexing, and query optimization.'
]);

// Project 4: MaidMe
renderProject('MaidMe – Maid Service Management Platform (Appening.co)', [
  'It connects customers with verified maids for booking housekeeping and cleaning services.',
  'Geospatial Services: Developed location-based features using MongoDB geospatial queries.',
  'Email & Notifications: Integrated email services (SendGrid) and a notification system for alerts.',
  'Multi-language Support: Added i18next for 10+ languages.',
  'Security: Implemented comprehensive data security and API protection.',
  'Optimization: Achieved high performance with caching, indexing, and optimized schema design.'
]);

// Project 5: Wolverine Stride
renderProject('Wolverine Stride (KNNX Corp)', [
  'Developed a backend for invoice generation & bidding with Node.js & Express.js.',
  'Implemented secure authentication & authorization (JWT).',
  'Integrated MongoDB with optimized queries for efficiency.',
  'Automated business process validation with Postman test scripts (JavaScript).',
  'Deployed and monitored system on AWS cloud infrastructure.'
]);

// Project 6: Wolverine Freight System
renderProject('Wolverine Freight System (KNNX Corp).', [
  'Designed event-driven microservices architecture in Node.js & Express.js.',
  'Implemented real-time performance tracking using WebSockets.',
  'Optimized MongoDB queries & indexing for high-speed retrieval.',
  'Enhanced performance using Redis caching and async programming.',
  'Built system for horizontal & vertical scalability to handle increasing load.'
]);

// ---------------- EDUCATION ----------------
sectionHeader('Education');
const tableTop = doc.y + 4;
const tableWidth = 519;
const tableHeight = 36;

doc.rect(38, tableTop, tableWidth, tableHeight).strokeColor(darkColor).lineWidth(0.8).stroke();
doc.moveTo(38, tableTop + 18).lineTo(38 + tableWidth, tableTop + 18).stroke(); // Header divider
doc.moveTo(200, tableTop).lineTo(200, tableTop + tableHeight).stroke(); // Col 1 divider
doc.moveTo(430, tableTop).lineTo(430, tableTop + tableHeight).stroke(); // Col 2 divider
doc.moveTo(500, tableTop).lineTo(500, tableTop + tableHeight).stroke(); // Col 3 divider

doc.font('Helvetica-Bold').fontSize(8.5).fillColor(darkColor);
doc.text('Course / Degree', 44, tableTop + 5, { width: 150 });
doc.text('School / University', 206, tableTop + 5, { width: 220 });
doc.text('Grade / Score', 436, tableTop + 5, { width: 60 });
doc.text('Year', 506, tableTop + 5, { width: 45 });

doc.font('Helvetica').fontSize(8).fillColor(textColor);
doc.text('MCA ( Master of Computer Applications )', 44, tableTop + 23, { width: 150 });
doc.text('Madan Mohan Malaviya University of Technology, Gorakhpur', 206, tableTop + 23, { width: 220 });
doc.text('70%', 436, tableTop + 23, { width: 60 });
doc.text('2021', 506, tableTop + 23, { width: 45 });

doc.end();

writeStream.on('finish', () => {
  console.log(`Clean 2-page PDF generated at: ${outputPath}`);
});
