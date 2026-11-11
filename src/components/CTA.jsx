const images = [
  { className: "cta-solar", src: "cta-solar.jpg" },
  { className: "cta-farm", src: "cta-farm.webp" },
  { className: "cta-windfans", src: "cta-windfans.jpg" },
  { className: "cta-dam", src: "cta-dam.webp" },
  { className: "cta-garden", src: "cta-garden.webp" },
  { className: "cta-tile", src: "cta-tree.jpg" },
];

export default function CTA() {
  return (
    <section className="cta" id="contact">
      {images.map((image) => (
        <img
          className={`cta-img ${image.className}`}
          src={`/assets/images/${image.src}`}
          alt=""
          key={image.className}
        />
      ))}

      <div className="cta-content reveal">
        <h2>
          Your adventure
          <br />{" "}
          awaits — start eco
          <br />{" "}
          exploring now.
        </h2>
        <p>
          Blending ecological insights with advanced digital design, we offer perfect foundation for
          businesses committed to sustainability.
        </p>
        <div className="cta-actions">
          <a className="btn btn-mint" href="#top">
            Book An Intro Call
          </a>
          <a className="btn btn-white" href="#services">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
