import React from "react";
import ss from "./Post.module.css";

const Post = (props) => {

  //console.log(props.message); //debugger;

  return (
    <div className={ss.item}>
      <img
        src="https://i2.wp.com/nikitafilimonov.ru/wp-content/uploads/2016/11/avatar_23o.jpg?w=1740"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span>
          {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
