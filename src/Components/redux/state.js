import {rerenderEntireTree} from "../../render"

let state = {
    profilePage: {
        postsData: [
            { id: 1, post: "yo", likesCount: 12 },
            { id: 2, post: "It's my fist post.", likesCount: 11 },
            { id: 3, post: "0", likesCount: 50 }]
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Dmitriy" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Valera" },
            { id: 4, name: "Sveta" },
            { id: 5, name: "Viktor" }],
        messagesData: [
            { id: 1, msg: "Hi" },
            { id: 2, msg: "Yo" },
            { id: 3, msg: "What's up?" },
            { id: 4, msg: "Hi" },
            { id: 5, msg: "Yo" }]
    }
};

export let addPost = (postMsg) => {
    let newPost = {
        id:5,
        post: postMsg,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}




export default state;