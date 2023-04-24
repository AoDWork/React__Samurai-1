import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import AddMsgForm from "./AddMsgForm";
import Message from "./Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((el, ind) => (<DialogItem name={el.name} id={el.id} key={ind} />));
  let messagesElements = state.messagesData.map((el, ind) => (<Message msg={el.msg} key={ind} />));
  let newMsgBody = state.newMsgBody;

  let addNewMsg = (values) => {
    props.sendMsg(values.newMsgBody);
  }

  if(!props.isAuth) return <Redirect to={"/login"} /> ;

  return (
    <div>
      <main className={style.dialogs}>
        <div className={style.dialogsItems}>
          {dialogsElements}
        </div>

        <div className={style.messages}>
          {messagesElements}</div>
      </main>
        <AddMsgForm onSubmit={addNewMsg}/>
    </div>
  )
}

export default Dialogs;