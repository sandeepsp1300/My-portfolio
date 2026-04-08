import "../styles/Home.css";

function Home() {
  return (
    <section className="home">

      {/* LEFT CONTENT */}
      <div className="home-left">
        <h3 className="intro">Hello, I'm</h3>

        <h1 className="name">Sandeep Paswan</h1>

        <h2 className="role">
          React Developer | Cybersecurity Enthusiast
        </h2>

        <p className="desc">
          I build modern, scalable web applications and explore ethical hacking 
          & digital forensics. Passionate about solving real-world problems 
          using technology.
        </p>

        <div className="buttons">
          <a href="/projects">
            <button className="primary">View Projects</button>
          </a>

          <a href="/contact">
            <button className="secondary">Hire Me</button>
          </a>
        </div>

        {/* Social Links */}
        <div className="socials">
          <a href="https://github.com/sandeepsp1300" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/sandeep-paswan-aa7349222/" target="_blank">LinkedIn</a>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="home-right">
        <div className="circle"></div>
        <div className="card">
          <h3>🚀 Current Focus</h3>
          <p>React + Cybersecurity + Real Projects</p>

          <h3>📚 Learning</h3>
          <p>Ethical Hacking | Digital Forensics</p>
        </div>
      </div>

    </section>
  );
}

export default Home;