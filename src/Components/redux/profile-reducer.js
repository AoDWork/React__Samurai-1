const profileReducer = (state, action) => {
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

    return state;
}