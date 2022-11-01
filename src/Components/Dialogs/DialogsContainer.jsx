import React from "react";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from 'redux';



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

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

export default compose(
                  connect(mapStateToProps, mapDispatchToProps),
                  withAuthRedirect
                )(Dialogs);