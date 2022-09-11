import React from "react";
// import { NavLink } from "react-router-dom";
import { sendMsgCreator, updateNewMsgBodyCreator } from "../redux/state";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogsData.map((el, ind) => (
    <DialogItem name={el.name} id={el.id} key={ind} />
  ));

  let messagesElements = props.state.messagesData.map((el, ind) => (
    <Message msg={el.msg} key={ind} />
  ));

  let onSendMsgClick = () => {
    props.dispatch(sendMsgCreator());
  };

  let onNewMsgChange = (e) => {
    let msgBody = e.target.value;
    props.dispatch(updateNewMsgBodyCreator(msgBody));
  };


  return (
    <div>
      <main className={style.dialogs}>
        <div className={style.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={style.messages}>
          {messagesElements}</div>
      </main>
      <div>
        <div><textarea value={props.newMsgBody} onChange={onNewMsgChange} ></textarea></div>
        <div><button onClick={onSendMsgClick} >Send</button></div>
      </div>
    </div>
  );
}

export default Dialogs;