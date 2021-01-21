import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import S3FileUpload from "react-s3";
import { generateRandomString, AWSconfig } from "../helpers/helpers"

import "./style.css";

export default function Edit() {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const id = window.location.pathname.split("/")[3];
  const editPicture = useLocation();

  let state = {
    selectedFile: null,
  };

  const fileSelectedHandler = (event) => {
    state.selectedFile = event.target.files[0];

    Object.defineProperty(state.selectedFile, "name", {
      writable: true,
      value: generateRandomString(),
    });
  };

  const onSubmit = (picture) => {
    S3FileUpload.uploadFile(state.selectedFile, AWSconfig)
      .then((aws) => {
        picture.link = aws.location;
        axios
          .post(`/pictures/update/${id}`, picture)
          .then((info) => {
            history.push(`/`);
          })
          .catch((err) => {
            setMessage(err.data.msg)
            console.error(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container className="p-3">
        <h1>Edit Picture</h1>

        <form className="Registration-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Title: </label>
          <input className="left-padding" name="title" type="text" defaultValue={editPicture.state.title} ref={register({ required: true })} />
          {errors.email && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}

          <label htmlFor="pictureUploaded">Add new picture: </label>
          <input
            className="left-padding"
            name="pictureUploaded"
            type="file"
            onChange={fileSelectedHandler}
            ref={register({ required: true })}
          />
          {errors.picture && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}

          <p className="Error-message">{message}</p>

          <button className="LoginRegister_btn" type="submit">
            Update
          </button>
        </form>
      </Container>
    </div>
  );
}
