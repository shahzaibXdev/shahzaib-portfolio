
import pic2 from "../assets/7.jpg"; 

function About() {
  return (
    <section className="section">
      <h2 className="accent">About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE IMAGE */}
        <div className="about-image">
          <img src={pic2} alt="profile" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">

          <p>
    I am a passionate React Frontend Developer who builds modern,
    responsive, and user-focused web interfaces. My goal is to create
    clean, professional designs that not only look great but also
    provide smooth user experiences across all devices, leveraging AI
    tools to streamline development and enhance functionality.
</p>

<p>
    Alongside development, I work in graphic design and digital
    marketing. This combination allows me to build websites that are
    visually attractive, brand-focused, and optimized for real-world
    business growth, incorporating AI-powered insights for smarter
    design and strategy.
</p>

<p>
    I enjoy transforming ideas into elegant digital products and helping
    clients establish a strong online presence with premium-quality
    design and performance, using AI tools to improve efficiency and
    innovation throughout the process.
</p>

          
<a
  href="https://wa.me/923124718598?text=Hello%20Shahzaib%2C%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer"
  className="btn whatsapp-btn"
>
  💬 Chat on WhatsApp
</a>

        </div>
      </div>
    </section>
  );
}

export default About;