// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Summer from '/src/summer-banner.png';
import Summer2 from '/src/summer-banner2.png';
import Summer3 from '/src/final-banner.png';
function Home() {
  return (
    <div className="home-container">
      <section className="promo-banner">
        <Link to="/services">
          <img
            src={Summer}
            alt="Summer Trip Discount Banner"
            className="promo-image"
          />
        </Link>
      </section>
      <section className="promo-banner">
        <Link to="/services">
          <img
            src={Summer2}
            alt="Summer Trip Second Discount Banner"
            className="promo-image"
          />
        </Link>
      </section>
      <section className="hero-section">
        <div className="overlay">
          <h1 className="hero-title">
            Welcome to <span className="highlight">StayMaster</span>
          </h1>
          <p className="hero-subtitle">Find the best hotels at the best prices!</p>
          <input
            type="text"
            placeholder="Search by location..."
            className="search-input"
          />
        </div>

      </section>
      <section className="features-section">
        <h2 className="section-title">Why Choose StayMaster?</h2>
        <div className="features-grid">
          <div className="feature-card">🏩 Wide Hotel Network</div>
          <div className="feature-card">💸 Affordable Prices</div>
          <div className="feature-card">📞 24/7 Customer Support</div>
        </div>
      </section>
      <section className="feature-banner">
        <Link to="/services">
          <img
            src={Summer3}
            alt="Summer Trip Second Discount Banner"
            className="feature-image"
          />
        </Link>
      </section>
      {/* Hotel Preview Section */}
      <section className="hotel-preview-section">
        <h2 className="section-title">Popular Hotels</h2>
        <div className="hotel-grid">
          <div className="hotel-card">🏢Hotel Grand Palace</div>
          <div className="hotel-card">🌊 Ocean View Resort</div>
          <div className="hotel-card">⛰️ Hilltop Inn</div>
        </div>
      </section>
    </div>
  );
}
export default Home;






