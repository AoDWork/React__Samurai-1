import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import Message from "./Message";
import { Form, Field } from 'react-final-form'
import { Navigate } from 'react-router-dom';


const addNewMsg = (values) => {
  //alert(values.newMsgBody);
  props.sendMsg(values.newMsgBody);
}

const AddMsgForm = (props) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field placeholder='Type Msg' name="newMsgBody" component='textarea' />
          </div>
          <div>
          <div><button>Send</button></div>
          </div>
        </form>
      )}
    />
  )
}


const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((el, ind) => (<DialogItem name={el.name} id={el.id} key={ind} />));
  let messagesElements = state.messagesData.map((el, ind) => (<Message msg={el.msg} key={ind} />));
  let newMsgBody = state.newMsgBody;

  // let onSendMsgClick = () => {
  //   props.sendMsg();
  // };

  // let onNewMsgChange = (e) => {
  //   let msgBody = e.target.value;
  //   props.updateNewMsgBody(msgBody);
  // };

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
        {/* <div><textarea value={newMsgBody} onChange={onNewMsgChange} ></textarea></div>
        <div><button onClick={onSendMsgClick} >Send</button></div> */}

    </div>
  );
}

export default Dialogs;