import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Bradley Nguyen</h1>
        <h2>Software & Cybersecurity Engineer</h2>
        <p>I build secure, cloud-connected applications using Python, React, AWS, and Firebase.</p>
        <div className="hero-links">
          <a href="https://github.com/bradnificent7" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/bradley-nguyen-27b51a1b6" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:Bradley19Nguyen98@gmail.com">Contact Me</a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a Software & Cybersecurity Engineer based in Atlanta, GA with a B.S. in 
            Information Technology & Software Development from Georgia Gwinnett College. 
            I build secure, cloud-connected applications and have real-world experience 
            on a NASA-affiliated project and a deployed full-stack film application.
          </p>
          <p>
            I'm passionate about the intersection of software development and cybersecurity — 
            building things that work and are secure from the ground up. Currently completing 
            the Google Cybersecurity Certificate and seeking junior roles in software 
            development, cybersecurity, or DevSecOps.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-group">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Firebase</span>
              <span>ChakraUI</span>
              <span>Plotly Dash</span>
              <span>Spring</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Cloud & DevOps</h3>
            <div className="skill-tags">
              <span>AWS</span>
              <span>Docker</span>
              <span>Git</span>
              <span>CI/CD</span>
              <span>Pytest</span>
              <span>JUnit</span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Cybersecurity</h3>
            <div className="skill-tags">
              <span>Kali Linux</span>
              <span>Wireshark</span>
              <span>SSH</span>
              <span>Firewalls</span>
              <span>TCP/IP</span>
              <span>Packet Tracer</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>NASA Artemis Mission – SAUCE 2.0</h3>
            <p>Real-time surface anomaly detection dashboard built with Python and Dash for rover sensors powered by Raspberry Pi. Served as Data Modeler and Testing Lead.</p>
            <div className="tags">
              <span>Python</span>
              <span>Dash</span>
              <span>Raspberry Pi</span>
              <span>Pytest</span>
            </div>
            <a href="https://github.com/bradnificent7/Artemis" target="_blank" rel="noreferrer">View Project →</a>
          </div>
          <div className="project-card">
            <h3>FlickerLog – Film Discovery App</h3>
            <p>Full-stack film discovery and social watchlist app with user authentication, TMDB API integration, friends list, and 96+ commits of real development work.</p>
            <div className="tags">
              <span>Next.js</span>
              <span>Firebase</span>
              <span>ChakraUI</span>
              <span>TMDB API</span>
            </div>
            <a href="https://flicklog-980df.web.app/" target="_blank" rel="noreferrer">Live App →</a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>I'm currently open to junior roles in software development, cybersecurity, and DevSecOps. Let's connect!</p>
        <div className="contact-links">
          <a href="mailto:Bradley19Nguyen98@gmail.com">Email Me</a>
          <a href="https://github.com/bradnificent7" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/bradley-nguyen-27b51a1b6" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

export default App;