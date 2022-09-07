const ADD_POST = 'ADD-POST';
const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';

let store = {
    _state: {
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
                { id: 5, msg: "Yo" }],
            newMsgBody: 'Type here'
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MSG_BODY) {
            this._state.dialogsPage.newMsgBody = action.msgBody;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MSG) {
            let newMsg = {
                id: 6,
                msg: this._state.dialogsPage.newMsgBody
            };

            this._state.dialogsPage.messagesData.push(newMsg);
            this._state.dialogsPage.newMsgBody = '';
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const sendMsgCreator = () => ({ type: SEND_MSG })

export const updateNewMsgBodyCreator = (msgBody) => {
    return { type: UPDATE_NEW_MSG_BODY, msgBody: msgBody }
}


export default store;
window.store = store;

