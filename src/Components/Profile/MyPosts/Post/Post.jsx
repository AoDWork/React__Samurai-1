import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return(
        <div className={style.post}>
            <img className={style.post__img}  alt='' src="https://th.bing.com/th/id/R.bf5e1eba30b53dffbc6a0353361855d4?rik=7duhy3rpO8d7MQ&riu=http%3a%2f%2feskipaper.com%2fimages%2favatar-3.jpg&ehk=YnIJUh9Lgb92QMa1swP9zHGNKXU66it9IG4vR41p6I4%3d&risl=&pid=ImgRaw&r=0" />
            <div className={style.postCol}>
                <div className="post__message">{props.msg}</div>
                <div className="likes">Likes: {props.likesCount}</div>
            </div>
        </div>
    );
}

export default Post;