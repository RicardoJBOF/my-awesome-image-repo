import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js";
import Avatar from '@material-ui/core/Avatar';

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
        1m4g3-r3p0
      </Link>

      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>{" "}
        </li>

        {token ? (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={(event) => handleLogout(event)}
              >
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users/:id">
                {!user.photo_url ? (
                  `Hello, ${user.first_name}!`
                ) : (
                  <Avatar alt={user.first_name} src={user.photo_url} />
                )}
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>

      
    </nav>
  );
}
