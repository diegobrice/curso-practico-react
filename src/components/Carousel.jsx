import React from "react";
import "../assets/styles/components/Carousel.scss";

const Carousel = ({ children }) => {
  return (
    <section className="container__music">
      <div className="carousel__container">{children}</div>
    </section>
  );
};

export default Carousel;
