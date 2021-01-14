import React from "react";
import useApplicationData from "../hooks/useApplicationData.js";
import { Link } from "react-router-dom";
import SinglePicture from "../components/SinglePicture.js"

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

      <h1> MY AWESOME IMAGE REPO </h1>
      <p> {userList} </p>
      <SinglePicture 
        id="1"
        title="Model"
        link="https://images.unsplash.com/photo-1607530775692-3abd5a040b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        saved_time="01/01/2000"
      />

      <div>
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



      
    </div>
  );
}
