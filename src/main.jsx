import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const assets = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const services = [
  {
    title: "Web Design & Hosting",
    icon: "icon-website.png",
    text: "We create modern, user-friendly websites that not only look great but also perform flawlessly. Our reliable hosting solutions ensure your site stays secure, fast, and always online.",
  },
  {
    title: "Graphic Design",
    icon: "icon-graphic.png",
    text: "From logos to marketing materials, we bring your vision to life with stunning visuals that speak your brand's language. Good design isn't just pretty, it's powerful.",
  },
  {
    title: "App Development",
    icon: "icon-consultation.png",
    text: "We build intuitive, scalable mobile and web apps tailored to your goals. We turn ideas into smooth, functional experiences.",
  },
  {
    title: "Brand Development",
    icon: "icon-brand.png",
    text: "Your brand is more than a logo. It's your story, your identity, and your promise. We help you define, refine, and position your brand.",
  },
];

const statItems = [
  { value: 50, suffix: "", label: "Projects Done", icon: "projects" },
  { value: 262, suffix: "+", label: "Coffee Breaks", icon: "coffee" },
  { value: 50, suffix: "", label: "Happy Clients", icon: "clients" },
  { value: 100, suffix: "%", label: "Satisfaction", icon: "shield" },
];

const sliderImages = [
  { image: "slider-one.png", alt: "Tshilidzi Technologies client logos slide one" },
  { image: "slider-two.png", alt: "Tshilidzi Technologies client logos slide two" },
  { image: "slider-three.png", alt: "Tshilidzi Technologies client logos slide three" },
];

const serviceCards = [
  {
    title: "E-Commerce Store",
    image: "service-online.png",
    text: "Full scale professional online store to elevate your business needs and take your products to the online world with secure online payment portals, email marketing, and search engine optimisation.",
  },
  {
    title: "Dynamic Website",
    image: "service-business.png",
    text: "Create a website that showcases your company, services, and packages in an attractive professional way, ideal for building a strong online presence.",
  },
  {
    title: "Blog Site",
    image: "service-blog.png",
    text: "Publish articles, announcements, and resources in a clean editorial experience built for readability, discovery, and long-term growth.",
  },
  {
    title: "Business Profile",
    image: "service-profile.png",
    text: "Present your company with a polished profile page that communicates your services, history, values, and credibility at a glance.",
  },
];

const portfolio = [
  {
    name: "Helping Mzansi People Out",
    image: "portfolio-hmpo.png",
    text: "Tshilidzi Technologies proudly showcases Helping Mzansi People Out as one of our featured clients, a non-profit dedicated to uplifting communities through automotive assistance and education.",
    tag: "HMPO",
    url: "https://www.helpingmzansi.org/",
  },
  {
    name: "Kreative Moves Media House",
    image: "portfolio-kmmh.png",
    text: "Kreative Moves Media House brings stories to life through photography, videography, social media management, and event sound hire.",
    tag: "KMMH",
    url: "https://www.kreativemoves.co.za/",
  },
  {
    name: "Leap Fitness",
    image: "portfolio-leap.png",
    text: "A fitness-focused digital presence with high-energy visuals, clear service paths, and a strong brand-forward customer journey.",
    tag: "LEAP",
    url: "https://www.leapoffitness.co.za/",
  },
  {
    name: "Cursive Network",
    image: "portfolio-cursive.png",
    text: "A refined portfolio build for a creative network, designed around clean presentation and immersive media storytelling.",
    tag: "Cursive",
  },
  {
    name: "Atlantic Apara O Tlale",
    image: "portfolio-aaot.png",
    text: "A professional digital platform created for community visibility, trust-building, and simple access to key information.",
    tag: "AAOT",
    url: "https://www.shopatlantic.co.za/",
  },
  {
    name: "Self-Love Collection",
    image: "portfolio-slc.png",
    text: "A clear, elegant website system built to make services easy to explore and enquiries simple to start.",
    tag: "SLC",
    url: "https://selflovecollection.co.za/",
  },
];

