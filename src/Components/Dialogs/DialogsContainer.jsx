import React from "react";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext"
import connect from 'react-redux';


// const DialogsContainer = () => {

//   return <StoreContext.Consumer>
//         { (store) => {
//             let state = store.getState().dialogsPage;
//             let onSendMsgClick = () => { store.dispatch(sendMsgCreator()); };
//             let onNewMsgChange = (msgBody) => { store.dispatch(updateNewMsgBodyCreator(msgBody)); };

//             return <Dialogs updateNewMsgBody={onNewMsgChange}
//                             sendMsg={onSendMsgClick}
//                             dialogsPage={state} />;
//           }
//         }
//         </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
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


// let state = props.store.getState().dialogsPage;

// let onSendMsgClick = () => {
//   props.store.dispatch(sendMsgCreator());
// };

// let onNewMsgChange = (msgBody) => {
//   props.store.dispatch(updateNewMsgBodyCreator(msgBody));
// };