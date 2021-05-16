import React from 'react';
import s from "../../Dialogs/Dialogs.module.css";

const Friend = (props)=>{
    return(
        <div className={s.parent}>
            <div className={s.dialog}>
                <img src="https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/avatarki-dlya-muzhchin-v-whatsapp-5.jpg" alt="" />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}
export default Friend