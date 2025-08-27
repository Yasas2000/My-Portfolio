import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillMediumSquare,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm an{" "}
              <i className="primary-header">
                IT Undergraduate at the University of Moratuwa, Faculty of
                Information Technology
              </i>{" "}
              with hands-on experience in software engineering and AI-driven
              applications.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">
                Artificial Intelligence, NLP, and Intelligent Systems
              </i>{" "}
              and love building scalable solutions.
              <br />
              <br />I have strong interests in{" "}
              <i className="primary-header">
                Mathematics, Algorithms, and System Design
              </i>
              , which I apply in my projects and research.
              <br />
              <br />
              I’ve worked on{" "}
              <i className="primary-header">
                AI-powered Mediators, VS Code Extensions, and NLP Projects
              </i>{" "}
              during my internship at WSO2 and through academic work.
              <br />
              <br />
              Skilled in{" "}
              <i className="primary-header">
                Java, Python, Node.js, MongoDB
              </i>{" "}
              and modern frameworks like{" "}
              <i className="primary-header">React.js and Flutter</i>.
              <br />
              <br />
              Currently expanding my portfolio by developing more{" "}
              <i className="primary-header">AI and full-stack projects</i> that
              solve real-world problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Yasas2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100005462913393&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yasasmanujayaekanayake@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yasas-manujaya-ekanayaka-a0a962231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@ymeka2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillMediumSquare />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
