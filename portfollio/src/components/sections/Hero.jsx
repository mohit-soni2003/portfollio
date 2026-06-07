import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Hero.css";

const TAGS = ["Java", "React", "Node.js", "Express", "MongoDB"];

export default function Hero() {
  return (
    <section id="work" className="hero">
      <Container>
        <Row className="align-items-center g-5">
          {/* ---- Text column ---- */}
          <Col lg={6} className="hero__content">
            <p className="hero__status hero__reveal" style={{ animationDelay: "0s" }}>
              <span className="hero__dot" aria-hidden="true" />
              Open to work
            </p>

            <h1 className="hero__name hero__reveal" style={{ animationDelay: ".08s" }}>
              Mohit
              <span className="hero__name-accent">Soni</span>
            </h1>

            <p className="hero__tagline hero__reveal" style={{ animationDelay: ".16s" }}>
              Full-stack &amp; MERN developer building real-world products.
            </p>

            <p className="hero__blurb hero__reveal" style={{ animationDelay: ".24s" }}>
              Final-year Computer Engineering student at IET DAVV. I ship production
              web apps with React, Node, and MongoDB — from a live works-management
              platform to an IoT asset-tracking system.
            </p>

            <div className="hero__tags hero__reveal" style={{ animationDelay: ".32s" }}>
              {TAGS.map((tag) => (
                <span key={tag} className="hero__tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero__actions hero__reveal" style={{ animationDelay: ".4s" }}>
              <Button variant="primary" href="#projects" className="hero__btn-primary">
                View work
              </Button>
              <Button variant="outline-secondary" href="#contact" className="hero__btn-outline">
                Get in touch
              </Button>
            </div>
          </Col>

          {/* ---- Photo column ---- */}
          <Col lg={6} className="hero__media hero__reveal" style={{ animationDelay: ".2s" }}>
            <div className="hero__photo-wrap">
              <span className="hero__photo-fallback" aria-hidden="true">MS</span>
              <img
                className="hero__photo"
                src="/images/Mohit_hero.png"
                alt="Mohit Soni"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}