import React from "react";
import useApplicationData from "../hooks/useApplicationData.js";
import { Link } from "react-router-dom";

export default function Home() {
  const { state } = useApplicationData();
  const userList = state.users.map((user) => (
    <li key={user.id}>
      {" "}
      {user.first_name} {user.last_name} {user.email}{" "}
    </li>
  ));

  const user = localStorage.getItem('token');

  return (
    <div className="App">

      <h1> Users </h1>
      <ul> {userList} </ul>

      {user ?
        <Link to="/pictures/new" className="LoginRegister_btn">
        Add Picture
        </Link> 
        :
        <Link to="/login" className="LoginRegister_btn">
        Login to Add Picture
        </Link> 
      } 



      
    </div>
  );
}
