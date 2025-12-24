
import safientai1 from '../assets/safientai-1.png';
import safientai2 from '../assets/safientai-2.png';
import ecomdesh1 from '../assets/ecomdesh-1.png';
import ecomdesh2 from '../assets/ecomdesh-2.png';
import ecomdesh3 from '../assets/ecomdesh-3.png';
import ecomdesh4 from '../assets/ecomdesh-4.png';
import ffstAlumni1 from '../assets/ffst-alumni-1.jpeg';

export const personalInfo = {
  name: "Md Mehedi Hasan",
  tagline: "Web and Mobile App Developer with strong proficiency in Backend",
  email: "mehedi.c807@gmail.com",
  phone: "01773-588003",
  github: "https://github.com/mehedi807",
  linkedin: "https://www.linkedin.com/in/mehedi807/",
  whatsapp: "https://wa.me/8801773588003",
  location: "Dhaka, Bangladesh"
};

export const aboutText = `Computer Science graduate with experience developing web and mobile applications. 
I've delivered production systems integrating payment gateways, AI services, and third-party APIs. 
I have a strong foundation in REST API architecture, authentication systems, and scalable database design.`;

export const education = {
  institution: "Bangladesh University Of Business and Technology",
  location: "Mirpur, Dhaka",
  degree: "B.Sc in Computer Science and Engineering",
  period: "Jan 2022 – Dec 2025"
};

export const skills = {
  languages: ["JavaScript", "C++"],
  frameworks: ["Node.js", "Express.js", "React", "React Native"],
  databases: ["MongoDB", "MySQL", "Redis"],
  devops: ["Git", "Nginx", "PM2", "Postman"],
  apis: ["Stripe", "bKash", "Clerk", "WooCommerce", "Pathao", "Steadfast", "Cloudinary"],
  practices: ["REST API Design", "Database Schema Design"]
};

export const projects = [
  {
    id: 1,
    title: "SafientAi",
    featured: true,
    description: "AI chat platform integrating ChatGPT, Claude, Gemini and Grok with parallel streaming response. Features subscription billing with Stripe and bKash payment gateways.",
    details: [
      "Developed AI chat platform integrating ChatGPT, Claude, Gemini and Grok with parallel streaming response",
      "Developed Express REST APIs with validation and error handling middleware",
      "Integrated Stripe and bKash payment gateways for subscription billing",
      "Built React frontend with state management and REST API integration",
      "Implemented secure authentication with Clerk"
    ],
    tech: ["Node.js", "Express.js", "React", "MongoDB", "Stripe", "bKash"],
    liveUrl: "https://www.mehedi197.me",
    githubUrl: "#",
    images: [safientai1, safientai2],
    isMobile: false
  },
  {
    id: 2,
    title: "eComDesh App",
    featured: false,
    description: "Mobile application for managing WooCommerce store orders with courier integration and Redis caching.",
    details: [
      "Developed mobile application for managing WooCommerce store orders",
      "Developed Express REST APIs for order operation and webhook handling",
      "Integrated Steadfast and Pathao courier APIs for order dispatch",
      "Implemented user authentication with role-based permissions",
      "Optimized API performance with Redis caching and rate limiting"
    ],
    tech: ["Node.js", "Express.js", "React Native", "MongoDB", "Redis"],
    liveUrl: "https://github.com/mehedi807/eComdesh-App/releases/tag/V1.12",
    githubUrl: "#",
    images: [ecomdesh1, ecomdesh2, ecomdesh3, ecomdesh4],
    isMobile: true
  },
  {
    id: 3,
    title: "FFST Alumni CVASU",
    featured: false,
    description: "Mobile app for university alumni networking with role-based access.",
    details: [
      "Developed mobile app for university alumni networking",
      "Implemented user authentication with role-based access control",
      "Designed Firestore schemas for users, batches, and events",
      "Integrated Cloudinary API for profile image uploads"
    ],
    tech: ["Node.js", "Express.js", "React Native", "MongoDB", "Cloudinary"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.safientAi.alumni&hl=en",
    githubUrl: "#",
    images: [ffstAlumni1],
    isMobile: true
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];
