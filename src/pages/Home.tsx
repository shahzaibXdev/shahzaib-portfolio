import { ReactTyped } from "react-typed";
import pic1 from "../assets/6.jpeg"; 

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="section hero">

      <div className="hero-content">

        <div>
          <h1>Hi, I'm Shahzaib 👋</h1>

          <h2>
            I am a{" "}
            <span className="accent">
              <ReactTyped
                strings={[
                  "React Developer",
                  "Frontend Specialist",
                  "Digital Marketer",
                  "Graphics Designer"
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </h2>

          <p>
I build intelligent, high-performance web experiences using React and advanced AI tools, combining modern design, speed, and strategy to help businesses attract customers and grow online with confidence.          </p>

          <a
  href="https://final-project-cyan-eight.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  View Projects
</a>

          <a href="/SHAHZAIB CV.pdf" download className="btn secondary">
            Download CV
          </a>
        </div>

        <img src={pic1} alt="profile" />

      </div>

    </section>
  );
}

export default Home;