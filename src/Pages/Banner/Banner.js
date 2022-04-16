import React, { useState } from "react";
import banner1 from "../../Images/banner/b1.jpg";
import banner4 from "../../Images/banner/b2.jpg";
import banner3 from "../../Images/banner/b3.jpg";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=" mb-4 container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h2 className="mb-3">Live adventures like you never have before</h2>
            <h5 className="mb-5">It is the chance to explore the world.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Second slide" />
          <Carousel.Caption>
            <h2 className="mb-3">Explore the world</h2>
            <h5 className="mb-5">
              It is the best opportunity for you to explore around you
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h2 className="mb-3">You're going to fall in love with nature</h2>
            <h5 className="mb-5">Let's give yourself some refreshment</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
