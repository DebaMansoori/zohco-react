import Counter from "./Counter.jsx";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-left reveal">
          <p className="eyebrow">
            <span className="dot"></span>ABOUT MORE
          </p>
          <div className="about-stat">
            <p>
              $100M+ Investment Has
              <br />
              Been Collected From All Over The World.
            </p>
            <Counter value={4560} suffix="M+" className="big-counter" />
          </div>
        </div>
        <div className="about-right reveal">
          <p className="eyebrow eyebrow-mobile">
            <span className="dot"></span>ABOUT MORE
          </p>
          <h3 className="about-copy">
            By integrating ecological principles with cutting-edge digital design, this template
            provides the perfect foundation for businesses committed to sustainability and
            meaningful impact.
          </h3>
          <a className="btn btn-dark" href="#services">
            Discover More
          </a>
        </div>
        <div className="about-images reveal">
          <img
            src="/assets/images/about-woman.jpg"
            alt="Woman working with a small wind turbine model"
          />
          <img src="/assets/images/about-water.webp" alt="Water splash" />
        </div>
      </div>
    </section>
  );
}
