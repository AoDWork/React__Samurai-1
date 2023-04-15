import React from 'react';
import style from '../Profile.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={style.formUser}>
        <img className={style.userAvatar} src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={style.userDescription}>Description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;