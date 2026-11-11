import { useState } from "react";

const columns = [
  {
    label: "MAIN PAGES",
    links: [
      { label: "Home", href: "#top" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    label: "COMPANY",
    links: [
      { label: "Blog", href: "#blogs" },
      { label: "Blog Details", href: "#blogs" },
      { label: "Pricing", href: "#pricing" },
      { label: "404 Not Found", href: "#top" },
    ],
  },
  {
    label: "TEMPLATE",
    links: [
      { label: "Terms And Condition", href: "#top" },
      { label: "Privacy Policy", href: "#top" },
    ],
  },
];

export default function Footer() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.currentTarget.elements.email;
    if (!input.value.trim()) return;
    setSent(true);
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="newsletter">
            <p className="foot-label">NEWSLETTER</p>
            <form
              className={`newsletter-form${sent ? " is-sent" : ""}`}
              id="newsletterForm"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                placeholder={sent ? "Subscribed" : "Enter your email..."}
                aria-label="Email address"
                required
                disabled={sent}
              />
              <button type="submit" aria-label="Subscribe">
                <svg viewBox="0 0 20 20">
                  <path d={sent ? "M4 10.5l4 4 8-9" : "M5 15L15 5M7 5h8v8"} />
                </svg>
              </button>
            </form>
            <p className="newsletter-note">
              {sent ? "Thanks — you're on the list." : "Stay tuned and subscribe to our newsletter."}
            </p>
          </div>

          {columns.map((column) => (
            <div className="foot-col" key={column.label}>
              <p className="foot-label">{column.label}</p>
              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-contact">
          <div>
            <p className="foot-label">EMAIL US</p>
            <a href="mailto:info.zohco@gmail.com">info.zohco@gmail.com</a>
          </div>
          <div>
            <p className="foot-label">LOCATION</p>
            <p>174 Street Charleston, New York</p>
          </div>
          <div>
            <p className="foot-label">CALL US NOW</p>
            <a href="tel:+8808999388750">(+880) 89993 88750</a>
          </div>
        </div>

        <div className="footer-bar">
          <img
            className="footer-logo"
            src="/assets/images/logo-white.svg"
            alt="Zohco"
            width="173"
            height="46"
          />
          <div className="footer-bar-row">
            <div className="socials">
              <a href="#top">FACEBOOK</a>
              <a href="#top">INSTAGRAM</a>
              <a href="#top">LINKEDIN</a>
              <a href="#top">MEDIUM</a>
            </div>
            <p className="copyright">
              © 2026 Copyright - Zohco | Designed by “Flowzai” |
              <br />{" "}
              Powered by Framer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
