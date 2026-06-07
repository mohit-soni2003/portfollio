import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

/* Section ids must match the `id` on each <section> in your page */
const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("work");
  const [expanded, setExpanded] = useState(false);
  const [dark, setDark] = useState(false);

  /* Add a hairline border once the user scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the link of the section currently in view (scrollspy) */
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = () => setExpanded(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    if (next) {
      root.setAttribute("data-theme", "dark");
      root.setAttribute("data-bs-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      root.removeAttribute("data-bs-theme");
    }
  };

  return (
    <Navbar 
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}
    >
      <Container className="site-nav__inner">
        <Navbar.Brand href="#work" className="site-nav__brand" onClick={close}>
          Mohit Soni
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="site-nav__toggle">
          <span className="site-nav__burger" />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto site-nav__links">
            {LINKS.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                active={active === link.id}
                onClick={close}
                className="site-nav__link"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="site-nav__actions">
            <button
              type="button"
              className="site-nav__theme"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>

            <Button
              variant="outline-primary"
              href="/Mohit_CSE_Resume.pdf"
              className="site-nav__resume"
              onClick={close}
              target="_blank"
            >
              Resume
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}