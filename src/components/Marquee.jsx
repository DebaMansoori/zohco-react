const logos = [
  { src: "logo-cloudly.svg", alt: "Cloudly", height: 30 },
  { src: "logo-camera.svg", alt: "Camera", height: 29 },
  { src: "logo-marketly.svg", alt: "Marketly", height: 29 },
  { src: "logo-codelify.svg", alt: "Codelify", height: 30 },
  { src: "logo-natural.svg", alt: "Natural", height: 30 },
  { src: "logo-doctroly.svg", alt: "Doctroly", height: 30 },
  { src: "logo-architect.svg", alt: "Architect", height: 32 },
  { src: "logo-techlify.svg", alt: "Techlify", height: 30 },
];

export default function Marquee() {
  return (
    <section className="logo-strip" aria-label="Trusted by">
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((set) => (
            <div className="marquee-set" key={set} aria-hidden={set === 1 || undefined}>
              {logos.map((logo) => (
                <img
                  key={logo.src}
                  src={`/assets/images/${logo.src}`}
                  alt={set === 0 ? logo.alt : ""}
                  height={logo.height}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
