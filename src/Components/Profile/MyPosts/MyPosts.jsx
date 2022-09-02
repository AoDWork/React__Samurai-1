import React from "react";
import ReactDOM from 'react-dom/client';
import Post from './Post/Post'
import style from './MyPosts.module.css'


const MyPosts = (props) => {

    let postsElements = props.postsData.map((el, ind) => <Post key={ind} msg={el.post} likesCount={el.likesCount} />);
  
    return (
      <div className={style.form__newPost}>
        <div className={style.newPost__title}>New Post
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        {postsElements}
      </div>
    );
  }


export default MyPosts;