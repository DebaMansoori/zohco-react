const posts = [
  {
    author: "Elena Vargas",
    avatar: "blog-elena.jpg",
    role: "Editor",
    date: "DEC 25, 2025",
    category: "TECHNOLOGY",
    image: "blog-meeting.png",
    alt: "Team meeting in a green city office",
    title: "The Circular Revolution: Turning Waste into Business Value.",
  },
  {
    author: "Marcus Chen",
    avatar: "blog-marcus.png",
    role: "Editor",
    date: "APR 11, 2026",
    category: "SUSTAINABILITY",
    image: "blog-dust.png",
    alt: "Aerial view of a quarry",
    title: "Eco-Friendly Choices: Digital Consciousness & Impact.",
  },
  {
    author: "Emma Thompson",
    avatar: "blog-emma.jpg",
    role: "Editor",
    date: "FEB 17, 2026",
    category: "SUSTAINABILITY",
    image: "blog-factory.jpg",
    alt: "Solar panels seen from above",
    title: "How Sustainable Brands Win Consumers & Investors.",
  },
];

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <div className="wrap">
        <p className="eyebrow center reveal">
          <span className="dot"></span>OUR BLOGS
        </p>
        <h2 className="center blogs-title reveal">Latest news &amp; articles</h2>

        <div className="blog-grid">
          {posts.map((post) => (
            <a className="blog-card reveal" href="#blogs" key={post.title}>
              <div className="blog-meta">
                <div className="blog-author">
                  <img src={`/assets/images/${post.avatar}`} alt={post.author} />
                  <div>
                    <p className="b-name">{post.author}</p>
                    <p className="b-role">{post.role}</p>
                  </div>
                </div>
                <div className="blog-date">
                  <p>{post.date}</p>
                  <p className="b-cat">{post.category}</p>
                </div>
              </div>
              <img className="blog-img" src={`/assets/images/${post.image}`} alt={post.alt} />
              <h4>{post.title}</h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
