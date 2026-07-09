import React, { useState } from 'react';

const PORTFOLIO_DATA = {
    name: "Suraj Karande",
    role: "Java Full Stack Developer",
    location: "Pune, Maharashtra, India",
    email: "surajdkarande6396@gmail.com",
    github: "https://github.com/SurajKarande01",
    linkedin: "https://www.linkedin.com/in/surajk0001/",
    resumeUrl: "/Resume_Suraj_Karande.pdf",
    about: "I am a Java Full-Stack Developer who loves building secure, clean, and highly efficient web applications. I focus on backend engineering with Java, Spring Boot, Spring Security, and Hibernate, and integrate them with responsive React.js frontends. I have experience writing secure RESTful APIs (JWT/OAuth2), designing database schemas in MySQL/PostgreSQL, and containerizing setups with Docker. I enjoy writing clean, maintainable code and solving real-world development challenges.",
    skills: [
        { name: "Java 17", cat: "backend", level: "90%" },
        { name: "Spring Boot", cat: "backend", level: "85%" },
        { name: "Spring Security & JWT", cat: "backend", level: "80%" },
        { name: "MySQL & JPA ORM", cat: "backend", level: "85%" },
        { name: "REST APIs & Microservices", cat: "backend", level: "90%" },
        { name: "React.js", cat: "frontend", level: "80%" },
        { name: "JavaScript (ES6+)", cat: "frontend", level: "85%" },
        { name: "Tailwind CSS", cat: "frontend", level: "90%" },
        { name: "Docker", cat: "devops", level: "70%" },
        { name: "Git / Version Control", cat: "devops", level: "90%" },
        { name: "Postman & Swagger UI", cat: "devops", level: "90%" },
        { name: "Maven", cat: "devops", level: "85%" }
    ],
    projects: [
        {
            name: "AuthApp — Authentication System",
            github: "https://github.com/SurajKarande01/Auth_App",
            desc: "A secure, stateless authentication system built with Java and Spring Boot Security. I implemented secure JWT access/refresh token rotation and social login integrations (Google and GitHub OAuth2). I also built an admin dashboard in React.js to track active sessions, manage roles, and handle user permissions. The application is containerized using Docker for easy setup and configuration.",
            stack: ["Java", "Spring Boot", "Spring Security", "React", "Docker"]
        },
        {
            name: "Feasto — E-Commerce Platform",
            github: "https://github.com/SurajKarande01/feasto",
            desc: "An e-commerce platform designed using a microservices architecture with 9 independent services running on Spring Boot. It handles real-time driver tracking and route calculations using Leaflet.js maps, and manages live order status updates via WebSockets. I set up service discovery, API routing, and central configurations using Spring Cloud tools.",
            stack: ["Java", "Spring Boot", "Microservices", "React", "WebSockets"]
        },
        {
            name: "SAMS Track — Attendance Portal",
            github: "https://github.com/SurajKarande01/SAMS-track",
            desc: "An attendance management portal developed for colleges, supporting roles for students, teachers, and administrators. I built the REST APIs with Spring Boot, managed database relations via Hibernate and JPA, and optimized the MySQL queries to ensure fast responses. The administrative control panels are built in React and secured using JWT token auth.",
            stack: ["Java", "Spring Boot", "React", "JWT Security"]
        },
        {
            name: "Store Rating & Reviews Platform",
            github: "https://github.com/SurajKarande01/Store-Rating-Model",
            desc: "A rating and review aggregator model built using Spring Boot REST APIs and React.js. It features a backend moderation workflow to verify and audit review submissions before publishing. I used Zustand for lightweight and fast state management on the client side, and optimized the SQL aggregation queries to load ratings quickly.",
            stack: ["Spring Boot", "React", "Zustand", "Tailwind CSS"]
        },
        {
            name: "ProTaskify — Task Management System",
            github: "https://github.com/SurajKarande01/ProTaskify",
            desc: "A task management system I developed using Java 17 and Spring Boot on the backend, with MySQL for data persistence and JWT for securing user sessions. It helps organize tasks with priorities, status tracking, and deadlines in a structured dashboard.",
            stack: ["Java", "Spring Boot", "MySQL", "JWT Security"]
        },
        {
            name: "Study_Mate — Student-Tutor Platform",
            github: "https://github.com/SurajKarande01/Study_Mate",
            desc: "A collaborative learning platform that connects students with tutors. Built using Java and Spring Boot, it features role-based access control, scheduling tools for study sessions, and a secure environment for messaging and sharing study resources.",
            stack: ["Java", "Spring Boot", "MySQL", "Hibernate"]
        },
        {
            name: "chat-app — Real-Time Chat System",
            github: "https://github.com/SurajKarande01/chat-app",
            desc: "A full-stack, real-time messaging application with a Spring Boot backend and a React.js frontend. It features instant chat updates, active user lists, and clean message logs to support seamless user interactions.",
            stack: ["React", "Spring Boot", "WebSockets", "CSS"]
        },
        {
            name: "Plant Disease Detection",
            github: "https://github.com/SurajKarande01/plant_disease_detection",
            desc: "A plant leaf disease classifier built with Python and TensorFlow. I trained a Convolutional Neural Network (CNN) model to achieve 95% accuracy in identifying plant health issues from leaf images, helping automate crop diagnostics.",
            stack: ["Python", "TensorFlow", "CNN", "Keras"]
        }
    ],
    journey: [
        {
            dur: "Jun – Nov 2025",
            role: "Java Full Stack Trainee",
            org: "Java By Kiran, Pune",
            desc: "Completed hands-on training focused on Java web development. I built full-stack capstone projects, designed REST APIs with Spring Boot, worked with Hibernate/MySQL databases, and practiced writing clean code."
        },
        {
            dur: "August 2021 – March 2025",
            role: "B.Tech in Computer Science & Tech",
            org: "Department of Technology, Shivaji University, Kolhapur (6.85/10 CGPA)",
            desc: "Studied Computer Science, learning core concepts like Data Structures, OOPs, DBMS, Operating Systems, and Software Engineering. For my final year project, I built a CNN model using TensorFlow for crop disease detection."
        },
        {
            dur: "March 2021",
            role: "Higher Secondary Certificate",
            org: "Ligade Patil Jr College of Science, Karad (86.67%)",
            desc: "Completed my higher secondary education with a focus on Physics, Chemistry, and Mathematics (PCM). These studies built my analytical skills and logical reasoning, which helped me transition naturally into computer science."
        },  {
            dur: "March 2019",
            role: "Secondary School Certificate",
            org: "Balwadi Highschool, Balwadi (82.80%)",
            desc: "Completed secondary school education with high academic standing, focusing on science and mathematics, which sparked my initial interest in technology and software development."
        }
    ],
    certifications: [
        { name: "Online Java Certification Course", org: "IntelliPaat Academy", desc: "Course covering Java fundamentals, multi-threading, collections framework, and database connectivity with JDBC." },
        { name: "HTML5 - The Language Course", org: "Infosys Springboard", desc: "Learned semantic HTML, modern styling techniques with CSS, and building responsive, accessible page layouts." },
        { name: "YUVAAI For All", org: "TCSiON (offered by IndiaAI)", desc: "Introductory program on basic neural networks, machine learning processes, and AI applications." },
        { name: "Introduction to Large Language Models", org: "Google Cloud", desc: "Course on Large Language Models, covering generative AI concepts and basic prompt patterns." },
        { name: "Use Generative AI for Software Development", org: "IBM SkillsBuild", desc: "Learned to use AI coding assistants and prompts for writing code and prototyping APIs." }
    ]
};

