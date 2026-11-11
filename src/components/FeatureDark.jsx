const features = [
  {
    icon: "icon-leaf.svg",
    title: "Bio-Integrated Solutions",
    body: "Nature Inspires Our Approach, Merging Biological Intelligence With The Modern Technologe.",
  },
  {
    icon: "icon-home.svg",
    title: "Eco-First Features",
    body: "Crafted With Environmental Responsibility, Every Feature Intentionally Minimizes Digital Waste.",
  },
  {
    icon: "icon-pen.svg",
    title: "Circular Design Principles",
    body: "Rooted In Renewal And Longevity, Our Circular Philosophy Embraces Sustainability At Its Core.",
  },
  {
    icon: "icon-growth.svg",
    title: "Sustainable Growth",
    body: "Empower Brands To Scale Purposefully By Providing Eco-Conscious Digital Tools.",
  },
];

export default function FeatureDark() {
  return (
    <section className="feature-dark">
      <div className="wrap">
        <p className="eyebrow eyebrow-light reveal">
          <span className="dot"></span>CRAFTED FOR BUSINESSES
        </p>
        <h2 className="feature-title reveal">
          Designing solutions
          <br />{" "}
          for the Eco future.
        </h2>

        <div className="feature-video reveal">
          <video
            src="/assets/videos/field.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/field-inset.webp"
          ></video>
          <div className="glass-card">
            <p>
              By Choosing This Template, You Elevate Your Brand With A Sustainable Design That
              Highlights Your Eco-Commitment And Drives Growth With Positive Impact.
            </p>
            <img src="/assets/images/field-inset.webp" alt="Aerial view of green farmland" />
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card reveal" key={feature.title}>
              <img
                src={`/assets/images/${feature.icon}`}
                alt=""
                width="40"
                height="40"
              />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
