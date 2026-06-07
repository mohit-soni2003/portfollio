import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";

const PROJECTS = [
  {
    title: "RSWMS",
    meta: "Works Management System",
    description:
      "A live MERN platform managing agreements, billing, payroll, and document workflows for a real client. Handles multi-role access, real-time document forwarding, and integrated salary computation.",
    tags: ["React", "Node", "Express", "MongoDB", "JWT"],
    live: "https://raneandsons.com",
    github: "https://github.com/your-username/rswms",
  },
  {
    title: "GeoPulse",
    meta: "Apr — Jun 2025",
    description:
      "Real-time asset tracking with live GPS from ESP32 devices, geofence configuration, and role-based admin/user dashboards. Streams live telemetry over WebSockets with persistent MongoDB Atlas storage.",
    tags: ["React", "Node", "Express", "MongoDB Atlas", "ESP32", "Zustand"],
    live: null,
    github: "https://github.com/your-username/geopulse",
  },
  {
    title: "Portfolio Website",
    meta: "2025",
    description:
      "This site — designed and built from scratch as a personal brand and project showcase. Focused on editorial typography, generous whitespace, and a clear information hierarchy.",
    tags: ["React", "React-Bootstrap"],
    live: "https://mohitsoni.vercel.app",
    github: "https://github.com/your-username/portfolio",
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
function GitIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.4" />
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="8" r="2.4" />
      <path d="M6 8.4v7.2M18 10.4c0 4-4 3.6-6 5.2" />
    </svg>
  );
}

export default function Projects() {
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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className={`projects ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <p className="section-label reveal">
          <span className="section-label__index">04</span>
          <span className="section-label__line" aria-hidden="true" />
          Projects
        </p>

        <h2 className="projects__title reveal" style={{ transitionDelay: ".06s" }}>
          Selected work
        </h2>

        <Row className="g-4">
          {PROJECTS.map((project, i) => (
            <Col md={6} lg={4} key={project.title}>
              <article
                className="proj-card reveal"
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <h3 className="proj-card__title">{project.title}</h3>
                <p className="proj-card__meta">{project.meta}</p>
                <p className="proj-card__desc">{project.description}</p>

                <div className="proj-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="proj-tag">{tag}</span>
                  ))}
                </div>

                <div className="proj-card__links">
                  {project.live && (
                    <a
                      className="proj-link proj-link--live"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowIcon /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="proj-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitIcon /> GitHub
                    </a>
                  )}
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}