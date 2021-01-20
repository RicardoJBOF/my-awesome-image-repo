import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import S3FileUpload from "react-s3";

import "./style.css";

const config = {
  bucketName: process.env.REACT_APP_bucketName,
  region: process.env.REACT_APP_region,
  accessKeyId: process.env.REACT_APP_accessKeyId,
  secretAccessKey: process.env.REACT_APP_secretAccessKey,
};

function generateRandomString() {
  let randomKey = Math.random().toString(36).substring(6)
  return randomKey;
}


export default function Edit() {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const id = window.location.pathname.split("/")[3];
  
  let state = {
    selectedFile: null,
  };

  const fileSelectedHandler = (event) => {
    state.selectedFile = event.target.files[0];

    Object.defineProperty(state.selectedFile, 'name', {
      writable: true,
      value: generateRandomString()
    });

  };

  const onSubmit = (picture) => {
    S3FileUpload.uploadFile(state.selectedFile, config)
      .then((aws) => {
        picture.link = aws.location;
        axios
          .post(`/pictures/update/${id}`, picture)
          .then((info) => {
            history.push(`/`);
          })
          .catch((err) => {
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
          <input
            name="title"
            type="text"
            ref={register({ required: true })}
          />
          {errors.email && (
            <p className="Error-message"> This is a mandatory field. </p>
          )}

          <label htmlFor="pictureUploaded">Add new picture: </label>
          <input
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
