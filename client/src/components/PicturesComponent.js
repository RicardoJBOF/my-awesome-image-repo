import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import usePicturesData from "../hooks/usePicturesData.js";
import PictureCard from "./PictureCard";

export default function PicturesComponent({ my_id }) {
  let { state } = usePicturesData(my_id);

  const renderPictures = state.pictures.map((picture) => {
    return (
      <PictureCard
        key={picture.id}
        id={picture.id}
        link={picture.link}
        title={picture.title}
        saved_time={picture.saved_time}
      />
    );
  });

  return (
    <>
      <Container className="p-3">
        <div className="grid">{renderPictures}</div>
      </Container>
    </>
  );
}
