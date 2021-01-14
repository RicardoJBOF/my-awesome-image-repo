import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Pictures() {
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data.user_id = user.id;

    axios
      .post("/pictures/post", data)
      .then((info) => {
        if (info.data.msg === "Registered") {
          history.push("/");
        } else {
          setMessage("Enter a valid picture");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <Container className="p-3">
        <h1>Picture Information:</h1>
        <form className="Registration-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title: </label>
          <input
            name="title"
            type="text"
            placeholder="Picture Title"
            ref={register({ required: true })}
          />
          {errors.title && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}
          <label htmlFor="picture">Upload your picture: </label>
          <input
            name="picture"
            type="text"
            placeholder="Upload here"
            ref={register({ required: true })}
          />
          {errors.picture && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}
          <p className="Error-message">{message}</p>
          <button className="LoginRegister_btn" type="submit">
            Add Picture
          </button>
        </form>
      </Container>
    </div>
  );
}
