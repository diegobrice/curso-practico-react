import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/Carousel.scss";
import playImg from "../assets/static/play.png";
// import plusImg from "../assets/static/plus.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => {
  return (
    <div className="carousel__item">
      <img src={cover} alt={title} />
      <div className="carousel-item__details">
        <div className="carousel-item__details--iconos">
          <img src={playImg} alt="play" />
          {/* <img src={plusImg} alt="plus" /> */}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
