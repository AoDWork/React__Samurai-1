import { usersAPI, profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let InitialState = {
    postsData: [
        { id: 1, post: "yo", likesCount: 12 },
        { id: 2, post: "It's my fist post.", likesCount: 11 },
        { id: 3, post: "0", likesCount: 50 }],
    newPostText: 'Type Post',
    userProfile: null,
    status: ''
}

const profileReducer = (state = InitialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return { ...state, newPostText: action.newText };

        case SET_STATUS:
            return { ...state, status: action.status };

        case SET_USER_PROFILE:
            return { ...state, userProfile: action.profile };

        default:
            return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
export const setStatus = (status) => {
    return { type: SET_STATUS, status }
}

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId) 
        .then(responce => {
            dispatch( setUserProfile(responce.data) );
        });
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId) 
        .then(responce => {
            dispatch( setStatus(responce.data) );
        });
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status) 
        .then(responce => {
            if(responce.data.resultCode === 0 )
            dispatch( setStatus(status) );
        });
}


export default profileReducer;