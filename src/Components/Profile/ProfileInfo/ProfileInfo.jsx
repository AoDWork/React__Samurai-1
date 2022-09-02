import style from '../Profile.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={style.contentHeader} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwuO?ver=1fc3" />
      </div>
      <div className={style.formUser}>
        <img className={style.userAvatar} src="https://images.archive-digger.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_225%2Cw_300%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A%2F%2Fi.imgur.com%2FhDNiJvY.png" />
        <div className={style.userDescription}>Description</div>
      </div>
    </div>
  );
}

export default ProfileInfo;