import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const COLUMNS = [
  {
    label: "Work",
    links: [
      { label: "RSWMS", href: "#projects" },
      { label: "GeoPulse", href: "#projects" },
      { label: "Portfolio", href: "#work" },
    ],
  },
  {
    label: "Achievements",
    links: [
      { label: "SIH 2024", href: "#achievements" },
      { label: "HackIndore", href: "#achievements" },
      { label: "HealthHack", href: "#achievements" },
      { label: "JEE 2022", href: "#achievements" },
    ],
  },
  {
    label: "Connect",
    links: [
      { label: "Email", href: "mailto:mohitsonip1847@gmail.com" },
      { label: "GitHub", href: "https://github.com/your-username", ext: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/your-username", ext: true },
      { label: "LeetCode", href: "https://leetcode.com/your-username", ext: true },
    ],
  },
];

const ICONS = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    svg: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    svg: (
      <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.2 8.5h3.5V21H3.2V8.5Zm5.5 0h3.36v1.7h.05c.47-.9 1.6-1.85 3.3-1.85 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-5.5c0-1.31-.02-3-1.82-3-1.83 0-2.1 1.43-2.1 2.9V21H8.7V8.5Z" />
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/your-username",
    stroke: true,
    svg: <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />,
  },
  {
    label: "GeeksforGeeks",
    href: "https://geeksforgeeks.org/user/your-username",
    stroke: true,
    svg: <><path d="M4 9l4 3-4 3" /><path d="M11 16h5" /></>,
  },
];

export default function Footer() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className={`site-footer ${visible ? "is-visible" : ""}`}>
      <Container>
        <Row className="footer__top g-4">
          {/* ---- Brand ---- */}
          <Col xs={12} lg={4} className="reveal">
            <p className="footer__name">Mohit Soni</p>
            <p className="footer__tagline">Web Developer · Freelancer</p>
            <div className="footer__icons">
              {ICONS.map((icon) => (
                <a
                  key={icon.label}
                  href={icon.href}
                  className="footer__icon"
                  aria-label={icon.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={icon.stroke ? "none" : "currentColor"}
                    stroke={icon.stroke ? "currentColor" : "none"}
                    strokeWidth={icon.stroke ? 2 : 0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icon.svg}
                  </svg>
                </a>
              ))}
            </div>
          </Col>

          {/* ---- Link columns ---- */}
          <Col xs={12} lg={8}>
            <Row className="g-4">
              {COLUMNS.map((col, i) => (
                <Col
                  xs={6}
                  sm={4}
                  key={col.label}
                  className="footer__col reveal"
                  style={{ transitionDelay: `${0.06 + i * 0.06}s` }}
                >
                  <p className="footer__col-label">{col.label}</p>
                  <ul className="footer__links">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          className="footer__link"
                          href={link.href}
                          {...(link.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">© 2025 Mohit Soni</p>
          <p className="footer__built">Feel free to reach out!</p>
        </div>
      </Container>
    </footer>
  );
}