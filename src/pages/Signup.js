import React from "react";
import { LandingNavbar } from "../components/LandingNavbar";
import "../styles/landingNavbar.scss"
import "../styles/login.scss"
const Signup = () => {
    return <div>
      <LandingNavbar/>
      <section>
        <div className="div-block-2">
            <h1 className="heading-3">Signup</h1>
            <div className="form">
              <form>

                <label for="username" className="field-lable">Username</label>
                <input type="text" className="input-field" name="name"></input>

                <label for="email" className="field-lable">Email</label>
                <input type="email" className="input-field" name="email"></input>
                
                <label for="password" className="field-lable">Password</label>
                <input type="password" className="input-field" name="password"></input>
  
                <input type="submit" value="Signup" className="w-button"></input>
              </form>
            </div>
        </div>
      </section>
    </div>;
  };
  
  export default Signup;