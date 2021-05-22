import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(elem => <DialogItem id={elem.id} name = {elem.name}/>)
    let messagesElements = props.dialogsPage.messages.map(elem => <Message message={elem.message}/>)


    let addMessage =()=>{
        props.addMessage()
    }

    let onPostChange = (event)=>{
        let text = event.target.value
        props.onPostChange(text)
    }


    return(
    <div className={s.dialogs}>
        <div className={s.dialogs_items}>

            {dialogElements}

        </div>
        <div className={s.messages}>

            <div>{messagesElements}</div>
            <div>
                <textarea placeholder='Enter your message' onChange={onPostChange}  value={props.newMessageBody} />
            </div>
            <div>
                <button onClick={addMessage}>Добавить</button>
            </div>
        </div>
    </div>

  )
}

    export default Dialogs
