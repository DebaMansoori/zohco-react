import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Values from "./components/Values.jsx";
import Split from "./components/Split.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import FeatureDark from "./components/FeatureDark.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTA from "./components/CTA.jsx";
import Blogs from "./components/Blogs.jsx";
import Footer from "./components/Footer.jsx";

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    items.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  useEffect(() => {
    document.querySelectorAll("video[autoplay]").forEach((video) => {
      video.muted = true;
      const promise = video.play();
      if (promise && typeof promise.catch === "function") promise.catch(() => {});
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Values />
        <Split />
        <Services />
        <About />
        <FeatureDark />
        <Stats />
        <Testimonials />
        <CTA />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
