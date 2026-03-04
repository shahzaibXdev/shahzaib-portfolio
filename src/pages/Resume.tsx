function Resume() {
  return (
    <section className="section">
      <h2 className="accent">My Resume</h2>

      <div className="resume-grid">

        {/* Education */}
        <div className="resume-card hover-lift">
          <h3>🎓 Education</h3>
          <p>BS Computer Science</p>
          <p>Government Islamia College, Civil Lines, Lahore</p>
          <p>2021 — 2025</p>
        </div>

        {/* Skills */}
        <div className="resume-card hover-lift">
          <h3>💻 Skills</h3>
          <ul>
            <li>React.js + TypeScript</li><br />
            <li>Front-End Specialist</li> <br />
            <li>Node.js</li><br />
            <li>Graphics Designing</li><br />
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="resume-card hover-lift">
  <h3>🚀 Experience</h3>

  <p>Freelance Web Developer</p>
  <p>Built responsive web apps for clients using React, focusing on modern UI/UX and performance optimization.</p>
  <p>Designed graphics and visual assets for websites, social media, and branding campaigns.</p>
  <p>Implemented digital marketing strategies, including SEO, social media promotion, and content optimization.</p>
  <p>2023 — Present</p>
</div>

        {/* Download CV */}
        <div className="resume-card hover-lift center">
          <h3>📄 Full CV</h3>
          <p>Download my complete resume</p>

          <a href="/SHAHZAIB CV.pdf" download className="btn">
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default Resume;