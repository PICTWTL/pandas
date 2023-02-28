import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LandingNavbar } from "../components/LandingNavbar";
import "../styles/landingNavbar.scss";
import "../styles/login.scss";

// require("dotenv").config();
const host = "http://localhost:8080";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  // let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle Submit");
    if (credentials.password !== credentials.cpassword) {
      //Alert Component to be added
      props.showAlert("Confirm Password Does Not Match", "warning");
      return;
    }
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    try {
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //Save the auth token and redirect
        // props.showAlert("Signed In Successfully", "success");
        localStorage.setItem("token", json.authtoken);
        // navigate("/");
      } else {
        // alert("Invalid Credentials")
        // props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="pd-0">
        <div className="div-block-2  mb-3 pt-0">
          <h1 className="heading-3">Signup</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="field-lable">
                Name
              </label>
              <input
                type="text"
                onChange={handleChange}
                value={credentials.name}
                className="input-field"
                name="name"
              ></input>

              <label htmlFor="email" className="field-lable">
                Email
              </label>
              <input
                type="email"
                onChange={handleChange}
                value={credentials.email}
                className="input-field"
                name="email"
              ></input>

              <label htmlFor="password" className="field-lable">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                minLength={5}
                value={credentials.password}
                className="input-field"
                name="password"
              ></input>

              <label htmlFor="cpassword" className="field-lable">
                Confirm Password
              </label>
              <input
                type="password"
                onChange={handleChange}
                minLength={5}
                value={credentials.cpassword}
                className="input-field"
                name="cpassword"
              ></input>

              <input type="submit" value="Signup" className="w-button"></input>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
