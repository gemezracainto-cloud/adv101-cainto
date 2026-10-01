import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">


      <section className="home-hero">

        <div className="home-content">

          <p className="home-label">
            WELCOME TO MY WEBSITE
          </p>

          <h1>
            I'M GEM
            <br />
            <span>EZRA.</span>
          </h1>

          <h2>
            WEB DESIGNER & DEVELOPER
          </h2>

          <p className="home-description">
            I'm a student and aspiring web designer and developer
            who enjoys creating clean, modern, and user-friendly
            digital experiences.
          </p>

          <div className="home-buttons">

            <a
              href="/portfolio"
              className="home-button"
            >
              VIEW MY WORK
              <span>→</span>
            </a>

            <a
              href="/about"
              className="home-button secondary"
            >
              ABOUT ME
            </a>

          </div>

        </div>

      </section>


      <section className="home-intro">

        <p>
          WHAT I DO
        </p>

        <h2>
          I CREATE
          <span> DIGITAL EXPERIENCES.</span>
        </h2>

        <div className="home-services">

          <div>
            <h3>WEB DESIGN</h3>
            <p>
              Creating clean and modern layouts
              that are simple and easy to use.
            </p>
          </div>

          <div>
            <h3>DEVELOPMENT</h3>
            <p>
              Building responsive websites using
              modern web technologies.
            </p>
          </div>

          <div>
            <h3>CREATIVE DESIGN</h3>
            <p>
              Combining creativity and technology
              to create unique digital projects.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
