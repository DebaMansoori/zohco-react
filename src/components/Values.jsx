const cards = [
  {
    variant: "light",
    label: "HUMAN-CENTERED",
    title: (
      <>
        Biology is the heart of
        <br />{" "}
        groundbreaking innovation.
      </>
    ),
    body: "From eco communities to reforestation projects, our impact speaks for itself. We partner worldwide to develop and scale various sustainable initiatives.",
    tags: ["Eco Development", "Nature Technology"],
  },
  {
    variant: "image",
    label: "TECHNOLOGY-CENTERED",
    title: (
      <>
        Sustainable solutions inspired by
        <br />{" "}
        the natural world.
      </>
    ),
    body: "From eco communities to reforestation projects, our impact speaks for itself. We work with partners worldwide to implement sustainable initiatives.",
    tags: ["Circular Economy", "Renewable Energy"],
  },
  {
    variant: "dark",
    label: "TECHNOLOGY-CENTERED",
    title: (
      <>
        Sustainable solutions inspired by
        <br />{" "}
        the natural world.
      </>
    ),
    body: "By combining biological insights with advanced technology, we craft efficient solutions that stay sustainable, adaptable, and human-centered.",
    tags: ["Circular Economy", "Renewable Energy"],
  },
];

export default function Values() {
  return (
    <section className="values section-pad" id="values">
      <div className="wrap">
        <p className="eyebrow center reveal">
          <span className="dot"></span>OUR VALUES
        </p>
        <h2 className="center values-title reveal">
          For those who build in
          <br />{" "}
          harmony with the planet.
        </h2>

        <div className="value-grid">
          {cards.map((card) => (
            <article className={`value-card value-card-${card.variant} reveal`} key={card.variant}>
              <p className="card-label">{card.label}</p>
              <h4>{card.title}</h4>
              <div className="value-foot">
                <p>{card.body}</p>
                <div className="tags">
                  {card.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      <span className="dot"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
