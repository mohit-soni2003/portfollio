import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Achievements.css";

const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024 — Finalist",
    note: "Top 6 teams in India",
    cert: "#",
  },
  {
    title: "HackIndore Hackathon — Finalist",
    note: "Top 80 of 1,700+ teams nationwide",
    cert: "#",
  },
  {
    title: "Medecro HealthHack 2024 — Finalist",
    note: "Reached the grand finale",
    cert: "#",
  },
  {
    title: "JEE 2022 — 95.2 percentile",
    note: "AIR 43,280",
    cert: null,
  },
];

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Achievements() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={ref}
      className={`achievements ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <p className="section-label reveal">
          <span className="section-label__index">05</span>
          <span className="section-label__line" aria-hidden="true" />
          Achievements
        </p>

        <h2 className="achievements__title reveal" style={{ transitionDelay: ".06s" }}>
          Recognition
        </h2>

        <Row className="g-3">
          {ACHIEVEMENTS.map((item, i) => (
            <Col md={6} key={item.title}>
              <article
                className="ach-card reveal"
                style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
              >
                <div className="ach-card__main">
                  <span className="ach-card__dot" aria-hidden="true" />
                  <div>
                    <p className="ach-card__title">{item.title}</p>
                    <p className="ach-card__note">{item.note}</p>
                  </div>
                </div>

                {item.cert && (
                  <a
                    className="ach-card__cert"
                    href={item.cert}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View cert <ArrowIcon />
                  </a>
                )}
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}