import pic2 from "../assets/rd.png"; 
import pic3 from "../assets/dm.png"; 
import pic4 from "../assets/gd.png"; 





function Projects() {
  return (
    <section className="section">
      <h2 className="accent">Projects</h2>

      <div className="grid">

        <div className="card hover-lift">
                  <img src={pic2} 
                  alt="profile" 
                  className="card-img"
                  />


          <h3>React . Js Web Development</h3>
          <p>React + Node + MySQL full stack application.</p>

          <div className="card-buttons">
            <a href="#" className="btn">Live Demo</a>
            <a href="#" className="btn secondary">Source Code</a>
          </div>
        </div>

        <div className="card hover-lift">
          <img src={pic3} 
                  alt="profile" 
                  className="card-img"
                  />

          <h3>Digital Marketing</h3>
          <p>Modern responsive developer portfolio.</p>

          <div className="card-buttons">
            <a href="#" className="btn">Live Demo</a>
            <a href="#" className="btn secondary">Source Code</a>
          </div>
        </div>

        <div className="card hover-lift">
          <img src={pic4} 
                  alt="profile" 
                  className="card-img"
                  />

          <h3>Graphics Designing</h3>
          <p>Admin dashboard with analytics and charts.</p>

          <div className="card-buttons">
            <a href="#" className="btn">Live Demo</a>
            <a href="#" className="btn secondary">Source Code</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;