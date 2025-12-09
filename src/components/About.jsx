import profileImg from '../assets/image.png';
import '../css/about.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <img className="about-profile-image" src={profileImg} alt="Dravin Gupta" />
                        <h1>About Me</h1>
                        <div className="content-text">
                            <h2>Building Digital Solutions</h2>
                            <h2>with the MERN Stack</h2>
                            <p className="about-subtitle">
                                A Full-Stack Web Developer passionate about creating scalable backend systems,
                                intuitive UI/UX, and modern web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section>
                <div className="container">
                    <div className="bio-content">
                        <h2>Hey, I'm Dravin Gupta 👋</h2>
                        <p>
                            A passionate and driven <strong>MERN Stack Developer</strong> and a B.Tech CSE student at
                            <strong> Guru Nanak Dev University, Amritsar</strong> (3rd Semester). I love turning ideas into
                            real, working products and building projects that actually solve problems.
                        </p>
                        <p>
                            I specialize in full-stack web development using the MERN ecosystem, and I enjoy creating clean,
                            scalable, and user-centric applications. Whether it's designing intuitive UIs or building efficient
                            backend APIs, I like working across both ends of development.
                        </p>
                        <p>
                            Beyond coding, I'm deeply interested in <strong>finance and stock markets</strong>, which helps me
                            understand real-world systems and build products with a practical mindset.
                        </p>
                        <p>
                            When I'm not coding, you'll probably find me debating, exploring new tech, or reading about markets.
                        </p>
                        <p className="bio-closing">
                            I'm constantly learning, building, and leveling up — aiming to grow into a versatile full-stack
                            engineer who can craft impactful digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-stack">
                <div className="container">
                    <h2>Tech Stack</h2>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <h3>Frontend</h3>
                            <p>React, Vite, Context API, React Router</p>
                        </div>
                        <div className="tech-item">
                            <h3>Backend</h3>
                            <p>Node.js, Express, RESTful APIs</p>
                        </div>
                        <div className="tech-item">
                            <h3>Database</h3>
                            <p>MongoDB, Mongoose</p>
                        </div>
                        <div className="tech-item">
                            <h3>Tools & Services</h3>
                            <p>Firebase Auth, Cloudinary, JWT, Git</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Highlight Section */}
            <section className="projects-highlight">
                <div className="container">
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">

                        {/* DigiQ */}
                        <div className="project-highlight-card">
                            <h3>DigiQ - Digital Queue Management</h3>
                            <p className="project-description">
                                A smart digital queue management system that eliminates physical waiting lines by providing
                                real-time digital queue tracking. Built to solve real-world problems with technology.
                            </p>
                            <div className="project-tech">
                                <span className="tech-badge">MERN Stack</span>
                                <span className="tech-badge">Real-time Tracking</span>
                            </div>
                        </div>

                        {/* Trading Journal */}
                        <div className="project-highlight-card">
                            <h3>Trading Journal App</h3>
                            <p className="project-description">
                                A fully authenticated analytics-powered trading journal built using the MERN stack with Firebase Auth.
                                Features auto-calculated metrics (PnL, risk/reward), analytics dashboard with win rate tracking,
                                equity curves, and per-strategy breakdowns.
                            </p>
                            <div className="project-tech">
                                <span className="tech-badge">MERN</span>
                                <span className="tech-badge">Firebase Auth</span>
                                <span className="tech-badge">Analytics</span>
                            </div>
                        </div>

                        {/* Anti Blog */}
                        <div className="project-highlight-card">
                            <h3>Anti Blog</h3>
                            <p className="project-description">
                                A modern blogging platform with rich text editor, cloud-based image storage via Cloudinary,
                                and JWT-based admin authentication. Deployed on Vercel (frontend) and Render (backend) with
                                optimized performance and CDN-powered image delivery.
                            </p>
                            <div className="project-tech">
                                <span className="tech-badge">React + Vite</span>
                                <span className="tech-badge">Cloudinary</span>
                                <span className="tech-badge">JWT Auth</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="achievements">
                <div className="container">
                    <h2>Achievements & Activities</h2>
                    <div className="achievements-grid">
                        <div className="achievement-card">
                            <div className="achievement-icon">🏆</div>
                            <h3>HackerWrath 2.0 Finalist</h3>
                            <p>Competed in a 30-hour national hackathon and reached the finals</p>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">🗳️</div>
                            <h3>Election Volunteer</h3>
                            <p>Volunteered in Lok Sabha Election Webcasting in Amritsar</p>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">🎯</div>
                            <h3>Organizing Committee</h3>
                            <p>Member at Spectra 1.0 - GNDU Tech Fest</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interests Section */}
            <section className="interests">
                <div className="container">
                    <h2>Beyond Code</h2>
                    <div className="interests-content">
                        <div className="interest-item">
                            <h3>📈 Finance & Stock Markets</h3>
                            <p>Deeply interested in understanding market dynamics and financial systems</p>
                        </div>
                        <div className="interest-item">
                            <h3>💬 Debating</h3>
                            <p>Love engaging in thoughtful discussions and debates</p>
                        </div>
                        <div className="interest-item">
                            <h3>🚀 Tech Exploration</h3>
                            <p>Always exploring new technologies and staying updated with industry trends</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <h2>Let's Connect!</h2>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
                    <a
                        href="https://www.linkedin.com/in/dravingupta"
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Connect With Me
                    </a>
                </div>
            </section>
        </div>
    );
}
