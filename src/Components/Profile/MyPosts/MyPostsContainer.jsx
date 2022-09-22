import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
// import StoreContext from "../../../StoreContext";
import connect from 'react-redux';


// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let addPost = () => { store.dispatch(addPostActionCreator()); };
//         let onPostChange = (text) => { store.dispatch(updateNewPostTextActionCreator(text)); };

//         return <MyPosts updateNewPostText={onPostChange}
//           addPost={addPost}
//           postsData={state.profilePage.postsData}
//           newPostText={state.profilePage.newPostText} />
//       }
//       }
//     </StoreContext.Consumer>
//   );
// }


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) },
    addPost: () => { dispatch(addPostActionCreator()) }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

// <MyPosts updateNewPostText={onPostChange} addPost={addPost}
// postsData={state.profilePage.postsData}
// newPostText={state.profilePage.newPostText} />