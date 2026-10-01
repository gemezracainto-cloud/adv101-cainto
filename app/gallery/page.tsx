export default function Gallery() {
  return (
    <main className="gallery-page">

      {/* HERO */}
      <section className="gallery-hero">
        <div>
          <p className="gallery-label">MY GALLERY</p>

          <h1>
            MY <span>GALLERY.</span>
          </h1>

          <p className="gallery-intro">
            A collection of my creative work, designs, projects,
            and other things I have created and enjoyed.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-grid">

        <div className="gallery-card">
          <div className="gallery-card-content">
            <h2>WEB DESIGN</h2>
            <p>
              Creative website designs and layouts
              created using modern design ideas.
            </p>
          </div>

          <div className="gallery-arrow">→</div>
        </div>

        <div className="gallery-card">
          <div className="gallery-card-content">
            <h2>CREATIVE WORK</h2>
            <p>
              Personal creative projects and designs
              that showcase my ideas.
            </p>
          </div>

          <div className="gallery-arrow">→</div>
        </div>

        <div className="gallery-card">
          <div className="gallery-card-content">
            <h2>PROJECTS</h2>
            <p>
              School and personal projects that helped
              me improve my skills.
            </p>
          </div>

          <div className="gallery-arrow">→</div>
        </div>

        <div className="gallery-card">
          <div className="gallery-card-content">
            <h2>DESIGN IDEAS</h2>
            <p>
              Different concepts, layouts, and ideas
              that inspired my work.
            </p>
          </div>

          <div className="gallery-arrow">→</div>
        </div>

      </section>

      {/* BOTTOM */}
      <section className="gallery-bottom">
        <p>CREATIVE • DESIGN • DEVELOPMENT</p>

        <h2>
          MORE TO <span>COME.</span>
        </h2>
      </section>

    </main>
  );
}
