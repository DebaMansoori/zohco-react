import { useState } from "react";

const items = [
  {
    title: "01. Environmental Conservation",
    body: "Revolutionize the construction industry through innovation, integrity, and excellence. We are dedicated to delivering superior quality projects that exceed client communities.",
  },
  {
    title: "02. Enhance Efficiency Naturally",
    body: "Streamline every stage with intelligent, low-impact systems that reduce waste, conserve resources, and improve performance across your entire operation.",
  },
  {
    title: "03. Sustainable Living",
    body: "Create spaces and experiences that make sustainable choices effortless — helping people live well today while protecting the planet for tomorrow.",
  },
];

const avatars = ["avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png"];

export default function Split() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="split" id="pricing">
      <div className="split-media">
        <video src="/assets/videos/accordion.mp4" autoPlay muted loop playsInline></video>
      </div>
      <div className="split-panel">
        <div className="split-inner">
          <p className="eyebrow eyebrow-light reveal">
            <span className="dot"></span>CRAFTED FOR BUSINESSES
          </p>
          <h2 className="split-title reveal">
            Designing solutions
            <br />{" "}
            for the Eco future.
          </h2>
          <p className="split-intro reveal">
            By combining biological insights with advanced technology, we craft solutions that are
            sustainable, adaptable, and human-centered.
          </p>

          <div className="accordion reveal">
            {items.map((item, index) => {
              const open = index === openIndex;
              return (
                <div className={`acc-item${open ? " open" : ""}`} key={item.title}>
                  <button
                    className="acc-head"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span>{item.title}</span>
                    <span className="acc-icon" aria-hidden="true">
                      <svg viewBox="0 0 20 20">
                        <path d={open ? "M5 12l5-5 5 5" : "M5 8l5 5 5-5"} />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel">
                    <p>{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="review-badge reveal">
            <div className="avatars">
              {avatars.map((avatar) => (
                <img
                  key={avatar}
                  src={`/assets/images/${avatar}`}
                  alt="Customer"
                  width="40"
                  height="40"
                />
              ))}
              <span className="avatar-plus">+</span>
            </div>
            <p>70K+ Positive Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
