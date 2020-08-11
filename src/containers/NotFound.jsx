import React from "react";

const NotFound = () => {
  return (
    <section className="error">
      <section className="error__container">
        <h2>404</h2>
        <p>Página no encontrada</p>
        <button className="btn">Regresar</button>
      </section>
    </section>
  );
};

export default NotFound;
