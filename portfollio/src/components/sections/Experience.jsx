import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Experience.css";

const EXPERIENCE = [
  {
    company: "Freelance",
    role: "RSWMS Works Management System",
    meta: "Jan 2025 — Jul 2025",
    tags: ["React", "Node", "Express", "MongoDB"],
    description:
      "Built a responsive MERN platform with JWT + email-OTP auth, a configurable salary management system, and an end-to-end Document Forwarding System; deployed on Vercel with 99.9% uptime.",
    link: { label: "raneandsons.com", href: "https://raneandsons.com" },
  },
  {
    company: "Walkover Web Solutions Pvt Ltd",
    role: "Integration Solution Engineer Intern",
    meta: "Feb 2026 — May 2026 · Indore",
    tags: [],
    description:
      "Built secure third-party integrations (OAuth2, API key, token auth) and real-time/scheduled triggers and actions powering scalable automation workflows.",
    link: null,
  },
];

function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Experience() {
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
      id="experience"
      ref={ref}
      className={`experience ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <p className="section-label reveal">
          <span className="section-label__index">03</span>
          <span className="section-label__line" aria-hidden="true" />
          Experience
        </p>

        <div className="exp__list">
          {EXPERIENCE.map((job, i) => (
            <Row
              key={job.company}
              className="exp__item g-4 reveal"
              style={{ transitionDelay: `${0.08 + i * 0.1}s` }}
            >
              {/* ---- Left: who / when ---- */}
              <Col lg={4}>
                <p className="exp__company">{job.company}</p>
                <p className="exp__role">{job.role}</p>
                <p className="exp__meta">{job.meta}</p>

                {job.tags.length > 0 && (
                  <div className="exp__tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="exp__tag">{tag}</span>
                    ))}
                  </div>
                )}
              </Col>

              {/* ---- Right: what ---- */}
              <Col lg={8}>
                <p className="exp__desc">{job.description}</p>
                {job.link && (
                  <a
                    className="exp__link"
                    href={job.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {job.link.label}
                    <ArrowIcon />
                  </a>
                )}
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}