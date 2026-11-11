const cards = [
  {
    image: "service-wind.webp",
    alt: "Wind turbine",
    title: "Wind Aesthetic",
    body: "We Create Clean, Modern Designs That Resonate With Your Audience While Building A Strong, Sustainable Brand Presence.",
  },
  {
    image: "service-solar.webp",
    alt: "Solar panels",
    title: "Eco E-commerce",
    body: "We Build Powerful Online Stores That Deliver High Conversion Rates With Ethical Practices And Support A Healthier Planet.",
  },
  {
    image: "service-rainbow.webp",
    alt: "Rainbow over green fields and wind turbines",
    title: "Green SEO",
    body: "We Optimize Your Search Rankings Using Clean Code And Efficient Structures That Drive Consistent Organic Traffic Growth.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="services-head">
          <div className="services-intro reveal">
            <p className="eyebrow">
              <span className="dot"></span>SUSTAINABLE SERVICES
            </p>
            <h2>
              Sustainable design
              <br />{" "}
              for forward thinking
              <br />{" "}
              creators.
            </h2>
            <a className="btn btn-dark" href="#contact">
              Book An Intro Call
            </a>
          </div>
          <article className="service-card service-card-feature reveal">
            <div className="service-media">
              <img src="/assets/images/service-wind-big.webp" alt="Wind turbine against a blue sky" />
            </div>
            <h3>Wind Design</h3>
            <p>
              We Create Beautiful, High-Impact Visuals That Prioritize Environmental Responsibility
              While Ensuring Your Brand Stands Out In An Increasingly Crowded And Competitive
              Digital Marketplace.
            </p>
          </article>
        </div>

        <div className="service-grid">
          {cards.map((card) => (
            <article className="service-card reveal" key={card.title}>
              <div className="service-media">
                <img src={`/assets/images/${card.image}`} alt={card.alt} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
