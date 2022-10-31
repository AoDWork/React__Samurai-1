import React from "react";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMsgBody: (msgBody) => { dispatch(updateNewMsgBodyCreator(msgBody)); },
    sendMsg: () => { dispatch(sendMsgCreator()); }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
