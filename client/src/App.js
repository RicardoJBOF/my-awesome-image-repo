import useApplicationData from "./hooks/useApplicationData.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/login">
            {" "}
            <Login />{" "}
          </Route>
          <Route path="/register">
            {" "}
            <Register />{" "}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// const App = () => {
//   const { state, dispatch } = useApplicationData();
//   const userList = state.users.map((user) => (
//     <li key={user.id}>
//       {" "}
//       {user.first_name} {user.last_name} {user.email}{" "}
//     </li>
//   ));

//   return (
//     <div className="App">
//       <h1> Users </h1>

//       <ul> {userList} </ul>
//     </div>
//   );
// };

// export default App;
