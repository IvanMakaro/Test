import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendReducer from "./friend-reducer";
import userReducer from "./users-reducer";



let reducer = combineReducers({
    friendsPage: friendReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: userReducer,
})

let store = createStore(reducer)

window.store = store

export default store;