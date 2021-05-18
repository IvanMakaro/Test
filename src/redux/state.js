

    let store={
        _state: {
        friends: [
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
            ]}
    },

        getState (){

            return this._state;
        },

        _callSubscriber (){},

        addPost () {
        let newPost = {
            id:5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
    },

        updateNewPostText (newText) {
            this._state.profilePage.newPostText = newText
            this._callSubscriber(this._state)
    },

        addMessage (message) {
            let text={
                id: 5,
                message:message
            };
            this._state.dialogsPage.messages.push(text)
            this._callSubscriber(this._state)
        },

        subscribe (observer){
            this._callSubscriber = observer
        }
    }

export default store