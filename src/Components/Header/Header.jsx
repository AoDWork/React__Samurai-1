import React from "react";
import style from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://th.bing.com/th/id/OIP.PBVmERenoA81uh26kHU04QHaHa?pid=ImgDet&rs=1" />
            <div className={style.loginBlock}>
                { props.isAuth 
                    ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                    : <NavLink to={ '/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header