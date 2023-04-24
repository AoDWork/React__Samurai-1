const SEND_MSG = 'SEND_MSG';

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
        { id: 5, msg: "Yo" }]
}

const dialogsReducer = (state = InitialState, action) => {

    switch(action.type) {
        case SEND_MSG:
            let msg =  action.newMsgBody;
            return {
                ...state,
                messagesData:  [...state.messagesData, { id: 6, msg} ] 
            };

        default:
            return state;
    }
}

export const sendMsgCreator = (newMsgBody) => ({ type: SEND_MSG, newMsgBody })


export default dialogsReducer;