function LoadingScreen({ done }) {
  return (
    <div className={`loader-screen ${done ? "done" : ""}`} aria-hidden={done}>
      <div className="loader-card">
        <img src={assets("logo-mark.png")} alt="" />
        <p>Tshilidzi Technologies</p>
        <span />
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = ["home", "services", "portfolio", "contact"];

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Tshilidzi Technologies home">
        <img src={assets("logo-mark.png")} alt="" />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} onClick={() => setOpen(false)} href={`#${link}`}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-fallback" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={assets("landing-video.mov")} />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content">
        <img className="hero-logo" src={assets("logo-mark.png")} alt="Tshilidzi Technologies" />
        <p className="wordmark">Tshilidzi Technologies</p>
        <p className="tagline">&lt;Ideas to Reality&gt;</p>
        <h1>We Build Timeless Digital Experiences</h1>
        <a className="journey" href="#what-we-do">
          Begin Your Journey
          <span aria-hidden="true">⌄</span>
        </a>
      </div>
    </section>
  );
}

function HomeServices() {
  return (
    <section className="section split-services" id="what-we-do">
      <div className="intro-block">
        <p className="eyebrow">What We Do</p>
        <h2>We build bespoke and timeless websites catered to your business model.</h2>
        <p>Well, that's how you ended up here...</p>
        <img src={assets("services-hero.png")} alt="Digital circuit artwork" />
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-tile" key={service.title}>
            <img src={assets(service.icon)} alt="" />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a className="line-link" href="#services">Learn more</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function useCountUp(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame;
    const start = performance.now();
    const duration = 1350;
    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function Stat({ item, active }) {
  const value = useCountUp(item.value, active);
  return (
    <article className="stat">
      <StatIcon type={item.icon} />
      <strong>
        {value}
        {item.suffix}
      </strong>
      <span>{item.label}</span>
    </article>
  );
}

function StatIcon({ type }) {
  const icons = {
    projects: (
      <>
        <rect x="5" y="7" width="34" height="26" rx="4" />
        <path d="M14 39h16M22 33v6M12 16h20M12 23h12" />
      </>
    ),
    coffee: (
      <>
        <path d="M10 16h24v12a10 10 0 0 1-10 10h-4a10 10 0 0 1-10-10V16Z" />
        <path d="M34 19h3a5 5 0 0 1 0 10h-3M15 8c-2 2-2 4 0 6M23 8c-2 2-2 4 0 6M31 8c-2 2-2 4 0 6" />
      </>
    ),
    clients: (
      <>
        <circle cx="22" cy="14" r="6" />
        <path d="M10 38c1.8-8 6-12 12-12s10.2 4 12 12" />
        <circle cx="8" cy="20" r="4" />
        <circle cx="36" cy="20" r="4" />
        <path d="M2 37c1-5 3.8-8 8-9M42 37c-1-5-3.8-8-8-9" />
      </>
    ),
    shield: (
      <>
        <path d="M22 4 38 10v12c0 10-6.5 16-16 20C12.5 38 6 32 6 22V10L22 4Z" />
        <path d="m15 23 5 5 10-12" />
      </>
    ),
  };

  return (
    <svg className="stat-icon" viewBox="0 0 44 44" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section stats-section" ref={ref}>
      <p className="eyebrow">TT Facts</p>
      <h2>Our Team Believes That Numbers Don't Lie</h2>
      <p>unless you let the intern write the SQL query</p>
      <div className="stats-grid">
        {statItems.map((item) => (
          <Stat key={item.label} item={item} active={active} />
        ))}
      </div>
    </section>
  );
}

function ClientSlider() {
  return (
    <section className="clients">
      <h2>Trusted By</h2>
      <div className="client-slider" aria-label="Client logo slider">
        <div className="client-track">
          {sliderImages.map((slide) => (
            <img key={slide.image} src={assets(slide.image)} alt={slide.alt} />
          ))}
        </div>
        <div className="slider-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="services-page section" id="services">
      <div className="services-hero-card">
        <div className="grid-bg" aria-hidden="true" />
        <div className="white-panel">
          <h2>Exclusive Services</h2>
          <p>
            Tshilidzi Technologies provides a variety of benefits tailored to your business needs.
            Our offerings include custom software solutions, an impactful digital business footprint,
            professional digital branding, and consulting services.
          </p>
        </div>
      </div>
      <div className="service-card-grid">
        {serviceCards.map((card) => (
          <article className="service-card" key={card.title}>
            <h3>{card.title}</h3>
            <img src={assets(card.image)} alt="" />
            <p>{card.text}</p>
            <a className="book-button" href="#contact">Book <span>›</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {portfolio.map((item) => (
          <article className="portfolio-item" key={item.name}>
            <img src={assets(item.image)} alt={`${item.name} website preview`} />
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <a
              className="line-link"
              href={item.url || "#contact"}
              target={item.url ? "_blank" : undefined}
              rel={item.url ? "noreferrer" : undefined}
            >
              {item.url ? "Visit Website" : "Get A Quote"}
            </a>
            <div className="portfolio-actions">
              <span>{item.tag}</span>
              <a href={item.url || "#contact"} target={item.url ? "_blank" : undefined} rel={item.url ? "noreferrer" : undefined}>
                {item.url ? "Visit Website" : "Project Enquiry"}
              </a>
              <a href="#contact">Get A Quote</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <div className="section about-copy">
        <h2>About</h2>
        <p>
          Tshilidzi Technologies is a full-scale ICT company that focuses on providing its clients
          with a solid and recognizable digital footprint, assisting SMMEs, start-ups, and established
          businesses to have a presence in the online world.
        </p>
        <p>
          We offer websites, e-commerce sites, software solutions, applications, advanced SEO,
          machine learning, AI solutions, and professional graphic design that gives every business
          a timeless social and professional presence.
        </p>
      </div>
      <div className="mission-vision">
        <div className="tech-texture" style={{ "--texture": `url(${assets("client-hero.png")})` }} />
        <article>
          <h3>Mission</h3>
          <p>
            Our mission is to create software solutions that deliver tangible value to our clients.
            We provide quality software with innovative features while offering cost-effective and
            efficient customer service.
          </p>
        </article>
        <article>
          <h3>Vision</h3>
          <p>
            Our vision is to create innovative and personalized software solutions that make a
            positive impact on our clients' businesses through collaboration, creativity, and
            meaningful relationships.
          </p>
        </article>
        <div className="tech-texture second" style={{ "--texture": `url(${assets("client-hero.png")})` }} />
      </div>
    </section>
  );
}

function Contact() {
  const serviceOptions = [
    "E-commerce Site",
    "Dynamic Website",
    "Blog Site",
    "Custom Business Profile",
    "Custom Logo Design",
    "Custom Brand Kit",
    "Custom Business Card",
    "Custom Flyer",
    "Client Consultation",
  ];

  const mailto = useMemo(
    () =>
      "mailto:info@tshilidzitechnologies.co.za?subject=Website%20enquiry%20from%20Tshilidzi%20Technologies%20site",
    [],
  );

  return (
    <section className="contact" id="contact">
      <div className="contact-visual" style={{ "--texture": `url(${assets("client-hero.png")})` }}>
        <img src={assets("logo-mark.png")} alt="Tshilidzi Technologies" />
        <div>
          <p>Let's build something timeless.</p>
          <span>Tell us what you need and we will shape the next step with you.</span>
        </div>
      </div>
      <form className="contact-form" action={mailto} method="post" encType="text/plain">
        <p className="form-kicker">Contact Us</p>
        <h2>Start your project</h2>
        <div className="form-row">
          <label className="field">
            <input name="name" placeholder=" " required />
            <span>Name *</span>
          </label>
          <label className="field">
            <input name="email" type="email" placeholder=" " required />
            <span>Email *</span>
          </label>
        </div>
        <label className="field">
          <input name="phone" placeholder=" " required />
          <span>Phone *</span>
        </label>
        <fieldset>
          <legend>Choose your required services: *</legend>
          {serviceOptions.map((option) => (
            <label className="checkbox" key={option}>
              <input type="checkbox" name="services" value={option} />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>
        <label className="field message-field">
          <textarea name="message" rows="4" placeholder=" " />
          <span>Message</span>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <img src={assets("logo-mark.png")} alt="" />
      <p>Tshilidzi Technologies</p>
      <div>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <small>© 2026 Tshilidzi Technologies. All rights reserved.</small>
    </footer>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen done={loaded} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <HomeServices />
        <Stats />
        <ClientSlider />
        <ServicesPage />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
