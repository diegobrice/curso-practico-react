import React from "react";
import "../assets/styles/components/Search.scss";

const Search = () => {
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres escuchar hoy?</h2>
      <input className="input" type="text" placeholder="Buscar..." />
    </section>
  );
};

export default Search;
