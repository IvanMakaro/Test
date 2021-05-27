const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi,how are you", likeCount: 0},
        {id: 2, message: "My first post", likeCount: 24}
    ],
    newPostText: 'it-kom'
}



 const profileReducer = (state = initialState, action) =>{

     switch (action.type) {
         case ADD_POST :{
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likeCount: 0
             };
             let stateCopy = {...state}
             stateCopy.posts = [...state.posts]
             stateCopy.posts.push(newPost)
             stateCopy.newPostText = '';
             return stateCopy
     }
         case UPDATE_NEW_POST_TEXT:{
             let stateCopy = {...state}
             stateCopy.newPostText = action.newText
             return stateCopy
     }
         default: return state
     }
}

export const addPostActionCreator = ()=>{

    return{ type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text)=>({ type: UPDATE_NEW_POST_TEXT, newText: text })

    export default profileReducer