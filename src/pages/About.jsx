import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <h1>About Me</h1>

      <p className="about-desc">
        I am Sandeep Paswan, an MCA student passionate about Software Development,
        Cybersecurity, and Data Analysis. I enjoy building real-world applications
        and solving complex problems using modern technologies.
      </p>

      {/* SKILLS */}
      <div className="section">
        <h2>Skills</h2>

        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>SQL</span>
          <span>C#</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Wireshark</span>
          <span>Nmap</span>
          <span>Metasploit</span>
          <span>Git & GitHub</span>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>MCA (2024 – Present)</h3>
          <p>Thakur Institute, Mumbai</p>
        </div>

        <div className="education-card">
          <h3>BCA (2019 – 2022)</h3>
          <p>K.P.B. Hinduja College, Mumbai</p>
        </div>
      </div>

      {/* EXPERIENCE / FOCUS */}
      <div className="section">
        <h2>Current Focus</h2>

        <ul className="focus">
          <li>Building Full-Stack Web Applications (React + Supabase)</li>
          <li>Learning Cybersecurity & Ethical Hacking</li>
          <li>Developing Real-world Projects</li>
          <li>Preparing for Software Development Jobs</li>
        </ul>
      </div>

      {/* RESUME BUTTON */}
      <div className="resume">
        <a href="resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

    </section>
  );
}

export default About;