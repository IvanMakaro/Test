let rerenderEntireTree = ()=>{}


const state = {
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
}

export const addPost = () => {

    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = (message) => {
    let text={
        id: 5,
        message:message
    };
    state.dialogsPage.messages.push(text)
    rerenderEntireTree(state)
}


export const subscribe = (observer) =>{
    rerenderEntireTree = observer
}

export default state