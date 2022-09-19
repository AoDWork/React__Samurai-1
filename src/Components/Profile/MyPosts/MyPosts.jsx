import React from "react";
import style from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let postsElements = 
        props.postsData.map((el, ind) => <Post  msg={el.post} likesCount={el.likesCount} key={ind} />);
  
    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    };

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    };

    return (
      <div className={style.form__newPost}>
        <div className={style.newPost__title}>New Post
          <textarea ref={newPostElement} onChange={ onPostChange } value={props.newPostText} />
          <button onClick={ onAddPost }>Add Post</button>
        </div>
        {postsElements}
      </div>
    );
  }


export default MyPosts;