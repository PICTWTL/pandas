import React from "react";
import Datatable from "../components/Datatable";
import List from "./List";

import "../styles/posts.scss";

const Posts = () => {
  return (
    <div className="posts">
      <div className="post_container">
        <div className="datatable-cont">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Posts;
