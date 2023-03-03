import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Card from "react-bootstrap/Card";
import Google from "../Images/google.png";
import LinkedIn from "../Images/linkedin.png";
import Facebook from "../Images/facebook.png";
import Twitter from "../Images/twitter.png";
import Instagram from "../Images/instagram.png";
import Whatsapp from "../Images/whatsapp.png";

import "../styles/acc_cont.scss";

const ManageAccouts = () => {
  const [cards] = useState([
    {
      title: "Google",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Google}`,
    },
    {
      title: "Linkedin",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${LinkedIn}`,
    },
    {
      title: "Facebook",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Facebook}`,
    },
    {
      title: "Instagram",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Instagram}`,
    },
    {
      title: "Twitter",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Twitter}`,
    },
    {
      title: "Whatsapp",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Whatsapp}`,
    },
    {
      title: "Google",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Google}`,
    },
    {
      title: "Linkedin",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${LinkedIn}`,
    },
    {
      title: "Facebook",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      repudiandae qui blanditiis odio reiciendis ad aliquam minima. Quia
      ullam in ipsa. Dicta, nesciunt. Ad harum accusantium ipsum rerum
      quas sed.`,
      url: `${Facebook}`,
    },
  ]);

  return (
    <div className="acc_cont">
      <div className="title">
        <h1>Manage Accounts</h1>
      </div>
      <div className="cards">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <div className="left-cont">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="btn">Activate</button>
            </div>
            <div className="right-cont">
              <img src={card.url} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccouts;
