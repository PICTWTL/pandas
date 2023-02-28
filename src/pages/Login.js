import React from "react";
import { LandingNavbar } from "../components/LandingNavbar";
import "../styles/login.scss";
import "../styles/landingNavbar.scss";
const Login = () => {
  return <div>
    <LandingNavbar/>
    <section>
      <div className="div-block-2">
          <h1 className="heading-3">Login</h1>
          <div className="form">
            <form>
              <label for="username" className="field-lable">Username</label>
              <input type="text" className="input-field" name="name"></input>
              
              <label for="password" className="field-lable">Password</label>
              <input type="password" className="input-field" name="password"></input>

              <input type="submit" value="Login" className="w-button"></input>
            </form>
          </div>
      </div>
    </section>
  </div>;
};

export default Login;
