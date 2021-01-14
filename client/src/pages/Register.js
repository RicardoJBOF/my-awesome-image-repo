import React, { useContext, useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js";
import { Container } from "react-bootstrap";

export default function Register() {
  const { setToken } = useContext(AppContext);
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = user => {
    
    axios
    .post("/api/users/registration/", user)
    .then(info => {
      if (info.data.msg === "Sorry, a user account with this email already exists") {
        localStorage.clear();
        setToken();
        history.push("/register");
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
        <h1 className="header">Registration</h1> 
        <form className='Registration-form' onSubmit={handleSubmit(onSubmit)}>

          <label>First Name:</label>
          <input type="text" name="first_name" ref={register({ required: true})} />
          {errors.first_name && <p className="Error-message"> This is a mandatory field. </p>}
        
          <label>Last Name:</label>
          <input type="text" name="last_name" ref={register({ required: true})}  />
          {errors.last_name && <p className="Error-message"> This is a mandatory field. </p>}

          <label>Email:</label>
          <input type="email" name="email" ref={register({ required: true})}  />
          {errors.email && <p className="Error-message"> This is a mandatory field. </p>}

          <label>Password:</label>
          <input type="password" name="password" ref={register({ required: true, minLength: 6})}  />
          {errors.password && errors.password.type === "required" && <p className="Error-message"> This is a mandatory field. </p>}
          {errors.password && errors.password.type === "minLength" && <p className="Error-message"> Password must have at least 6 characters. </p>}

          <label>Confirm Password:</label>
          <input type="password" name="check_password" ref={register({ validate: (value) => value === watch('password') })}  />
          {errors.check_password && <p className="Error-message"> Password and Check Password must match </p>}

          <p className="Error-message">{message}</p>

          <button type="submit" name="submit_register" className="LoginRegister_btn"> Submit</button>

        </form>

      </Container>

    </div>
  );
}
