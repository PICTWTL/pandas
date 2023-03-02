import React from "react";
import { LandingNavbar } from "../components/LandingNavbar";
import "../styles/login.scss";
import "../styles/landingNavbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const host = "http://localhost:8080";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    console.log("handle Login")
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Logged In Successfully", "success");
      history("/admin");
    } else {
      // alert("Invalid Credentials")
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  return (
    <div>
      <LandingNavbar />
      <section>
        <div className="div-block-2">
          <h1 className="heading-3">Login To Continue</h1>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="field-lable">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={onChange}
                value={credentials.email}
                className="input-field"
                name="email"
              ></input>

              <label htmlFor="password" className="field-lable">
                Password
              </label>
              <input
                type="password"
                onChange={onChange}
                value={credentials.password}
                id="password"
                className="input-field"
                name="password"
              ></input>

              <button type="submit" className="w-button">
                Login
              </button>
              {/* <input type="submit" value="Login" className="w-button"></input> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
