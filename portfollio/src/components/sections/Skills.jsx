import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Skills.css";

const EDUCATION = [
  {
    title: "B.E. Computer Engineering",
    place: "IET (DAVV), Indore",
    meta: "2022 — 2026 · CGPA 8.29/10",
    current: true,
  },
  {
    title: "12th — MPBSE",
    place: "Shree Neema Vidhya Niketan",
    meta: "84%",
  },
  {
    title: "10th — CBSE",
    place: "Chameli Devi Public School",
    meta: "84%",
  },
];

const SKILL_GROUPS = [
  { label: "Languages", items: ["Java (primary)", "JavaScript", "SQL"] },
  { label: "Frameworks / Libraries", items: ["React.js", "Node.js", "Express.js", "Bootstrap", "Zustand"] },
  { label: "Databases", items: ["MySQL", "MongoDB", "MongoDB Atlas"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman"] },
  { label: "Coursework", items: ["DSA", "OOP", "DBMS", "Operating Systems"] },
  { label: "Profiles", items: ["LeetCode", "GeeksforGeeks"] },
];

export default function Skills() {
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
      id="skills"
      ref={ref}
      className={`skills ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <p className="section-label reveal">
          <span className="section-label__index">02</span>
          <span className="section-label__line" aria-hidden="true" />
          Skills &amp; Education
        </p>

        <Row className="g-5">
          {/* ---- Education ---- */}
          <Col lg={5}>
            <h2 className="skills__heading reveal" style={{ transitionDelay: ".05s" }}>
              Education
            </h2>
            <ul className="timeline">
              {EDUCATION.map((item, i) => (
                <li
                  key={item.title}
                  className={`timeline__item reveal ${item.current ? "timeline__item--current" : ""}`}
                  style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
                >
                  <div className="timeline__marker" aria-hidden="true" />
                  <div className="timeline__body">
                    <p className="timeline__title">{item.title}</p>
                    <p className="timeline__place">{item.place}</p>
                    <p className="timeline__meta">{item.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>

          {/* ---- Skills ---- */}
          <Col lg={7}>
            <h2 className="skills__heading reveal" style={{ transitionDelay: ".05s" }}>
              Skills
            </h2>
            {SKILL_GROUPS.map((group, i) => (
              <div
                key={group.label}
                className="skill-group reveal"
                style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
              >
                <p className="skill-group__label">{group.label}</p>
                <div className="skill-group__chips">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}