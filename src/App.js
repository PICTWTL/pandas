import React from "react";
// import Admin from "./pages/Admin";
import { useState } from "react";
import "./App.css";
import Admin from "./pages/Admin";
import { Landing } from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Alert from "./components/Alert";
import { LandingNavbar } from "./components/LandingNavbar";
import Home from "./pages/Home";
// import { Landing } from "./pages/Landing";
// import { createBrowserRouter,Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ManageAccounts } from "@mui/icons-material";
import Posts from "./pages/Posts";

const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Admin></Admin> */}
      <Router>
        {/* <Alert alert={alert}/> */}

        <Routes>
          <Route exact path="/" element={<Landing></Landing>} />
          <Route exact path="/admin/">
            <Route index element={<Admin showAlert={showAlert} />} />
            <Route path="configure" element={<Admin />} />
            <Route path="posts" element={<Admin />} />
            <Route path="profile" element={<Admin />} />
          </Route>
          <Route
            exact
            path="/signup"
            element={<Signup showAlert={showAlert} />}
          />
          <Route
            exact
            path="/login"
            element={<Login showAlert={showAlert} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
