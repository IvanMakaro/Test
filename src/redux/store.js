import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


    let store= {
        _state: {
            friendsPage: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            profilePage: {
                posts: [
                    {id: 1, message: "Hi,how are you", likeCount: 0},
                    {id: 2, message: "My first post", likeCount: 24}
                ],
                newPostText: 'it-kom'
            },

            dialogsPage: {
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
            }
        },
        _callSubscriber() {
        },

        getState() {
            return this._state;
        },

        subscribe(observer) {
            this._callSubscriber = observer
        },

        dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state)


        }
    }





export default store