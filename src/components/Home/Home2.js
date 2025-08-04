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
              I'm a <i className="primary-header">
                IT Undergraduate Student of University of Moratuwa Faculty of Information Technology
              </i>{" "}
              who loves solving problems and building apps.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">AI and Gaming Industry</i> and love to learn
              new things.
              <br />
              <br />I am more interested in 
              <i>
                <i className="primary-header"> Mathematics and Algorithms .</i>
              </i>
              <br />
              <br />I always apply my experience in developing products with{" "}
              <i className="primary-header">Node.js, MongoDb</i> and Modern Javascript
              Library and Framework like
              <i className="primary-header"> React.js and  Flutter </i>
              <br />
              <br />
              Currently expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i> that I can add
              here.
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
                  href="mailto:ymeka2000@gmail.com"
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
                  href="https://www.linkedin.com/in/yasas-manujaya-a0a962231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEZsXKS3HSD2hbMAOYAxJwA%3D%3D"
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
