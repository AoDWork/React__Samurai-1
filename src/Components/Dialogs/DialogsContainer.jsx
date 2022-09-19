import React from "react";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMsgClick = () => {
    props.store.dispatch(sendMsgCreator());
  };

  let onNewMsgChange = (msgBody) => {
    props.store.dispatch(updateNewMsgBodyCreator(msgBody));
  };


  return  <Dialogs updateNewMsgBody={onNewMsgChange} sendMsg={onSendMsgClick} 
                  dialogsPage={state}/> ;
}

export default DialogsContainer;