import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blogs", label: "Blogs" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (window.innerWidth <= 990) {
        setHidden(false);
        lastScroll.current = y;
        return;
      }
      if (y > lastScroll.current + 6 && y > 420) setHidden(true);
      else if (y < lastScroll.current - 6 || y < 120) setHidden(false);
      lastScroll.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 990) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header className={`site-header${hidden ? " is-hidden" : ""}`} id="siteHeader">
        <div className="nav-bar">
          <a className="nav-logo" href="#top" aria-label="Zohco home">
            <img src="/assets/images/logo.svg" alt="Zohco" width="135" height="36" />
          </a>
          <nav className="nav-links" aria-label="Primary">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-dark nav-cta" href="#contact">
            Contact
          </a>
          <button
            className={`menu-toggle${menuOpen ? " is-active" : ""}`}
            id="menuToggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobileMenu"
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <p className="mobile-menu-foot">info.zohco@gmail.com</p>
      </div>
    </>
  );
}
