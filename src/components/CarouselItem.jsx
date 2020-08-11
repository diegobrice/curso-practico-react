import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/Carousel.scss";
import playImg from "../assets/static/play.png";
import plusImg from "../assets/static/plus.png";
import { Link } from "react-router-dom";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel__item">
      <img src={cover} alt={title} />
      <div className="carousel-item__details">
        <div className="carousel-item__details--iconos">
          <Link to={`/player/${id}`}>
            <img src={playImg} alt="play" />
          </Link>
          {isList ? (
            <img
              src={playImg}
              alt="remove"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img src={plusImg} alt="plus" onClick={handleSetFavorite} />
          )}
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);
