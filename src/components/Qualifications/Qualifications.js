import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import QualificationCards from "./QualificationCards";
import "./qualification.css"; // Optional, for page-specific styles

function Qualification() {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">My <strong className="purple">Qualifications</strong></h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={4} className="project-card">
          <QualificationCards
            degree="B.Sc. (Hons) in Information Technology"
            institution="Faculty of IT, University of Moratuwa, Sri Lanka"
            results="First Class Honours CGPA:3.82"
            description="Focused on algorithms, software development, and AI. Completed a final year project on machine learning models for real time social engineering attack detection."
            timeline="2021 - 2025"
          />
        </Col>

        <Col md={4} className="project-card">
          <QualificationCards
            degree="G.C.E. Advanced Level"
            institution="Richmond College, Galle"
            description="Physical Stream with A in Mathematics, B in Physics, and A in Chemistry."
            timeline="2017 - 2019"
            results="Z Score: 1.76"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Qualification;