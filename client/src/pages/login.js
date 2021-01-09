import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (user) => {};

  return (
    <div>
      <h1>Login</h1>

      <form className="Registration-form" onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          ref={register({ required: true })}
        />
        {errors.email && <p> This is a mandatory field. </p>}

        <label htmlFor="password">Password: </label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p> This is a mandatory field. </p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p> Password must have at least 6 characters. </p>
        )}

        <p>{message}</p>

        <button className="LoginRegister_btn" type="submit">
          Login
        </button>

      </form>
    </div>
  );
}
