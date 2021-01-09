import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import About from "./pages/About";

export default function App() {
  return (
    
    <div>
    <Home />
    </div>

    // <Router>
    //   <div>

    //      <Navbar />
    //     <Switch> 

    //       <Route exact path="/">
    //       <Home />
    //       </Route>

    //        <Route path="/about">
    //         {" "}
    //         <About />{" "}
    //       </Route>
    //       <Route path="/login">
    //         {" "}
    //         <Login />{" "}
    //       </Route>
    //       <Route path="/register">
    //         {" "}
    //         <Register />{" "}
    //       </Route>
    //     </Switch>
    //     <Footer /> 

    //   </div>
    // </Router>


  );
}
