const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG_BODY = 'UPDATE-NEW-MSG-BODY';

let InitialState = {
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

const dialogsReducer = (state = InitialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MSG_BODY:
            state.newMsgBody = action.newMsgBody;
            return state;

        case SEND_MSG:
            let msg =  state.newMsgBody;

            state.messagesData.push({ id: 6, msg});
            state.newMsgBody = '';
            return state;

        default:
            return state;
    }
}

export const sendMsgCreator = () => ({ type: SEND_MSG })

export const updateNewMsgBodyCreator = (msgBody) => {
    return { type: UPDATE_NEW_MSG_BODY, newMsgBody: msgBody }
}

export default dialogsReducer;