import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";

const STATS = [
  { num: "8.29/10", label: "CGPA — IET DAVV" },
  { num: "300+", label: "DSA problems solved" },
  { num: "Top 6", label: "SIH 2024 — in India" },
  { num: "2", label: "Products shipped" },
];

export default function About() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`about ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <Row className="align-items-center g-5">
          {/* ---- Left: copy ---- */}
          <Col lg={6}>
            <p className="section-label reveal" style={{ transitionDelay: "0s" }}>
              <span className="section-label__index">01</span>
              <span className="section-label__line" aria-hidden="true" />
              About
            </p>

            <h2 className="about__title reveal" style={{ transitionDelay: ".08s" }}>
              Engineer by degree, builder by choice.
            </h2>

            <p className="about__text reveal" style={{ transitionDelay: ".16s" }}>
              I'm a Computer Engineering graduate and full-stack developer who likes building things people actually use. I've delivered a live works-management platform for a real client, engineered IoT asset-tracking with ESP32 and MongoDB, and reached the finals of national hackathons like SIH 2024. I care about clean architecture, secure auth, and interfaces that feel effortless — and I'm ready to bring that into a full-time team.
            </p>
          </Col>

          {/* ---- Right: stats ---- */}
          <Col lg={6}>
            <Row className="g-3">
              {STATS.map((stat, i) => (
                <Col xs={6} key={stat.label}>
                  <div
                    className="stat-card reveal"
                    style={{ transitionDelay: `${0.12 + i * 0.08}s` }}
                  >
                    <p className="stat-card__num">{stat.num}</p>
                    <p className="stat-card__label">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}