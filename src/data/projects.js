export const projects = [
  {
    id: 'auth-app',
    name: 'AuthApp — Authentication System',
    tagline: 'Secure token authentication and OAuth2',
    description:
      'An authentication system built with Java and Spring Security. I implemented secure JWT access/refresh token rotation and social login integrations with Google and GitHub. I also built a React.js dashboard to manage user sessions and permissions.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'React.js', 'Docker', 'JWT', 'OAuth2'],
    features: [
      'JWT token authentication with access and refresh rotation',
      'OAuth2 logins for Google and GitHub accounts',
      'React admin console to monitor active sessions and assign roles',
      'Docker configurations to set up the database and backend easily',
      'Granular role-based authorization rules (Admin, User, Auditor)',
    ],
    github: 'https://github.com/SurajKarande01/Auth_App',
    demo: '',
    tags: ['Java', 'Security', 'Full Stack', 'Spring Boot'],
    featured: true,
    detailPath: '/projects/auth-app',
    caseStudy: {
      overview: 'I built AuthApp to handle user logins securely using double tokens (access and refresh) and social accounts. It includes a dashboard where admins can see who is logged in and revoke sessions if needed.',
      problem: 'JWT authentication is clean, but standard setups make it hard to force log out a user before their token expires. Manually mapping social login profiles to custom application roles also gets messy.',
      solution: 'I created a token rotation workflow with Spring Security. The client gets a short-lived access token and a refresh token. I stored blacklisted tokens in a database to support immediate logout, and routed Google/GitHub profiles to a custom role mapper.',
      architecture: 'React (Zustand storage) → Spring Boot (Spring Security & JWT filters) → Hibernate JPA → MySQL database. Setup is run locally using Docker Compose.',
      challenges: 'When a client makes two quick requests at the same time, the refresh token might get used twice. I fixed this by adding a 5-second overlap window in the database check, allowing the old token if the new one was already issued.',
      learning: 'I learned how to configure custom Spring Security filter chains, set up CORS rules, write secure token decoders, and run services in Docker containers.',
    }
  },
  {
    id: 'feasto',
    name: 'Feasto — E-Commerce Platform',
    tagline: 'Microservices backend with real-time delivery tracking',
    description:
      'A food delivery and shopping app built with a microservices backend. It has 9 independent services running on Spring Boot. It uses Leaflet.js to show real-time driver tracking and WebSockets to stream order status updates to clients.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'React.js', 'WebSockets', 'Leaflet.js', 'Microservices'],
    features: [
      'Microservices architecture with 9 Spring Boot backend services',
      'Real-time driver location tracking on Leaflet.js maps',
      'Instant order status updates using WebSockets',
      'Service discovery and request routing using Spring Cloud tools',
      'Centralized application settings managed via a config server',
    ],
    github: 'https://github.com/SurajKarande01/feasto',
    demo: '',
    tags: ['Microservices', 'Spring Boot', 'WebSockets'],
    featured: true,
    detailPath: '/projects/feasto',
    caseStudy: {
      overview: 'Feasto is an e-commerce food delivery app divided into 9 microservices. It features driver location tracking and live websocket notifications as order statuses change.',
      problem: 'Monolithic delivery apps are hard to scale because order placement, mapping, and stock checks all share the same resources. Polling HTTP endpoints for order status changes also overloads the database.',
      solution: 'I divided the app into 9 Spring Boot services registered with a Eureka Discovery server. I set up an API Gateway to handle client requests, and used WebSockets to stream coordinates directly to Leaflet maps.',
      architecture: 'React UI client → Spring Cloud Gateway → Eureka Discovery → 9 microservices (MySQL/PostgreSQL databases) → WebSocket service.',
      challenges: 'Sharing database records and maintaining order histories across services was complex. I resolved this by using correlation IDs to track transactions across services, ensuring eventual consistency instead of locking databases.',
      learning: 'I learned how microservices communicate, how to configure routing and load balancing at the gateway, and how to set up WebSocket handshakes.',
    }
  },
  {
    id: 'sams-track',
    name: 'SAMS Track — Attendance Portal',
    tagline: 'College attendance portal with role access',
    description:
      'A web-based attendance tracker for colleges, supporting roles for students, teachers, and admins. I built the backend APIs in Spring Boot, mapped data relations in Hibernate, and optimized query speeds for fast report generation.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Hibernate', 'JWT Security'],
    features: [
      'Access portals for students, teachers, and administrators',
      'REST APIs built with Spring Boot and Hibernate JPA',
      'Optimized database indexes for fast query speeds',
      'JWT-secured React dashboard for compiling attendance sheets',
      'Attendance summaries displaying student presence logs',
    ],
    github: 'https://github.com/SurajKarande01/SAMS-track',
    demo: '',
    tags: ['Java', 'Spring Boot', 'React.js'],
    featured: true,
    detailPath: '/projects/sams-track',
    caseStudy: {
      overview: 'SAMS Track is an attendance tracking portal for colleges that replaces manual logbooks. It handles access controls for teachers and students, and generates attendance compliance reports.',
      problem: 'Paper attendance registries are slow to compile, hard to search, and easy to lose. Digital versions often load very slowly when generating monthly summaries across multiple classes.',
      solution: 'I created a database schema with indexes on student IDs and courses. I built a RESTful Spring Boot API to fetch compliance data, and connected it to a React client secured with JWTs.',
      architecture: 'React client → Spring Boot Rest API → Hibernate JPA → MySQL database.',
      challenges: 'Calculating overall presence percentages across thousands of records took too long. I resolved this by writing custom JPQL queries with specific JOIN fetches and course indexes, which reduced report load times by 75%.',
      learning: 'I learned about database query optimization, resolving lazy-loading issues in Hibernate, and handling multi-role router guards in React.',
    }
  },
  {
    id: 'store-rating',
    name: 'Store Rating & Reviews Platform',
    tagline: 'Feedback platform with admin moderation queue',
    description:
      'A store reviews platform where users can post ratings and comments. It features an admin queue to approve or reject reviews before publishing, Zustand for fast client state updates, and optimized SQL aggregation queries.',
    tech: ['Spring Boot', 'React.js', 'Zustand', 'Tailwind CSS', 'MySQL'],
    features: [
      'Admin dashboard to verify and approve review submissions',
      'Zustand for lightweight and fast state tracking on the client',
      'SQL query optimization for instant review averages',
      'Responsive feedback cards styled with Tailwind CSS',
      'Spam prevention mechanisms for review submission endpoints',
    ],
    github: 'https://github.com/SurajKarande01/Store-Rating-Model',
    demo: '',
    tags: ['Spring Boot', 'React.js', 'Zustand'],
    featured: true,
    detailPath: '/projects/store-rating',
    caseStudy: {
      overview: 'I built this rating platform to let users submit feedback. It includes a frontend client for posting reviews and a backend audit queue for administrators to moderate entries.',
      problem: 'Public review forums are frequently targeted by spam and multiple submissions. Running calculation queries to find average scores on every page load can also slow down the site.',
      solution: 'I built an audit state flow in Spring Boot to screen entries. I used Zustand on the frontend to manage reviews without heavy renders, and calculated averages in SQL with indexed tables.',
      architecture: 'React UI (Zustand state management) → Spring Boot REST API → Hibernate JPA → MySQL.',
      challenges: 'Recalculating averages under high write loads was locking up the database. I resolved this by indexing store IDs and creating scheduler tasks to update rating averages periodically, rather than recalculating on every single review read.',
      learning: 'I gained experience with client-side state management using Zustand, managing transaction isolation levels in databases, and designing admin queue flows.',
    }
  },
  {
    id: 'protaskify',
    name: 'ProTaskify — Task Management System',
    tagline: 'Structured dashboard for priority-based task tracking',
    description:
      'A task management system developed using Java 17 and Spring Boot on the backend, with MySQL for data persistence and JWT for securing user sessions. It helps organize tasks with priorities, status tracking, and deadlines in a structured dashboard.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'JWT Security'],
    features: [
      'Organizes tasks with priority levels, status updates, and deadlines',
      'Spring Boot backend and MySQL database storage',
      'Session security via JWT token verification',
    ],
    github: 'https://github.com/SurajKarande01/ProTaskify',
    demo: '',
    tags: ['Spring Boot', 'MySQL'],
    featured: false,
  },
  {
    id: 'study-mate',
    name: 'Study_Mate — Student-Tutor Platform',
    tagline: 'Collaborative academic platform with role-based access',
    description:
      'A collaborative learning platform that connects students with tutors. Built using Java and Spring Boot, it features role-based access control, scheduling tools for study sessions, and a secure environment for messaging and sharing study resources.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Hibernate'],
    features: [
      'Role-based access controls for student and tutor profiles',
      'Study session scheduling and calendar updates',
      'Secure resource sharing and private messaging portal',
    ],
    github: 'https://github.com/SurajKarande01/Study_Mate',
    demo: '',
    tags: ['Spring Boot', 'Hibernate'],
    featured: false,
  },
  {
    id: 'chat-app',
    name: 'chat-app — Real-Time Chat System',
    tagline: 'Instant messaging app with WebSocket updates',
    description:
      'A full-stack, real-time messaging application with a Spring Boot backend and a React.js frontend. It features instant chat updates, active user lists, and clean message logs to support seamless user interactions.',
    tech: ['React.js', 'Spring Boot', 'WebSockets', 'CSS'],
    features: [
      'Real-time communication using HTML5 WebSockets',
      'Visual indicators for active/online users',
      'Clean message histories and auto-scroll layouts',
    ],
    github: 'https://github.com/SurajKarande01/chat-app',
    demo: '',
    tags: ['React.js', 'WebSockets', 'Spring Boot'],
    featured: false,
  },
  {
    id: 'plant-disease',
    name: 'Plant Leaf Disease Detection',
    tagline: 'Crop disease diagnostics tool powered by CNN models',
    description:
      'A plant leaf disease classifier built with Python and TensorFlow. I trained a Convolutional Neural Network (CNN) model to achieve 95% accuracy in identifying plant health issues from leaf images, helping automate crop diagnostics.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Keras'],
    features: [
      'Convolutional Neural Network (CNN) trained with Keras/TensorFlow',
      'Achieved 95% validation accuracy in classifying leaf diseases',
      'Supports automatic diagnostics from user uploaded leaf images',
    ],
    github: 'https://github.com/SurajKarande01/plant_disease_detection',
    demo: '',
    tags: ['Python', 'Machine Learning'],
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
