import Counter from "./Counter.jsx";

export default function Stats() {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-intro reveal">
          <p className="eyebrow">
            <span className="dot"></span>OUR STATISTIC
          </p>
          <h3>
            This template provides the ideal foundation for businesses focused on sustainability.
          </h3>
          <a className="btn btn-dark" href="#contact">
            Discover More
          </a>
        </div>

        <div className="stats-grid">
          <div className="stat-media stat-wind reveal">
            <img src="/assets/images/service-wind-big.webp" alt="Wind turbine" />
          </div>
          <div className="stat-media stat-tall reveal">
            <img src="/assets/images/stat-track.jpg" alt="Truck driving on a mountain road" />
          </div>

          <div className="stat-card reveal">
            <Counter value={1500} suffix="+" />
            <p>Eco And Sustainable Projects Successfully Supported.</p>
          </div>
          <div className="stat-media stat-bottle reveal">
            <img src="/assets/images/stat-export.jpg" alt="Boats leaving trails on dark water" />
          </div>
          <div className="stat-card stat-card-mint reveal">
            <Counter value={97} suffix="%" />
            <p>Customer Satisfaction And Growth Rate. - Optimized Value!</p>
          </div>

          <div className="stat-media stat-water reveal">
            <img src="/assets/images/stat-farming.webp" alt="Water spraying over crops" />
          </div>
          <div className="stat-card stat-card-wide reveal">
            <Counter value={4000} suffix="+" />
            <p>Eco And Sustainable Projects Successfully Supported. — Building A Greener Future</p>
          </div>
        </div>
      </div>
    </section>
  );
}
