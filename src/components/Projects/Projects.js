import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import Ecart from "../../Assets/Projects/boxing.webp";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Automated Boxing Traner"
              description="This project was about an Automated Boxing Trainer Machine using  ATmega 32 and C embedded system. That was implemented to address the need for a trainer during boxing training."
              ghLink="https://github.com/Yasas2000/L1-project-"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Photoboothme Mobile App"
              description="This system involves the development of a mobile app and web admin panel for event photography and donation services provided by PhotoBoothMe.lk using MongoDb, Flutter ,NodeJS"
              ghLink="https://github.com/Yasas2000/Level-2-project-ChildishThings"
              //demoLink="https://rahuljha.tech/"
            />
          </Col>
      
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
