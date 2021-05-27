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
let  stateCopy;
     switch (action.type) {
         case ADD_POST :
             let newPost = state.newPostText;
             return {...state, newPostText: '',
            posts: [...state.posts, {id:5, message: newPost, likeCount: 0}]
     }

         case UPDATE_NEW_POST_TEXT:
             return {
                 ...state,
             newPostText: action.newText
             };
         default: return state
     }
}

export const addPostActionCreator = ()=>{

    return{ type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text)=>({ type: UPDATE_NEW_POST_TEXT, newText: text })

    export default profileReducer