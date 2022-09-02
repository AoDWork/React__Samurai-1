import React from "react";
import style from './Dialogs.module.css'



const Dialogs = (props) => {
    return (
            <main className={style.dialogs}>
                <div className={style.dialogs__users}>ПОЛЬЗОВАТЕЛИ</div>
                <div className={style.dialogs__usersMsgs}>СООБЩЕНИЯ</div>
            </main>
        );
    }

export default Dialogs;