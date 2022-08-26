import React from "react";
import ReactDOM from 'react-dom/client';
import Post from './Post/Post'
import style from './MyPosts.module.css'

class MyPosts extends React.Component {
    render() {
        return(
            <div className={style.form__newPost}>
                <div className={style.newPost__title}>New Post
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <Post msg="Yo"/>
                <Post msg="It's my fist post."/>
                <Post msg="0"/>
            </div>
        );
    }
}


export default MyPosts;