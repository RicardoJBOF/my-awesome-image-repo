import React from "react";
import useApplicationData from "../hooks/useApplicationData.js";
import { Link } from "react-router-dom";
import PictureComponent from "../components/PictureComponent.js";
import "./style.css";

export default function Home() {
  const { state } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <h1> MY AWESOME IMAGE REPO </h1>
      <p> {userList} </p>

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
