import React from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import Widget from "../components/Widget";

import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div> */}
        
      </div>
    </div>
  );
};

export default Home;
