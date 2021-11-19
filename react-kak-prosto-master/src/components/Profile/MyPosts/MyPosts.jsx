import React from "react";
import ss from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

let postsElements = 
  props.posts.map((p) => (<Post message={p.message} likesCount={p.likesCount} />));

let newPostElement = React.createRef();

// let onAddPost = () => {
//   props.addPost(); 
// }
 let onAddPost = () => {
    props.addPost();
 }

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText (text); 
}
  return (
    <div className={ss.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          {/* <textarea id='new-post'></textarea> */}
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={ss.posts}>
        {postsElements}
        {/* <Post likesCount="15" message={"Hi, how are you?"} />
        <Post likesCount={20} message={"Cool, I'am the best"} />
        <Post message={"Help me"} likesCount={10} />
        <Post message="Yo" likesCount="15" />
        <Post likesCount={20} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