function App() {
    const [activeTab, setActiveTab] = useState('profile');
    const [expertiseLayout, setExpertiseLayout] = useState('bubble');
    const [terminalFolder, setTerminalFolder] = useState('backend');
    const [expandedCategory, setExpandedCategory] = useState('backend');
    const [activeDeckCard, setActiveDeckCard] = useState('backend');
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    // const [submitting, setSubmitting] = useState(false); // Commented out for future use
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    /* Commented out contact submission code for future activation
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        formData.append("_captcha", "false"); // Disables captcha for cleaner AJAX experience

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.email}`, {
                method: "POST",
                body: formData // Bypasses JSON preflight CORS check
            });
            if (response.ok) {
                setFormSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (err) {
            alert("Error sending message. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };
    */


    return (
        <div className="portfolio-wrapper">
            {/* Main Panel */}
            <div className="portfolio-panel">
                {/* Navigation Top Tabs */}
                <header className="portfolio-header">
                    <div className="logo-brand">Suraj Karande</div>
                    <nav className="tab-nav">
                        {['profile', 'expertise', 'projects', 'journey', 'contact'].map(tab => (
                            <button 
                                key={tab} 
                                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </nav>
                </header>

                {/* Interactive Tab Content */}
                <div className="portfolio-body">
                    {activeTab === 'profile' && (
                        <div className="profile-tab tab-fade-in">
                            <div className="profile-grid">
                                <div className="portrait-side">
                                    <div className="image-frame">
                                        <img 
                                            src="/Sk.jpeg" 
                                            alt="Suraj Karande" 
                                            className="portrait"
                                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' }}
                                        />
                                    </div>
                                </div>
                                <div className="text-side">
                                    <span className="welcome-tag">Welcome to my space</span>
                                    <h2>Hi, I'm <span className="text-gradient">{PORTFOLIO_DATA.name}</span></h2>
                                    <h3>{PORTFOLIO_DATA.role}</h3>
                                    <p className="about-text">{PORTFOLIO_DATA.about}</p>

                                    {/* Keyword Competencies Grid for Recruiters */}
                                    <div className="competencies-grid">
                                        <div className="comp-item">
                                            <i className="fa-solid fa-gears comp-icon"></i>
                                            <div>
                                                <h4>Backend Architecture & Security</h4>
                                                <p>Java 17+, Spring Boot, Microservices, Spring Security, JWT, RESTful API Design, Hibernate/JPA, Maven</p>
                                            </div>
                                        </div>
                                        <div className="comp-item">
                                            <i className="fa-solid fa-laptop-code comp-icon"></i>
                                            <div>
                                                <h4>Frontend UI & Client State</h4>
                                                <p>React.js, Javascript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Web Design, Single Page Application Integration</p>
                                            </div>
                                        </div>
                                        <div className="comp-item">
                                            <i className="fa-solid fa-server comp-icon"></i>
                                            <div>
                                                <h4>Databases & DevOps Tools</h4>
                                                <p>MySQL, PostgreSQL, Docker Containerization, Git Version Control, Postman, REST Endpoints Testing</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mini-details">
                                        <div className="detail-item"><i className="fa-solid fa-location-dot"></i> {PORTFOLIO_DATA.location}</div>
                                        <div className="detail-item clickable" onClick={handleCopyEmail} title="Click to copy email">
                                            <i className="fa-regular fa-envelope"></i> 
                                            <span>{PORTFOLIO_DATA.email}</span>
                                            <i className={`fa-solid ${copied ? 'fa-check text-success' : 'fa-copy copy-icon'}`}></i>
                                        </div>
                                    </div>

                                    <div className="action-row">
                                        <a href={PORTFOLIO_DATA.resumeUrl} target="_blank" className="action-btn primary-btn" rel="noreferrer">
                                            <i className="fa-solid fa-file-pdf"></i> View Resume
                                        </a>
                                        <div className="social-links-row">
                                            <a href={PORTFOLIO_DATA.github} target="_blank" className="social-icon" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                            <a href={PORTFOLIO_DATA.linkedin} target="_blank" className="social-icon" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'expertise' && (
                        <div className="expertise-tab tab-fade-in">
                            <h2 className="tab-title">Technical Expertise</h2>
                            <div className="skills-detail-layout">
                                {[
                                    { cat: 'backend', icon: 'fa-solid fa-server', title: 'Backend & Data Layer', desc: 'Java enterprise services, database persistence, and secure API orchestration.' },
                                    { cat: 'frontend', icon: 'fa-solid fa-laptop-code', title: 'Frontend & UI Layer', desc: 'Interactive client-side rendering with modern JavaScript frameworks.' },
                                    { cat: 'devops', icon: 'fa-solid fa-gears', title: 'DevOps & Tooling', desc: 'Container builds, version control, and endpoint validation pipelines.' }
                                ].map(col => (
                                    <div className="detail-column-card" key={col.cat}>
                                        <div className="detail-card-header">
                                            <div className="detail-icon-box">
                                                <i className={col.icon}></i>
                                            </div>
                                            <div>
                                                <h4>{col.title}</h4>
                                                <p>{col.desc}</p>
                                            </div>
                                        </div>
                                        <div className="detail-skills-list">
                                            {PORTFOLIO_DATA.skills.filter(s => s.cat === col.cat).map((skill, sIdx) => (
                                                <div className="detail-skill-row" key={sIdx}>
                                                    <i className="fa-solid fa-chevron-right"></i>
                                                    <span>{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}


                    {activeTab === 'projects' && (
                        <div className="projects-tab tab-fade-in">
                            <h2 className="tab-title">Featured Work</h2>
                            <div className="projects-grid">
                                {PORTFOLIO_DATA.projects.map((proj, idx) => (
                                    <div className="project-card" key={idx}>
                                        <div className="card-top">
                                            <h4>{proj.name}</h4>
                                            <a href={proj.github} target="_blank" className="proj-git" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                                        </div>
                                        <p className="proj-desc">{proj.desc}</p>
                                        <div className="proj-stack-tags">
                                            {proj.stack.map(tag => <span key={tag} className="stack-tag">{tag}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'journey' && (
                        <div className="journey-tab tab-fade-in">
                            <h2 className="tab-title">Academic & Professional Journey</h2>
                            <div className="timeline-container">
                                {PORTFOLIO_DATA.journey.map((block, idx) => (
                                    <div className="timeline-card" key={idx}>
                                        <div className="card-header-tl">
                                            <span className="tl-date">{block.dur}</span>
                                            <h4>{block.role}</h4>
                                        </div>
                                        <h5 className="tl-org">{block.org}</h5>
                                        <p className="tl-desc">{block.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="tl-cert-title">Certifications</h3>
                            <div className="certifications-row">
                                {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                                    <div className="certification-card" key={idx}>
                                        <i className="fa-solid fa-award"></i>
                                        <div>
                                            <p className="c-name">{cert.name}</p>
                                            <p className="c-org">{cert.org}</p>
                                            {cert.desc && <p className="c-desc">{cert.desc}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="contact-tab tab-fade-in">
                            <h2 className="tab-title">Inquiries & Correspondence</h2>
                            <div className="contact-layout">
                                <div className="contact-pitch">
                                    <p className="lead">Interested in working together or hiring me?</p>
                                    <p>I am actively seeking Java Full Stack Developer, Software Engineer, or Associate Developer positions.</p>
                                    <div className="contact-info-card">
                                        <i className="fa-regular fa-envelope"></i>
                                        <div>
                                            <span>Direct Email Address</span>
                                            <a href={`mailto:${PORTFOLIO_DATA.email}`}>{PORTFOLIO_DATA.email}</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Commented out for future activation:
                                <div className="contact-form-container">
                                    {!formSubmitted ? (
                                        <form className="contact-form">
                                            <input type="text" placeholder="Your Name" required />
                                            <input type="email" placeholder="Your Email" required />
                                            <textarea placeholder="Your Message" rows="4" required></textarea>
                                            <button type="submit" className="action-btn primary-btn btn-submit" disabled={false}>
                                                Submit Message
                                            </button>
                                        </form>
                                    ) : (
                                        <div className="form-success-alert">
                                            <i className="fa-solid fa-circle-check"></i>
                                            <h4>Form Submitted Successfully</h4>
                                            <p>Thank you for reaching out. I'll reply to your email soon.</p>
                                        </div>
                                    )}
                                </div>
                                */}
                            </div>
                        </div>
                    )}
                </div>
                
                {/* Footer Section */}
                <footer className="portfolio-footer">
                    <p className="motivation-quote">
                        "Every great developer you know got there by solving problems they were unqualified to solve."
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default App;
export { App };
