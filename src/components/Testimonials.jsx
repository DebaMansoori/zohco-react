import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    photo: "testimonial-1.png",
    name: "Esther Howard",
    location: "Houston, TX",
    quote:
      '"The Team Transformed Our Old Patio Into A Sleek Outdoor Lounge. We Are So Happy With The Results! The Skill And Care They Showed During Each Stage Of The Build Was Superb. It Is Now Our Favorite Home Retreat."',
  },
  {
    photo: "testimonial-david.png",
    name: "David Miller",
    location: "Denver, CO",
    quote:
      "The New Pool Deck Is Ideal For Summer Parties. They Completed The Installation Under Budget And Kept The Site Perfectly Clean. I Warmly Suggest Their Experts To Anyone Seeking Premium Paving. Our Neighbors Are Already Asking For A Referral.",
  },
  {
    photo: "testimonial-marcus.jpg",
    name: "Marcus Thorne",
    location: "Austin, TX",
    quote:
      '"The Crew Converted Our Boring Patio Into A Stylish Outdoor Lounge. We Are So Thrilled With The Outcome! The Craftsmanship And Dedication They Showed During Every Phase Of The Build Was Impressive. It Is Now Our Ultimate Favorite Daily Home Space."',
  },
];

const starPath =
  "M12 2.2l2.94 6.26 6.86.9-5.03 4.75 1.28 6.79L12 17.7l-6.05 3.2 1.28-6.79L2.2 9.36l6.86-.9L12 2.2z";

function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg viewBox="0 0 24 24" key={star}>
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const cardsRef = useRef([]);

  const measure = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards[0]) return;
    const card = cards[Math.min(index, cards.length - 1)];
    setOffset(card.offsetLeft - cards[0].offsetLeft);
  }, [index]);

  useEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <section className="testimonials">
      <p className="eyebrow center reveal">
        <span className="dot"></span>TESTIMONIALS
      </p>
      <h2 className="center testimonials-title reveal">Happy clients observation</h2>

      <div className="t-viewport">
        <div
          className="t-track"
          id="tTrack"
          style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
        >
          {testimonials.map((testimonial, i) => (
            <article
              className="t-card"
              key={i}
              ref={(node) => {
                cardsRef.current[i] = node;
              }}
            >
              <img
                className="t-photo t-photo-desktop"
                src={`/assets/images/${testimonial.photo}`}
                alt={testimonial.name}
              />
              <div className="t-body">
                <Stars />
                <p className="t-quote">{testimonial.quote}</p>
                <div className="t-person">
                  <img
                    className="t-avatar"
                    src={`/assets/images/${testimonial.photo}`}
                    alt=""
                  />
                  <div className="t-person-info">
                    <p className="t-name">{testimonial.name}</p>
                    <p className="t-loc">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="t-controls">
        <button
          className="t-arrow"
          id="tPrev"
          aria-label="Previous testimonial"
          style={{ opacity: index === 0 ? 0.45 : 1 }}
          onClick={() => setIndex((current) => Math.max(0, current - 1))}
        >
          <svg viewBox="0 0 20 20">
            <path d="M12 5l-5 5 5 5" />
          </svg>
        </button>
        <button
          className="t-arrow"
          id="tNext"
          aria-label="Next testimonial"
          style={{ opacity: index === testimonials.length - 1 ? 0.45 : 1 }}
          onClick={() => setIndex((current) => Math.min(testimonials.length - 1, current + 1))}
        >
          <svg viewBox="0 0 20 20">
            <path d="M8 5l5 5-5 5" />
          </svg>
        </button>
      </div>
      <div className="t-dots" id="tDots">
        {testimonials.map((testimonial, i) => (
          <button
            type="button"
            className={`t-dot${i === index ? " is-active" : ""}`}
            aria-label={`Go to testimonial ${i + 1}`}
            key={i}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}
