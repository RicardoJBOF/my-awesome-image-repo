import React from "react";
import useApplicationData from "../hooks/useApplicationData.js";
import { Link } from "react-router-dom";
import SinglePicture from "../components/SinglePicture.js"
import "./style.css";

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

      <SinglePicture />


      {/* <SinglePicture 
        id="1"
        title="Model"
        link="https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        saved_time="01/01/2000"
      />
      <SinglePicture 
        id="2"
        title="Model"
        link="https://images.unsplash.com/photo-1575880918403-f578c9078302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        saved_time="01/01/2000"
      /> */}
      


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
