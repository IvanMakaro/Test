import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessagesActionCreator,
    updateNewMessageBodyActionCreator,
    updateNewPostTextActionCreator
} from "../../redux/state";

const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(elem => <DialogItem id={elem.id} name = {elem.name}/>)
    let messagesElements = props.dialogsPage.messages.map(elem => <Message message={elem.message}/>)

    let ref = React.createRef()

    let addMessage =()=>{
        props.dispatch(addMessagesActionCreator())


    }

    let onPostChange = (e)=>{
        let text = e.target.value
        // let text = ref.current.value;
        props.dispatch(updateNewMessageBodyActionCreator(text))
    }


    return(
    <div className={s.dialogs}>
        <div className={s.dialogs_items}>

            {dialogElements}

        </div>
        <div className={s.messages}>

            <div>{messagesElements}</div>
            <div>
                <textarea placeholder='Enter your message' onChange={onPostChange}  value={props.newPostText} />
            </div>
            <div>
                <button onClick={addMessage}>Добавить</button>
            </div>
        </div>
    </div>

  )
}

    export default Dialogs
