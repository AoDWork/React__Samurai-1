import React from "react";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext"


const DialogsContainer = () => {

  return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState().dialogsPage;
            let onSendMsgClick = () => { store.dispatch(sendMsgCreator()); };
            let onNewMsgChange = (msgBody) => { store.dispatch(updateNewMsgBodyCreator(msgBody)); };

            return <Dialogs updateNewMsgBody={onNewMsgChange}
                            sendMsg={onSendMsgClick}
                            dialogsPage={state} />;
          }
        }
        </StoreContext.Consumer>
}

export default DialogsContainer;


// let state = props.store.getState().dialogsPage;

// let onSendMsgClick = () => {
//   props.store.dispatch(sendMsgCreator());
// };

// let onNewMsgChange = (msgBody) => {
//   props.store.dispatch(updateNewMsgBodyCreator(msgBody));
// };