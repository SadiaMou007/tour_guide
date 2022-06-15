import React from "react";
import { Row, Col } from "react-bootstrap";
import user from "../../Images/SocialIcons/user.png";
import "./About.css";

const About = () => {
  return (
    <div className="container min-vh-100">
      <Row className="bg-light rounded pb-5">
        <Col
          sm={12}
          lg={12}
          md={12}
          className=" d-flex justify-content-center align-items-center review-container"
        >
          <div className="pt-5">
            {" "}
            <img src={user} alt="" className="" />
          </div>
        </Col>
        <Col
          sm={12}
          lg={12}
          md={12}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <div className="rounded w-50 b">
            <h4 className="text-info">I'm Sadia Islam</h4>
            <p>
              I want to be a self-motivated, skilled web developer who always
              keeps myself up-to-date with the latest technologies. I can adapt
              to any technology rapidly making myself flexible upon any tech
              stack.
            </p>
            <p>
              I like to learn new things. To achieve my goals I work hard and
              follow a regular routine for my skill development activities. I
              believe that, this habit will leads me as a passionate and
              diligent web developer.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
