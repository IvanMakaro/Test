const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';


    let store={
        _state: {
        friendsPage: [
            {id: 1,name: 'Dimych'},
            {id: 2,name: 'Andrey'},
            {id: 3,name: 'Sveta'},
            {id: 4,name: 'Sasha'},
            {id: 5,name: 'Victor'},
            {id: 6,name: 'Valera'}
        ],
        profilePage: {
            posts: [
                {id: 1, message:"Hi,how are you", likeCount:0},
                {id: 2, message:"My first post", likeCount:24}
            ]},
        newPostText: 'it-kom',
        dialogsPage:{
            dialogs:  [
                {id: 1,name: 'Dimych'},
                {id: 2,name: 'Andrey'},
                {id: 3,name: 'Sveta'},
                {id: 4,name: 'Sasha'},
                {id: 5,name: 'Victor'},
                {id: 6,name: 'Valera'}
            ],
            messages: [
                {id: 1,message: 'hi'},
                {id: 2,message: 'yo'},
                {id: 3,message: 'How are you'},
                {id: 4,message: 'yo'},
                {id: 5,message: 'yo'},
                {id: 6,message: 'yo'}
            ],
            newMessageBody:''
        }
    },
        _callSubscriber (){},

        getState (){
            return this._state;
        },

        subscribe (observer){
            this._callSubscriber = observer
        },

        dispatch(action){
            if (action.type === ADD_POST){
                let newPost = {
                    id:5,
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                };
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state)


            }else if (action.type === UPDATE_NEW_POST_TEXT){
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)


            }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
                this._state.dialogsPage.newMessageBody = action.newText
                this._callSubscriber(this._state)


            }else if (action.type === ADD_MESSAGE){
                let newMessage={
                    id: 5,
                    message:this._state.dialogsPage.newMessageBody,
                };
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageBody = '';
                this._callSubscriber(this._state)
            }
        },
    }


       export const addPostActionCreator = ()=>{

           return{ type: ADD_POST }
        }

       export const addMessagesActionCreator = ()=>({ type: ADD_MESSAGE })

       export const updateNewPostTextActionCreator = (text)=>({ type: UPDATE_NEW_POST_TEXT, newText: text })

       export const updateNewMessageBodyActionCreator = (text)=>({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })





export default store