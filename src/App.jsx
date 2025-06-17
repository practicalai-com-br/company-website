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
        <div className="logo">Practical AI</div>

        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {/* <button className="header-cta">View Projects</button> */}
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
        <h1>Building Practical AI,<br></br>
            One project at a Time</h1>
        <p>
          We incubate and prototype AI projects - from small tools to full startups. Explore
          our work and join us in creating useful, open and impactiful AI solutions.
        </p>
        <div className="cta-button-container">
          <button className="cta-button" onClick={() => alert('Get Started clicked!')}>
            View Projects
          </button>
          <button className="cta-button-wireframe" onClick={() => alert('Get Started clicked!')}>
            Contact Us
          </button>
        </div>
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
  const features_1 = [
    {
      title: "SLM-Memory",
      description: "Local LLM with FAISS + Redis context memory, GPU/CPU-optimized.",
      tech: ["FastApi", "PyTorch", "FAISS", "Redis"],
      status: "Prototype",
    },
    {
      title: "AI Waiter",
      description: "Restaurant recommendation and menu understanding assistant",
      tech: ["LLM", "LangChain"],
      status: "MVP",
    }
  ];
  const features_2 = [
    {
      title: "WhatsApp Attendant Bot",
      description: "Conversational bot for scheduling services and answering questions on WhatsApp",
      tech: ["Python", "Rasa"],
      status: null,
    },
    {
      title: "Conversational",
      description: "Bot for scheduling services and answering questions on WhatsApp",
      tech: ["Python", "Rasa"],
      status: "Prototype",
    }
  ];

  return (
    <section className="features">
      <h2 className="project-title">Projects</h2>
      <div className="feature-cards">
        {features_1.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
      <div className="feature-cards">
        {features_2.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

// Individual feature card component
function FeatureCard({ title, description, status, tech }) {
  return (
    <div className="feature-card" tabIndex={0} aria-label={title}>
      <div className="feature-card-header">
        <h3>{title}</h3>
        {status ? <h4>{status}</h4> : null}
      </div>
      <p>{description}</p>
      <div className="tech-list-container">
        <p>Tech:</p>
      {tech.map((tech, i) => (
        <a
          key={i}
          href="#"
          className="text-blue-600 hover:underline mr-1"
        >
          {tech}
        </a>
      ))}
      </div>
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
