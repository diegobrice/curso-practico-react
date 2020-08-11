import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions";
import Header from "../components/Header";
import googleIcon from "../assets/static/google.png";
import twitterIcon from "../assets/static/twitter.png";
import "../assets/styles/components/Login.scss";

const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(form);
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isLogin />
      <section className="login">
        <section className="login__container">
          <h2>Login</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
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
            <button className="button">Iniciar Sesión</button>
            <div className="login__container--remenber">
              <label htmlFor="cbox1">
                <input type="checkbox" id="cbox1" value="checkbox" /> Recuerdame
              </label>
              <a href="">Olvide mi contraseña</a>
            </div>
          </form>
          <section className="login__container--socialmedia">
            <div>
              <img src={googleIcon} alt="google" />
              Iniciar sesion con Google
            </div>
            <div>
              <img src={twitterIcon} alt="twitter" />
              Iniciar sesion con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta
            <Link to="/register"> Registrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

// export default Login;
export default connect(null, mapDispatchToProps)(Login);
