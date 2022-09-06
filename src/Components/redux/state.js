let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        postsData: [
            { id: 1, post: "yo", likesCount: 12 },
            { id: 2, post: "It's my fist post.", likesCount: 11 },
            { id: 3, post: "0", likesCount: 50 }],
        newPostText: 'React samurai'
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


export const addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;