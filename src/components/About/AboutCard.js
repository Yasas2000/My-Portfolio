import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in" style={{ textAlign: "justify", color: "var(--clr-txt)" }}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Yasas Ekanayake</span> from Galle, Sri Lanka. I am a Information Technology Undergraduate Student.
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing For Medium 
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Watching Tech Vlogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
