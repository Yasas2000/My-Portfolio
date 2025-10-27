import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import Portfolio from "../../Assets/Projects/Portfolio.jpg";
import Ecart from "../../Assets/Projects/boxing.webp";
import Mi from "../../Assets/Projects/mi.webp";
import Cyber from "../../Assets/Projects/cyber.jpeg";
import Emotion from "../../Assets/Projects/emotion.jpg";
import Bus from "../../Assets/Projects/bus.png";
import Todo from "../../Assets/Projects/todo.webp";
import Resume from "../../Assets/Projects/resume.jpg";


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
              title="Automated Boxing Traner 2021"
              description="This project was about an Automated Boxing Trainer Machine using  ATmega 32 and C embedded system. That was implemented to address the need for a trainer during boxing training."
              ghLink="https://github.com/Yasas2000/L1-project-"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Photoboothme Mobile App 2022"
              description="This system involves the development of a mobile app and web admin panel for event photography and donation services provided by PhotoBoothMe.lk using MongoDb, Flutter ,NodeJS"
              ghLink="https://github.com/Yasas2000/Level-2-project-ChildishThings"
              //demoLink="https://rahuljha.tech/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Cyber}
              title="Detection System for Online Safety Against Cyber Threats and Social Engineering Attacks 2024-2025"
              description="Developed an intelligent detection system to identify and mitigate manipulative behavior and
fraudulent activity in real-time conversations. The project targeted social engineering attacks
conducted through chat and audio messages by both humans and web bots, leveraging cutting edge AI to safeguard users."
            />
          </Col>
      
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Mi}
              title="WSO2 MI VSCode Extension 2024"
              description="WSO2 Micro Integrator Visual Studio Code extension (MI for VSCode) is a comprehensive
integration solution that simplifies your digital transformation journey. It streamlines connectivity
among applications, services, data, and the cloud using a user-friendly low-code graphical
designing experience."
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Emotion}
              title="Emotion Aware Summarization System 2025"
              description="An open-source NLP project that performs emotion-aware summarization using transformer-based models. The system detects fine-grained emotions in text using a RoBERTa-based classifier and generates summaries conditioned on those emotions using an emotion-tagged BART model."
              ghLink="https://github.com/Yasas2000/emotion-summarizer.git"
              demoLink="https://emotion-summarizer-nlp.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Mi}
              title="Intelligend Document Process Mediator 2024"
              description="The Intelligent Document Process Mediator enhances the capabilities of WSO2 MI by
incorporating GPT-4 Vision processing. This mediator allows clients and developers to create
APIs that extract specific values from PDFs and various image formats based on a user-defined
schema"
              ghLink="https://github.com/Yasas2000/micro-integrator.git"
            />
          </Col>
      
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Bus}
              title="Bus-Ease Intelligent Route & Seat Reservation System 2025"
              description="Developed a web-based platform to streamline highway bus route searches and real-time seat
reservations. The system provides multi-leg trip planning, live seat availability, secure bookings,
and an admin panel for operators."
              demoLink="https://bus-ease-frontend.vercel.app/dashboard"
              ghLink="https://drive.google.com/drive/folders/1MqJ0ZJGcPAzQ7x4q6v91RA1IJzkEmABH?usp=sharing"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              title="Full-Stack Todo Task Manager"
              description="A production-ready full-stack web application for managing to-do tasks, built with Spring Boot, React, and PostgreSQL. Fully containerized with Docker for easy deployment."
              ghLink="https://github.com/Yasas2000/todo-app"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              title="AI-Powered Resume Search Chatbot"
              description="Created an AI-Powered Resume Search Chatbot using Retrieval 
              Augmented Generation (RAG) and NVIDIA NIM microservices to revolutionize candidate screening. 
              The system uses NVIDIA NeMo Retriever for semantic embeddings and Llama 3.1 70B for natural language generation, 
              enabling hiring managers to search resumes conversationally instead of using rigid keyword filters. Built with LangChain, 
              ChromaDB vector database, and Streamlit, the application provides intelligent candidate matching with AI-generated explanations 
              and one-click resume downloads."
              demoLink="https://ai-resume-search-chatbot.streamlit.app/"
              ghLink="https://github.com/Yasas2000/resume-chatbot"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
