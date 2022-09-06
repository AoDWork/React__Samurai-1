import React from "react";
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return(
        <main>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText} 
                     addPost={props.addPost}/>
        </main>
    );
}

export default Profile;