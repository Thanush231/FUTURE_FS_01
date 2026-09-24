/**
 * Portfolio Data Configuration - Thanush
 * Accurate details extracted directly from Thanush's profile & resume.
 */

const portfolioData = {
  personal: {
    name: "Thanush",
    title: "Full-Stack Developer & CSE Undergraduate",
    tagline: "Computer Science Engineering undergraduate with hands-on experience in Next.js, React, Node.js, Firebase, and MongoDB.",
    location: "Mangaluru, Karnataka, India",
    email: "thanush5489@gmail.com",
    github: "https://github.com/Thanush231",
    linkedin: "https://www.linkedin.com/",
    roles: [
      "Full-Stack Developer",
      "Next.js & React Developer",
      "Node.js & Backend Engineer",
      "Computer Science Engineer",
      "Music Instructor (Aikya Music)"
    ],
    stats: [
      { label: "Academic CGPA", value: "9.63" },
      { label: "Lighthouse Speed Boost", value: "35%" },
      { label: "Students Mentored", value: "18+" },
      { label: "Realtime Latency", value: "<200ms" }
    ],
    aboutText: `I am a Computer Science Engineering undergraduate (5th Semester, CGPA: 9.63) at Sahyadri College of Engineering & Management, Mangaluru. I specialize in building end-to-end full-stack web applications using Next.js, React, Node.js, Express, Firebase, and MongoDB. Passionate about designing high-performance frontends, robust backend REST APIs, and optimized database architectures that deliver measurable product impact.`
  },

  skills: {
    frontend: [
      { name: "React.js / Next.js", level: 92, icon: "fab fa-react" },
      { name: "JavaScript / TypeScript", level: 90, icon: "fab fa-js" },
      { name: "Tailwind CSS / Bootstrap", level: 90, icon: "fab fa-css3-alt" },
      { name: "HTML5 / CSS3", level: 95, icon: "fab fa-html5" },
      { name: "Zustand & Redux State", level: 88, icon: "fas fa-layer-group" }
    ],
    backend: [
      { name: "Node.js", level: 88, icon: "fab fa-node-js" },
      { name: "Express.js", level: 86, icon: "fas fa-server" },
      { name: "REST API Design", level: 90, icon: "fas fa-network-wired" },
      { name: "Java / Python", level: 84, icon: "fab fa-java" }
    ],
    database: [
      { name: "Firebase (Realtime DB)", level: 88, icon: "fas fa-fire" },
      { name: "MongoDB & Schema Design", level: 88, icon: "fas fa-database" },
      { name: "Supabase (PostgreSQL & RLS)", level: 86, icon: "fas fa-bolt" },
      { name: "Database Architecture", level: 90, icon: "fas fa-table" }
    ],
    tools: [
      { name: "Git & GitHub", level: 92, icon: "fab fa-git-alt" },
      { name: "Postman API Testing", level: 88, icon: "fas fa-paper-plane" },
      { name: "VS Code", level: 95, icon: "fas fa-code" },
      { name: "Vercel & Netlify", level: 86, icon: "fas fa-cloud-upload-alt" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "CRM Platform & Lead Admin Dashboard",
      category: "fullstack",
      icon: "fas fa-users-cog",
      description: "Full-stack CRM web application built for Future Interns Task 02 with protected administrative routes, contact lead management, and JWT-authenticated analytics dashboard.",
      tags: ["React", "Node.js", "Express", "REST API", "Auth"],
      github: "https://github.com/Thanush231/FUTURE_FS_02",
      demo: "https://github.com/Thanush231/FUTURE_FS_02",
      featured: true
    },
    {
      id: 2,
      title: "Car Garage & Vehicle Service Platform",
      category: "fullstack",
      icon: "fas fa-car",
      description: "Modern auto garage service and repair booking platform built with Next.js 15 App Router and Tailwind CSS v4, featuring service scheduling and repair tracking workflows.",
      tags: ["Next.js 15", "React 19", "Tailwind CSS v4", "PostCSS"],
      github: "https://github.com/Thanush231/cargarage",
      demo: "https://github.com/Thanush231/cargarage",
      featured: true
    },
    {
      id: 3,
      title: "Real-Time Todo & Productivity Manager",
      category: "fullstack",
      icon: "fas fa-check-double",
      description: "Cloud-synchronized task management web app powered by Next.js 16, React 19, Firebase real-time database, and Zustand global state management for instant updates.",
      tags: ["Next.js 16", "React 19", "Firebase", "Zustand", "Tailwind"],
      github: "https://github.com/Thanush231/TodoManager",
      demo: "https://github.com/Thanush231/TodoManager",
      featured: true
    },
    {
      id: 4,
      title: "Gourmet Restaurant & Food Ordering App",
      category: "frontend",
      icon: "fas fa-utensils",
      description: "Culinary dining web platform featuring interactive digital menus, dietary categorization, table booking requests, and an intuitive customer ordering experience.",
      tags: ["Next.js 16", "React 19", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Thanush231/Restaurantwebsite",
      demo: "https://github.com/Thanush231/Restaurantwebsite",
      featured: true
    },
    {
      id: 5,
      title: "Student Task & Academic Workflow System",
      category: "fullstack",
      icon: "fas fa-graduation-cap",
      description: "Academic task manager and student workflow management portal featuring decoupled frontend & backend REST APIs, deployed on Vercel.",
      tags: ["Node.js", "Express", "JavaScript", "REST API", "Vercel"],
      github: "https://github.com/Thanush231/Student-task",
      demo: "https://github.com/Thanush231/Student-task",
      featured: true
    },
    {
      id: 6,
      title: "Pet Adoption & Animal Care Portal",
      category: "fullstack",
      icon: "fas fa-paw",
      description: "Full-stack pet rescue and adoption portal connecting shelters with adopters. Features pet profiles, medical history tracking, and adoption request forms.",
      tags: ["React", "Node.js", "Express", "JavaScript"],
      github: "https://github.com/Thanush231/Pet-website",
      demo: "https://github.com/Thanush231/Pet-website",
      featured: true
    },
    {
      id: 7,
      title: "Personal Developer Portfolio (FUTURE_FS_01)",
      category: "frontend",
      icon: "fas fa-laptop-code",
      description: "Futuristic developer portfolio built for Future Interns Full-Stack Internship (Task 01). Features interactive constellation particles, dark/light mode, and glassmorphism UI.",
      tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Canvas API", "Glassmorphism"],
      github: "https://github.com/Thanush231/FUTURE_FS_01",
      demo: "https://github.com/Thanush231/FUTURE_FS_01",
      featured: true
    }
  ],

  experience: [
    {
      period: "2026 - Present",
      role: "Full Stack Web Development Intern",
      organization: "Future Interns",
      description: "Completing full stack web development tasks (Task 01: FUTURE_FS_01), engineering responsive web applications, and implementing frontend and backend integrations.",
      badge: "Internship"
    },
    {
      period: "2023 - 2028 (Expected)",
      role: "B.E. in Computer Science & Engineering",
      organization: "Sahyadri College of Engineering & Management, Mangaluru",
      description: "Academic CGPA: 9.63 (through 5th Semester). Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Web Technologies.",
      badge: "Education"
    },
    {
      period: "Ongoing",
      role: "Founder & Instructor",
      organization: "Aikya Music Classes",
      description: "Teaching music to 18 students weekly, developing structured curriculum plans, and demonstrating strong leadership and communication skills outside the classroom.",
      badge: "Leadership"
    }
  ],

  certifications: [
    {
      title: "Full-Stack Web Development",
      issuer: "Professional Certification"
    },
    {
      title: "MongoDB Basics",
      issuer: "MongoDB University"
    }
  ]
};
