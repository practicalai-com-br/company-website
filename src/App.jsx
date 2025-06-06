import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">Practical.ai</div>

        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button className="header-cta">Get Started</button>
        </nav>
      </div>
    </header>
  );
}

// Hero section with headline, subheadline, and CTA button
function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>The AI era is upon us.
            Empower your future with intelligent software</h1>
        <p>
          We’re a Brazilian tech company focused on developing quality and high-end AI products.
        </p>

        <button className="cta-button" onClick={() => alert('Get Started clicked!')}>
          Get Started
        </button>
      </div>
      {/* <div className="hero-image">
        <img
          src="https://builder.ai/static/images/hero-image.png"
          alt="Hero"
          loading="lazy"
          width="400"
          height="300"
        />
      </div> */}
    </header>
  );
}

// Features section with reusable FeatureCard component
function FeaturesSection() {
  const features = [
    {
      title: 'AI-Powered Builder',
      description: 'Leverage AI to accelerate your software creation process.',
    },
    {
      title: 'Transparent Pricing',
      description: 'Know exactly what you’re paying for with no surprises.',
    },
    {
      title: 'Expert Support',
      description: 'Get help from software experts anytime you need it.',
    },
  ];

  return (
    <section className="features">
      <h2>Why choose us?</h2>
      <div className="feature-cards">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

// Individual feature card component
function FeatureCard({ title, description }) {
  return (
    <div className="feature-card" tabIndex={0} aria-label={title}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Testimonials section with logos
// function TestimonialsSection() {
//   const logos = [
//     'https://via.placeholder.com/100x40?text=Logo+1',
//     'https://via.placeholder.com/100x40?text=Logo+2',
//     'https://via.placeholder.com/100x40?text=Logo+3',
//     'https://via.placeholder.com/100x40?text=Logo+4',
//   ];

//   return (
//     <section className="testimonials" aria-label="Trusted by industry leaders">
//       <h2>Trusted by industry leaders</h2>
//       <div className="logos">
//         {logos.map((logo, i) => (
//           <img key={i} src={logo} alt={`Logo ${i + 1}`} loading="lazy" />
//         ))}
//       </div>
//     </section>
//   );
// }

// Simple footer
function Footer() {
  return (
    <footer>
      <p>© 2025 PracticalAI. All rights reserved.</p>
    </footer>
  );
}

export default App;
