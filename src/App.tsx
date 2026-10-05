import { useEffect, useState } from "react";
import estherPortrait from "./assets/esther-udoh.jpg";

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
);

const ArrowDown = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4v16m-6-6 6 6 6-6" />
  </svg>
);

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

const education = [
  {
    period: "2021 — 2025",
    title: "B.Sc. (Ed) Chemistry",
    place: "Ignatius Ajuru University of Education",
    location: "Rumuolumeni, Port Harcourt",
  },
  {
    period: "2012 — 2018",
    title: "West African Examination Certificate",
    place: "Apostolic Faith Science Secondary School",
    location: "Akwa Ibom State",
  },
];

const experience = [
  {
    year: "2023",
    role: "Student Teacher",
    company: "Community Secondary School",
    place: "Nihi, Etche, Rivers State",
    number: "01",
  },
  {
    year: "2018",
    role: "Sales Representative",
    company: "God's Own Supermarket",
    place: "Uyo, Akwa Ibom State",
    number: "02",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    const handlePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointer, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Esther Udoh home" onClick={closeMenu}>
          <span>EU</span>
          <strong>Esther Udoh</strong>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight /></a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-index">PORTFOLIO / 2025</div>
          <div className="eyebrow hero-eyebrow"><span /> Educator · Communicator · Professional</div>
          <h1><span>Creating impact</span><br />with <em>purpose.</em></h1>
          <p className="hero-intro">
            I’m Esther, a chemistry educator and people-focused professional based in Port Harcourt. I bring curiosity, warmth, and a strong sense of responsibility to every opportunity.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="mailto:estherudoh710@gmail.com">Get in touch <ArrowUpRight /></a>
            <a className="text-link" href="#about">Discover my story <ArrowDown /></a>
          </div>
          <div className="hero-footnote">Available for new opportunities</div>
          <div className="hero-counter"><strong>01</strong><span>/ 05</span></div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Esther Basil Udoh">
          <div className="visual-word" aria-hidden="true">ESTHER</div>
          <div className="portrait-frame">
            <img src={estherPortrait} alt="Esther Basil Udoh smiling" />
          </div>
          <div className="portrait-caption">
            <span>Based in</span>
            <strong>Port Harcourt, NG</strong>
          </div>
          <div className="portrait-tag">Chemistry graduate<br />People person<br />Curious mind</div>
          <span className="decor-star">✦</span>
          <span className="decor-ring" />
          <span className="decor-ring second" />
        </div>
      </section>

      <div className="marquee" aria-label="Personal qualities">
        <div className="marquee-track">
          <span>Curious thinker</span><i>✦</i><span>Clear communicator</span><i>✦</i><span>Purpose-led</span><i>✦</i><span>Creative educator</span><i>✦</i>
          <span>Curious thinker</span><i>✦</i><span>Clear communicator</span><i>✦</i><span>Purpose-led</span><i>✦</i><span>Creative educator</span><i>✦</i>
        </div>
      </div>

      <section className="about section" id="about">
        <div className="section-label reveal"><span>01</span> About me</div>
        <div className="about-content reveal">
          <p className="statement">I believe meaningful work begins with an open mind and a genuine desire to <em>make a difference.</em></p>
          <div className="about-details">
            <p>I’m an enthusiastic and responsible professional with a talent for working independently and connecting with people from different backgrounds. My education in chemistry has shaped me into an observant, thoughtful problem-solver.</p>
            <p>Whether I’m in a classroom, collaborating with a team, or serving a customer, I bring patience, clear communication, and care to the work I do.</p>
          </div>
        </div>
        <div className="qualities reveal">
          <div><span>01</span><strong>Clear<br />communicator</strong></div>
          <div><span>02</span><strong>Adaptable<br />team player</strong></div>
          <div><span>03</span><strong>Curious<br />problem-solver</strong></div>
          <div><span>04</span><strong>Purpose-led<br />professional</strong></div>
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="capabilities-head reveal">
          <div className="section-label"><span>02</span> What I bring</div>
          <h2>Skills shaped by<br /><em>curiosity & care.</em></h2>
          <p>A thoughtful blend of scientific thinking, human connection, and dependable execution.</p>
        </div>
        <div className="bento-grid">
          <article className="bento-card bento-feature reveal">
            <span className="bento-number">01 / EDUCATION</span>
            <div className="atom" aria-hidden="true">
              <span /><span /><span /><i />
            </div>
            <div>
              <h3>Science communication</h3>
              <p>Turning complex chemistry concepts into clear, engaging lessons that help learners build confidence.</p>
            </div>
          </article>
          <article className="bento-card bento-coral reveal">
            <span className="bento-number">02 / PEOPLE</span>
            <div className="card-symbol">Aa</div>
            <div>
              <h3>Communication</h3>
              <p>Listening well, speaking clearly, and connecting across different backgrounds.</p>
            </div>
          </article>
          <article className="bento-card bento-lime reveal">
            <span className="bento-number">03 / MINDSET</span>
            <div className="big-stat">100<sup>%</sup></div>
            <div>
              <h3>Open to learning</h3>
              <p>Quick to adapt, eager to improve, and comfortable taking initiative.</p>
            </div>
          </article>
          <article className="bento-card bento-wide reveal">
            <span className="bento-number">04 / STRENGTH</span>
            <div className="wide-copy">
              <h3>Reliable from first idea to final detail.</h3>
              <div className="skill-chips">
                <span>Teaching</span><span>Teamwork</span><span>Customer care</span><span>Problem solving</span>
              </div>
            </div>
            <ArrowUpRight className="bento-arrow" />
          </article>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label light reveal"><span>03</span> Experience</div>
        <div className="experience-heading reveal">
          <h2>Where I’ve<br /><em>made an impact.</em></h2>
          <p>Each role has strengthened my ability to connect, communicate, and contribute with confidence.</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-row reveal" key={item.role}>
              <span className="row-number">{item.number}</span>
              <div className="role"><h3>{item.role}</h3><span>{item.year}</span></div>
              <div className="company"><strong>{item.company}</strong><span>{item.place}</span></div>
              <ArrowUpRight className="row-arrow" />
            </article>
          ))}
        </div>
        <div className="manifesto reveal">
          <span className="quote-mark">“</span>
          <blockquote>I don’t just want to fill a role. I want to learn deeply, contribute meaningfully, and leave every space better than I found it.</blockquote>
          <span className="signature">— Esther Basil Udoh</span>
        </div>
      </section>

      <section className="education section" id="education">
        <div className="section-label reveal"><span>04</span> Education</div>
        <div className="education-layout">
          <div className="education-title reveal">
            <h2>Learning is a<br /><em>lifelong practice.</em></h2>
            <div className="chemistry-mark" aria-hidden="true"><span>Ch</span><small>27</small></div>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-card reveal" key={item.period}>
                <span className="period">{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.place}<br />{item.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-top reveal">
          <div className="section-label light"><span>05</span> Contact</div>
          <p>Have an opportunity, an idea, or simply want to connect?</p>
        </div>
        <div className="contact-main reveal">
          <h2>Let’s create<br />something <em>meaningful.</em></h2>
          <a className="contact-circle" href="mailto:estherudoh710@gmail.com" aria-label="Email Esther"><ArrowUpRight /></a>
        </div>
        <div className="contact-grid reveal">
          <a href="mailto:estherudoh710@gmail.com"><span>Email</span><strong>estherudoh710@gmail.com</strong></a>
          <a href="tel:+2348084819014"><span>Phone</span><strong>080 8481 9014</strong></a>
          <a href="https://maps.google.com/?q=22+Ogbogoro+Port+Harcourt+Rivers+State" target="_blank" rel="noreferrer"><span>Location</span><strong>22 Ogbogoro, Port Harcourt<br />Rivers State</strong></a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Esther Basil Udoh</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
