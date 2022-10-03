import React from "react";
import {NavLink} from "react-router-dom"
import s from './Navbar.module.css'

const Navbar = () => {
    return  <nav className={s.nav}>
        <ul>
            <li className={s.item}><NavLink to='/profile'>Profile</NavLink></li>
            <li className={s.item}><NavLink to='/dialogs'>Messages/Dialogs</NavLink></li>
            <li className={s.item}><NavLink to="#">News</NavLink></li>
            <li className={s.item}><NavLink to="#">Music</NavLink></li><br />
            <li className={s.item}><NavLink to='/users'>Find Users</NavLink></li><br />
            <li className={s.item}><NavLink to="#">Settings</NavLink></li>
            {/* <li className={s.item}><NavLink activeClassName={s.active} to="#">Settings</NavLink></li> */}
        </ul>
    </nav>
}

export default Navbar;