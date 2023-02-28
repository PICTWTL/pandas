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
const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <LandingNavbar />
      <Alert alert={alert}/>
      <Signup showAlert={showAlert}/>
    </>
  );
};

export default App;
