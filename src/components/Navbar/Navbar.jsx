import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";



const Navbar = (props) => {


    let FriendElements = props.friendsPage.map(elem => <Friend id = {elem.id} name = {elem.name}/>)

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item_frends}>
            Friends
        </div>
        <div className={s.item_frend}>
            {FriendElements}
        </div>

    </nav>
}

export default Navbar;