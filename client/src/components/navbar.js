import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js";

import "./style.css";

export default function Navbar() {
  const { token, setToken } = useContext(AppContext);
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    setToken();
    history.push("/login");
  }

  return (
    <nav className="navbar sticky-top">
      <Link to="/" className="logo nav-link">
        MY AWESOME IMAGE REPO
      </Link>

      <div className="nav">
        <Link className="nav-link" to="/">
          Home
        </Link>

        <div className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>{" "}
        </div>

        {token ? (
          <>
            <div className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={(event) => handleLogout(event)}
              >
                Logout
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/users/:id">
                Hello, {user.first_name}!
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
