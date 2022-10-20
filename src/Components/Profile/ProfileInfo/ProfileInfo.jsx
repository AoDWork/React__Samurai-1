import style from '../Profile.module.css'
import Preloader from '../../common/preloader/Preloader'

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img className={style.contentHeader} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuO?ver=1fc3" />
      </div>
      <div className={style.formUser}>
        <img className={style.userAvatar} src={props.profile.photos.large} />
        <div className={style.userDescription}>Description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;