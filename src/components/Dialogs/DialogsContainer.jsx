import React from 'react';
import {addMessagesActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState()


    let addMessage =()=>{
        props.store.dispatch(addMessagesActionCreator())
    }

    let onPostChange = (text)=>{
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }


    return(<Dialogs
        addMessage={addMessage}
        onPostChange={onPostChange}
        newPostText={state.dialogsPage.newMessageBody}
        dialogsPage={state.dialogsPage}
    />
  )
}

    export default DialogsContainer
