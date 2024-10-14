import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#sports">Sports</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Landing Page */}
      <section id="home" className="section">
        <h1>Welcome to the Sports Website</h1>
        <p>Scroll down to explore more about the sports world.</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          We are passionate about sports, providing information and updates on the latest in various sporting disciplines.
        </p>
      </section>

      {/* Sports Section */}
      <section id="sports" className="section">
        <h2>Featured Sports</h2>
        <div className="sports-cards">
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Sport 1" />
            <h3>Football</h3>
            <p>Explore the latest football news, matches, and highlights.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Sport 2" />
            <h3>Basketball</h3>
            <p>Stay updated with basketball scores, players, and teams.</p>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/150" alt="Sport 3" />
            <h3>Cricket</h3>
            <p>Catch up on cricket matches, rankings, and news.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Get in touch for more sports updates and news.</p>
        <button onClick={() => setCount(count + 1)}>
          Count clicks: {count}
        </button>
      </section>
    </>
  );
}

export default App;
