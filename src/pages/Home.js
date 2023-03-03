// import { ManageAccounts } from "@mui/icons-material";
import React from "react";
// import Chart from "../components/Chart";
// import Featured from "../components/Featured";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Table from "../components/Table";
// import Widget from "../components/Widget";
import Posts from "./Posts";
import ManageAccouts from "./ManageAccouts";

import "../styles/home.scss";
import Profile from "./Profile";

const Home = () => {
  const url = window.location.pathname;
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {url === "/admin/posts" && <Posts />}
        {url === "/admin/configure" && <ManageAccouts />}
        {url === "/admin/profile" && <Profile />}
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
