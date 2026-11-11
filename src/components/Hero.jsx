export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="hero-frame">
        <video
          className="hero-video"
          src="/assets/videos/hero.mp4"
          poster="/assets/images/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="hero-tint"></div>
        <div className="hero-content">
          <h1>
            Eco-friendly living
            <br />
            start from here.
          </h1>
          <div className="hero-bottom">
            <img
              className="hero-mark"
              src="/assets/images/asterisk.png"
              alt=""
              width="101"
              height="101"
            />
            <div className="hero-copy">
              <h4>
                Driving sustainability through innovation, eco-friendly tech, and a strong
                commitment to our planet.
              </h4>
              <a className="btn btn-dark" href="#contact">
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
