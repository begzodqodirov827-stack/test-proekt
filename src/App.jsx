import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">LOGO</div>

        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>

        <button className="btn">Login</button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Build Amazing Websites</h1>
          <p>
            Create modern, responsive and beautiful websites using React and CSS.
          </p>

          <button>Get Started</button>
        </div>

        <div className="hero-image">
          <img
            src="https://picsum.photos/500/400"
            alt="hero"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="cards">
        <div className="card">
          <h2>Design</h2>
          <p>Modern UI/UX Design for every project.</p>
        </div>

        <div className="card">
          <h2>Development</h2>
          <p>Fast and responsive React applications.</p>
        </div>

        <div className="card">
          <h2>Support</h2>
          <p>24/7 support for your business.</p>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2>About Us</h2>

        <p>
          We create beautiful websites with React, JavaScript and CSS.
          Our mission is to build high-quality web applications.
        </p>
      </section>
      {/* Statistics */}
<section className="stats">
  <div className="stat">
    <h2>500+</h2>
    <p>Projects</p>
  </div>

  <div className="stat">
    <h2>300+</h2>
    <p>Clients</p>
  </div>

  <div className="stat">
    <h2>10+</h2>
    <p>Years Experience</p>
  </div>

  <div className="stat">
    <h2>24/7</h2>
    <p>Support</p>
  </div>
</section>

{/* Services */}
<section className="services">
  <h2>Our Services</h2>

  <div className="service-box">

    <div className="service">
      <h3>Web Design</h3>
      <p>Create beautiful and responsive websites.</p>
    </div>

    <div className="service">
      <h3>React Development</h3>
      <p>Modern frontend development using React.</p>
    </div>

    <div className="service">
      <h3>UI / UX</h3>
      <p>Professional user interface design.</p>
    </div>

    <div className="service">
      <h3>SEO</h3>
      <p>Improve website ranking on Google.</p>
    </div>

  </div>
</section>

{/* Portfolio */}
<section className="portfolio">

  <h2>Portfolio</h2>

  <div className="portfolio-box">

    <img src="https://picsum.photos/350/250?1" alt="" />
    <img src="https://picsum.photos/350/250?2" alt="" />
    <img src="https://picsum.photos/350/250?3" alt="" />
    <img src="https://picsum.photos/350/250?4" alt="" />
    <img src="https://picsum.photos/350/250?5" alt="" />
    <img src="https://picsum.photos/350/250?6" alt="" />

  </div>

</section>

{/* Team */}
<section className="team">

  <h2>Our Team</h2>

  <div className="team-box">

    <div className="member">
      <img src="https://picsum.photos/180?1" alt="" />
      <h3>John Smith</h3>
      <p>CEO</p>
    </div>

    <div className="member">
      <img src="https://picsum.photos/180?2" alt="" />
      <h3>Sarah Lee</h3>
      <p>Designer</p>
    </div>

    <div className="member">
      <img src="https://picsum.photos/180?3" alt="" />
      <h3>David</h3>
      <p>Developer</p>
    </div>

  </div>

</section>

{/* Pricing */}
<section className="pricing">

<h2>Pricing</h2>

<div className="price-box">

<div className="price">
<h3>Basic</h3>
<h1>$29</h1>
<p>Landing Page</p>
<p>Email Support</p>
<button>Choose</button>
</div>

<div className="price">
<h3>Standard</h3>
<h1>$59</h1>
<p>5 Pages</p>
<p>Priority Support</p>
<button>Choose</button>
</div>

<div className="price">
<h3>Premium</h3>
<h1>$99</h1>
<p>Unlimited Pages</p>
<p>24/7 Support</p>
<button>Choose</button>
</div>

</div>

</section>

{/* Testimonials */}
<section className="testimonials">

<h2>Testimonials</h2>

<div className="testimonial-box">

<div className="testimonial">
<p>"Amazing service. Highly recommended!"</p>
<h4>- Alex</h4>
</div>

<div className="testimonial">
<p>"Very professional team and fast delivery."</p>
<h4>- Jessica</h4>
</div>

<div className="testimonial">
<p>"Our website looks fantastic."</p>
<h4>- Michael</h4>
</div>

</div>

</section>

{/* Contact */}
<section className="contact">

<h2>Contact Us</h2>

<form>

<input type="text" placeholder="Your Name" />

<input type="email" placeholder="Your Email" />

<textarea placeholder="Message"></textarea>

<button>Send Message</button>

</form>

</section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

        <div>
          <h3>Follow</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Telegram</p>
        </div>
      </footer>

    </div>
  );
}

export default App;