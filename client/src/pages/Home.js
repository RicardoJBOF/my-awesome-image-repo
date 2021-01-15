import React from "react";
import { Link } from "react-router-dom";
import PictureComponent from "../components/PictureComponent.js";
import "./style.css";

export default function Home() {
  
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <h1> MY AWESOME IMAGE REPO </h1>

      <PictureComponent />

      <div className="Distance-image">
        {user ? (
          <Link to="/pictures/new" className="LoginRegister_btn">
            Add Picture
          </Link>
        ) : (
          <Link to="/login" className="LoginRegister_btn">
            Login to Add Picture
          </Link>
        )}
      </div>
    </div>
  );
}
