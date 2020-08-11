import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerRequest } from "../actions";
import "../assets/styles/components/Login.scss";
import Header from "../components/Header";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="login">
        <section className="login__container">
          <h2>Registro</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
            <button className="button">Registrarme</button>
          </form>
          <p className="login__container--register">
            <Link to="/login">Iniciar Sesión</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchProps = {
  registerRequest,
};

export default connect(null, mapDispatchProps)(Register);
