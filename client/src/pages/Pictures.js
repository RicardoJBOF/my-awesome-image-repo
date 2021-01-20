import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
//import PictureUpload from '../components/PictureUpload';
import S3FileUpload from "react-s3";

const config = {
  bucketName: process.env.REACT_APP_bucketName,
  region: process.env.REACT_APP_region,
  accessKeyId: process.env.REACT_APP_accessKeyId,
  secretAccessKey: process.env.REACT_APP_secretAccessKey,
};

export default function Pictures() {
  const [message, setMessage] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  let state = {
    selectedFile: null,
  };

  const fileSelectedHandler = (event) => {
    state.selectedFile = event.target.files[0];
  };

  const onSubmit = (data) => {
    data.user_id = user.id;

    S3FileUpload.uploadFile(state.selectedFile, config)
      .then((aws) => {
        data.picture = aws.location;

        axios
          .post("/pictures/post", data)
          .then()
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
      })
      .catch((err) => {
        console.log(err);
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

          <label htmlFor="pictureUploaded">Upload your picture here: </label>
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
            Add Picture
          </button>
        </form>
      </Container>
    </div>
  );
}
