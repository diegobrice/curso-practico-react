import React from "react";
import "../assets/styles/components/Carousel.scss";

const Categories = ({ children, title }) => {
  return (
    <div className="categories">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Categories;
