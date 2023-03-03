import { useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import List from "./List";
import New from "./New";
import Single from "./Single";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "../context/darkModeContext";
import "../styles/dark.scss";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Admin = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // getAllNotes();
    } else {
      navigate("/signup");
    }
  }, [Home]);
  // const url = Location.name;
  const url = window.location.pathname;
  console.log(url);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Home></Home>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default Admin;
