const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';

let initialReducer = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'yo'}
    ],
    newMessageBody: ''
};



 const dialogsReducer = (state = initialReducer, action) =>{
     switch (action.type){
         case ADD_MESSAGE:{
             let newMessage={
                 id: 5,
                 message:state.newMessageBody,
             };
             let stateCopy = {...state}
             stateCopy.messages=[...state.messages]
             stateCopy.messages.push(newMessage)
             stateCopy.newMessageBody = '';
             return stateCopy;
     }
         case UPDATE_NEW_MESSAGE_BODY:{
             let stateCopy = {...state}
             stateCopy.newMessageBody = action.newText
             return stateCopy;
     }
         default: return state;
     }
}

export const addMessagesActionCreator = ()=>({ type: ADD_MESSAGE })

export const updateNewMessageBodyActionCreator = (text)=>({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })

export default dialogsReducer