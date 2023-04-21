import React from "react";
import {createField, Input, Textarea} from "../../common/FormControls/FormControls"
import style from '../Profile.module.css';

const ProfileDataForm = ({ handleSubmit, profile }) => {
    return <form onSubmit={handleSubmit}>
    <div><button>Save</button></div>

    <div>
      <b>Full name</b>: { createField("Full Name", "fullName", [], Input ) }
    </div>

    <div>
      <b>Loking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox" } ) }
    </div>

      <div>
        <b> My skills </b>: { createField("My skills", "lookingForAJobDescription", [], Textarea ) }
      </div>

    <div>
      <b>About me</b>:
      { createField("About me", "aboutMe", [], Textarea ) }
    </div>

    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div className={style.contact}> 
        <b>{key}:</b> { createField(key, "contacts." + key, [], Input ) }
        </div> 
      })}
    </div>

  </form>
}

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataReduxForm;