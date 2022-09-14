import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';


let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: "yo", likesCount: 12 },
                { id: 2, post: "It's my fist post.", likesCount: 11 },
                { id: 3, post: "0", likesCount: 50 }],
            newPostText: 'Type Post'
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
            newMsgBody: 'Type Msg'
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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;

