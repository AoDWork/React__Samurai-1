import React from 'react';
import style from '../Profile.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.jpg'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={style.formUser}>
        <img className={style.userAvatar} src={ profile.photos.large || userPhoto} />
        {isOwner && <input type='file' onChange ={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={style.userDescription}>Description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;