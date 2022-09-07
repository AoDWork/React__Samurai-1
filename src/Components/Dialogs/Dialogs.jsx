import React from "react";
import { NavLink } from "react-router-dom";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/state";
import style from './Dialogs.module.css'


const DialogItem = (props) => {
  return (
    <div className={style.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={style.message}>{props.msg}</div>
  );
}


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map(el => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElements = props.state.messagesData.map(el => (
    <Message msg={el.msg} />
  ));

  let onSendMsgClick = () => {
    props.dispatch( sendMsgCreator() );
  }
  
  let onNewMsgChange = (e) => {
    let msgBody = e.target.value;
    props.dispatch( updateNewMsgBodyCreator(msgBody) );
  }


  return (
    <main className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
        <div><textarea placeholder='' value={props.newMsgBody} onChange={ onNewMsgChange } ></textarea></div>
        <div><button onClick={ onSendMsgClick } >Send</button></div>
      </div>
    </main>
  );
}

export default Dialogs;