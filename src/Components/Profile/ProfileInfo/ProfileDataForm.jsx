import React from "react";
import { createField, Input, Textarea } from "../../common/FormControls/FormControls"
import { reduxForm } from "redux-form";
import style from '../Profile.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    {error && <div className={style.formSummaryError}>
      {error}
    </div>
    }
    <div>
      <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
    </div>
    <div>
      <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
    </div>

    <div>
      <b>My professional skills</b>:
      {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
    </div>
    <div>
      <b>About me</b>:
      {createField("About me", "aboutMe", [], Textarea)}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={style.contact}>
          <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
        </div>
      })}
    </div>
  </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataReduxForm;