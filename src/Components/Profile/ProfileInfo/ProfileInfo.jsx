import React, { useState } from 'react';
import style from '../Profile.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg'
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )
  }

  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={style.formUser}>
        <img className={style.userAvatar} src={profile.photos.large || userPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

        {editMode
          ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}


        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={style.userDescription}>Description</div>
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Loking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b> My skills </b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe} // этого еще не было в доке на момент записи видео, но оно приходило
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}



const Contact = ({ contactTitle, contactValue }) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;