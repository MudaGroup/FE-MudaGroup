import React from "react";
import heroImage1 from "/public/img/Dummy/Dummy1.jpeg";
import { Carousel } from "react-bootstrap";
import "/src/App.css"
import { Contractor } from "../component/contractor";

export const Home = () => {
  return (
    <div className="homepage">
      <header className="header-box">
        <Carousel>
          <Carousel.Item>
            <img className="d-block 2-100" 
            src={heroImage1} 
            alt="Image-Header" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block 2-100" 
            src={heroImage1} 
            alt="Image-Header" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block 2-100" 
            src={heroImage1} 
            alt="Image-Header" />
          </Carousel.Item>
        </Carousel>
      </header>

      <Contractor />
    </div>
  );
};
