import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image from "../images/asus.webp";
import img from "../images/hp7.webp";
import pic from "../images/lenovo.webp";

// Custom Arrows for Carousel
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  return (
    <div>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        prevArrow={<CustomPrevArrow />}
        nextArrow={<CustomNextArrow />}
      >
        <div className="carousel">
          <img
            src={image}
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="carousel">
          <img
            src={img}
            alt="Slide 2"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
        <div className="carousel">
          <img
            src={pic}
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel