export default function Portfolio() {
  return (
    <main className="portfolio-page">

      <section className="portfolio-hero">

        <div>
          <p className="portfolio-label">
            MY PORTFOLIO
          </p>

          <h1>
            MY
            <br />
            <span>WORK.</span>
          </h1>

          <p className="portfolio-intro">
            A collection of my projects, designs, and creative
            work that I've created while learning web development.
          </p>
        </div>

      </section>

      <section className="portfolio-showcase">

        <div className="showcase-image">
          <img
            src="c13624ed-7ef9-4f2c-b8ea-1b8192f3094b.jpg"
            alt="My portfolio project"
          />
        </div>

        <div className="showcase-info">

          <p>FEATURED PROJECT</p>

          <h2>
            Personal
            <br />
            Website
          </h2>

          <span>
            HTML • CSS • JAVASCRIPT
          </span>

          <p className="showcase-description">
            A personal website designed to showcase my skills,
            projects, creativity, and experience as a student
            and aspiring web designer.
          </p>

        </div>

      </section>


      <section className="portfolio-bottom">

        <p>
          INTERESTED IN WORKING TOGETHER?
        </p>

        <h2>
          LET'S CREATE
          <span> SOMETHING.</span>
        </h2>

      </section>

    </main>
  );
}
