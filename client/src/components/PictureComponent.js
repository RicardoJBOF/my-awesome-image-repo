import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import usePicturesData from "../hooks/usePicturesData.js";

import { Link } from "react-router-dom";

export default function PictureComponent() {
  const history = useHistory();
  const { state } = usePicturesData();
  const my_id = JSON.parse(localStorage.getItem("user")).id;

  const editComponent = (id) => {
    history.push(`/pictures/edit/${id}`);
  };

  const deleteComponent = (id) => {
    console.log(id);
    axios
      .post(`/pictures/delete/${id}`, { id })
      .then((info) => {
        if (info.data.msg === "Deleted") {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const pictureList = state.pictures
    .filter((x) => x.user_id === my_id)
    .map((picture) => {
      return (
        <Card style={{ width: "18rem" }} key={picture.id} className="box">
          <Link to={`pictures/${picture.id}`}>
            <Card.Img
              className="card-img-top"
              variant="top"
              src={picture.link}
            />
          </Link>
          <Card.Body>
            <Card.Title>{picture.title}</Card.Title>
            <Button
              onClick={() => editComponent(picture.id)}
              className="Picture-button"
              variant="primary"
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteComponent(picture.id)}
              className="Picture-button"
              variant="primary"
            >
              Delete
            </Button>
            <Card.Text className="align-middle">
              Publication date:{" "}
              {picture.saved_time.split("").slice(0, 10).join("")}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    });

  return (
    <Container className="p-3">
      <div className="grid">{pictureList}</div>
    </Container>
  );
}
