import React from "react";
import ReactDOM from 'react-dom/client';
import Post from './Post/Post'
import style from './MyPosts.module.css'


const MyPosts = (props) => {

    let postsElements = props.postsData.map((el, ind) => <Post key={ind} msg={el.post} likesCount={el.likesCount} />);
  
    let newPostElement = React.createRef();

    let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
    };

    return (
      <div className={style.form__newPost}>
        <div className={style.newPost__title}>New Post
          <textarea ref={newPostElement}></textarea>
          <button onClick={ addPost }>Add Post</button>
        </div>
        {postsElements}
      </div>
    );
  }


export default MyPosts;