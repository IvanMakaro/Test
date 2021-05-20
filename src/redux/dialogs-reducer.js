import state from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';


 const dialogsReducer = (state, action) =>{
     switch (action.type){
         case ADD_MESSAGE:
             let newMessage={
                 id: 5,
                 message:state.newMessageBody,
             };

             state.messages.push(newMessage)
             state.newMessageBody = '';
             return state;

         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.newText
             return state;

         default: return state;
     }
}

export const addMessagesActionCreator = ()=>({ type: ADD_MESSAGE })

export const updateNewMessageBodyActionCreator = (text)=>({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })

export default dialogsReducer