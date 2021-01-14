import React, { useContext, useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js";
import { Container } from "react-bootstrap";

export default function Login() {
  const [message, setMessage] = useState("");
  const { setToken } = useContext(AppContext);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (user) => {
    axios
      .post("/api/users/authenticate/", user)
      .then((info) => {
        if (info.data.msg === "Password and email do not match!") {
          localStorage.clear();
          setToken();
          history.push("/login");
          setMessage(info.data.msg);
        } else if (info.data.msg === "Email not registered!") {
          localStorage.clear();
          setToken();
          history.push("/login");
          setMessage(info.data.msg);
        } else {
          localStorage.setItem("token", info.data.token);
          localStorage.setItem("user", JSON.stringify(info.data.user));
          setToken(info.data.token);
          history.push("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Container className="p-3">
        <h1>Login</h1>

        <form className="Registration-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            ref={register({ required: true })}
          />
          {errors.email && <p className="Error-message"> This is a mandatory field. </p>}

          <label htmlFor="password">Password: </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            ref={register({ required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="Error-message"> Password must have at least 6 characters. </p>
          )}

          <p className="Error-message">{message}</p>

          <button className="LoginRegister_btn" type="submit">
            Login
          </button>
        </form>
      </Container>
    </div>
  );
}
