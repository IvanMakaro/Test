import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props)=>{
    let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog + " " + s.active}>
            <img src="https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarki-dlya-muzhchin-v-whatsapp-5.jpg" alt=""/>
            <NavLink to ={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem
