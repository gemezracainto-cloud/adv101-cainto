export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">

        {/* ABOUT CONTENT */}
        <div className="about-info">

          <div className="small-title">
            <span></span>
            ABOUT ME
          </div>

          <h1>
            I'M <strong>GEM EZRA.</strong>
            <br />
            <em>WEB DESIGNER</em>
          </h1>

          <p className="about-description">
            I'm a student and aspiring web designer and developer
            passionate about creating clean, creative, and
            user-friendly digital experiences.
          </p>

          <p className="about-description second">
            I enjoy exploring new technologies, designing websites,
            and turning creative ideas into meaningful projects.
          </p>

          <div className="about-details">
            <div>
              <span>01</span>
              <p>Web Design</p>
            </div>

            <div>
              <span>02</span>
              <p>Development</p>
            </div>

            <div>
              <span>03</span>
              <p>Creative Work</p>
            </div>
          </div>

          <a href="/portfolio" className="about-button">
            VIEW MY WORK
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}