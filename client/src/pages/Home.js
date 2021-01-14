import React from "react";
import useApplicationData from "../hooks/useApplicationData.js";
import { Link } from "react-router-dom";

export default function Home() {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  return (
    <div className="App">
      <h1> Users </h1>
      <ul> {userList} </ul>
      <Link to="/post" className="LoginRegister_btn">
        Add Picture
      </Link>
    </div>
  );
}
