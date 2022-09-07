import React from "react";
import ReactDOM from 'react-dom/client';
import Post from './Post/Post'
import style from './MyPosts.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/state";


const MyPosts = (props) => {

    let postsElements = props.postsData.map((el, ind) => <Post key={ind} msg={el.post} likesCount={el.likesCount} />);
  
    let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch( addPostActionCreator() );
    };

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch( updateNewPostTextActionCreator(text) );
    };

    return (
      <div className={style.form__newPost}>
        <div className={style.newPost__title}>New Post
          <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText} />
          <button onClick={ addPost }>Add Post</button>
        </div>
        {postsElements}
      </div>
    );
  }


export default MyPosts;