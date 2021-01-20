import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./style.css";

export default function Edit() {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const id = window.location.pathname.split("/")[3];
  const myTitle = useRef(null);
  const myLink = useRef(null);

  const onSubmit = (picture) => {
    axios
    .post(`/pictures/update/${id}`, picture)
    .then((info) => { 
      console.log(info)
      history.push(`/`);
    })
    .catch((err) => {
      console.error(err);
    });
  }


  useEffect(() => {
    axios({
      method: "GET",
      url: `/pictures/${id}`,
    })
      .then(({data}) => {
        myTitle.current = data[0].title;
        myLink.current = data[0].link;
      })
      .catch((err) => console.log(err));
  }, []);

  


  return (
    <div>
      <Container className="p-3">
        <h1>Edit Picture</h1>


        <form className="Registration-form" onSubmit={handleSubmit(onSubmit)}>

          <button className="LoginRegister_btn" type="submit">
            Bring Data
          </button>

          <label htmlFor="email">Title: </label>
          <input
            name="title"
            type="text"
            ref={register({ required: true })}
            defaultValue={myTitle.current}
          />
          {errors.email && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}

          <label htmlFor="password">Picture: </label>
          <input
            name="link"
            type="text"
            defaultValue={myLink.current}
            ref={register({ required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}

          <p className="Error-message">{message}</p>

          <button className="LoginRegister_btn" type="submit">
            Edit
          </button>
        </form>
      </Container>
    </div>
  );
}
