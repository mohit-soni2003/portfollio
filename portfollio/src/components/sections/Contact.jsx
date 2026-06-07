import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  { label: "LeetCode", href: "https://leetcode.com/your-username" },
];

export default function Contact() {
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
      id="contact"
      ref={ref}
      className={`contact ${visible ? "is-visible" : ""}`}
    >
      <Container>
        <p className="section-label reveal">
          <span className="section-label__index">07</span>
          <span className="section-label__line" aria-hidden="true" />
          Contact
        </p>

        <h2 className="contact__title reveal" style={{ transitionDelay: ".06s" }}>
          Let's talk
        </h2>

        <Row className="g-5">
          {/* ---- Left: details ---- */}
          <Col lg={4}>
            <div className="contact__group reveal" style={{ transitionDelay: ".1s" }}>
              <p className="contact__label">Email</p>
              <a className="contact__link" href="mailto:mohitsonip1847@gmail.com">
                mohitsonip1847@gmail.com
              </a>
            </div>

            <div className="contact__group reveal" style={{ transitionDelay: ".16s" }}>
              <p className="contact__label">Phone</p>
              <p className="contact__plain">+91 9589571577</p>
            </div>

            <div className="contact__group reveal" style={{ transitionDelay: ".22s" }}>
              <p className="contact__label">WhatsApp</p>
              <a className="contact__link" href="https://wa.me/919589571577" target="_blank" rel="noreferrer">
                +91 9589571577
              </a>
            </div>

            <div className="contact__group contact__group--social reveal" style={{ transitionDelay: ".28s" }}>
              <p className="contact__label">Find me on</p>
              <div className="contact__socials">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__social">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* ---- Right: form (design only) ---- */}
          <Col lg={8}>
            {/* Replace action with your Formspree endpoint, e.g. https://formspree.io/f/abcd1234 */}
            <Form
              className="contact__form reveal"
              style={{ transitionDelay: ".14s" }}
              action="YOUR_FORM_ENDPOINT"
              method="POST"
            >
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label className="contact__flabel" htmlFor="cf-name">Name</Form.Label>
                  <Form.Control id="cf-name" name="name" type="text" />
                </Col>
                <Col md={6}>
                  <Form.Label className="contact__flabel" htmlFor="cf-email">Email</Form.Label>
                  <Form.Control id="cf-email" name="email" type="email" />
                </Col>

                <Col md={6}>
                  <Form.Label className="contact__flabel" htmlFor="cf-phone">Phone</Form.Label>
                  <Form.Control id="cf-phone" name="phone" type="tel" />
                </Col>
                <Col md={6}>
                  <Form.Label className="contact__flabel" htmlFor="cf-subject">Subject</Form.Label>
                  <Form.Control id="cf-subject" name="subject" type="text" />
                </Col>

                <Col xs={12}>
                  <Form.Label className="contact__flabel" htmlFor="cf-message">Message</Form.Label>
                  <Form.Control id="cf-message" name="message" as="textarea" rows={5} />
                </Col>
              </Row>

              <Button type="submit" className="contact__submit">
                Send message →
              </Button>

              <p className="contact__note">
                Open to full-time roles and freelance work — I usually reply within 24 hours.              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}