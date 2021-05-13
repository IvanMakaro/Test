import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {



    let dialogElements = props.dialogs.map(elem => <DialogItem id={elem.id} name = {elem.name}/>)
    let messagesElements = props.messages.map(elem => <Message message={elem.message}/>)


    return(
    <div className={s.dialogs}>
        <div className={s.dialogs_items}>

            {dialogElements}

        </div>
        <div className={s.messages}>

            {messagesElements}

        </div>
    </div>

  )
}

    export default Dialogs
