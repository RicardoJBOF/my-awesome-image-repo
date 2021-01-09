import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (user) => {

    console.log(user)


    axios
      .post("/api/users/authenticate/", user)

      // .then((info) => {
      //   if (info.data.msg === "Password and email do not match!") {
      //     localStorage.clear();
      //     setToken();
      //     history.push("/login");
      //     setMessage(info.data.msg);
      //   } else if (info.data.msg === "Email not registered!") {
      //     localStorage.clear();
      //     setToken();
      //     history.push("/login");
      //     setMessage(info.data.msg);
      //   } else {
      //     localStorage.setItem("token", info.data.token);
      //     localStorage.setItem("user", JSON.stringify(info.data.user));
      //     setToken(info.data.token);

      //     if (localStorage.getItem("task")) {
      //       history.push("/tasks/new");
      //     } else {
      //       history.push("/");
      //     }
      //   }
      // })
      // .catch((err) => {
      //   console.error(err);
      // });


  };

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
