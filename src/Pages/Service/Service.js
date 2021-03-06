import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { img, title, description, difficulty, time, price, id } = service;
  return (
    <Col className="mb-3">
      <div class="card">
        <div class="content">
          <div class="front">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={img} />

                <Card.Title className="text-center my-2 text-success">
                  {title}
                </Card.Title>
                <Card.Text className="border my-3 py-3 text-center rounded">
                  <h6>{time} Days time</h6>
                  <h6>{description}</h6>
                  <h6>Difficulty: {difficulty} </h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="back">
            <div>
              <h1>Price: ${price}</h1>

              <Link to={"/service/" + id}>
                <button className="border-0 p-3 w-100 rounded book-btn">
                  Book Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Service;
