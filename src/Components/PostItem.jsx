import React from "react";
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
   return (
      <div className="post">
         <div className="post_content">
            <p >{props.number} {props.post.title} </p>
            <p> {props.post.gen}</p>
         </div>
         <div className="post_img">
            <img className="foto" src={props.post.img} />
         </div>
      </div>
   )
}

export default PostItem;