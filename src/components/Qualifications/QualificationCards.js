import React from "react";
import Card from "react-bootstrap/Card";

function QualificationCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.degree}</Card.Title>
        <Card.Subtitle className="mb-2 " style={{ fontWeight: "bold"}}>
          {props.institution}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 " style={{ fontWeight: "bold", color: "var(--clr-primary)" }}>
          {props.results}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ fontWeight: "bold", color: "var(--clr-primary)" }}>
          {props.timeline}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default QualificationCards;