import React from "react";
import { Col, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { img, title, description, difficulty, time } = service;
  return (
    <Col className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <h6>{time} Days time</h6>
            <h6>{description}</h6>
            <h6>Difficulty: {difficulty} </h6>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button>Book Now</button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
