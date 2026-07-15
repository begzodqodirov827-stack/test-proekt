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