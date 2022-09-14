const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let InitialState = {
    postsData: [
        { id: 1, post: "yo", likesCount: 12 },
        { id: 2, post: "It's my fist post.", likesCount: 11 },
        { id: 3, post: "0", likesCount: 50 }],
    newPostText: 'Type Post'
}

const profileReducer = (state = InitialState, action) => {
    
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };

            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer;