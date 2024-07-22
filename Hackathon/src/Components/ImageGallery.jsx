import React from "react";
import Carousel from "better-react-carousel";
import "./ImageGallery.css";
import image1 from "../assets/image1.jpeg";
import land1 from "../assets/land1.avif";
import land3 from "../assets/land3.jpg";
import about from "../assets/about.jpg";
import apt from "../assets/apt.jpg";
import land from "../assets/land.jpg";

const Images = () => {
  return (
    <div className="imagegallery">
      <Carousel
        cols={2}
        rows={1}
        gap={0}
        loop
        autoPlay={2000}
        showDots
        className="images-carousel"
      >
        <Carousel.Item>
          <img className="carousel-image" src={land} alt="Land 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={image1} alt="Land 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src={land1} alt="House 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={about} alt="House 2" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="carousel-image" src={land3} alt="Apartment 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={apt} alt="Apartment 2" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Images;
