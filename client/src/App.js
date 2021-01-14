import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Pictures from "./pages/Pictures";

const AppContext = createContext();

export default function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    
    <AppContext.Provider value={{ token, setToken }}>
      <Router>
        <div>
          <Navbar />
          <Switch> 

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/pictures/new">
              <Pictures />
            </Route>

          </Switch>

          <Footer /> 
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export { AppContext }; 
