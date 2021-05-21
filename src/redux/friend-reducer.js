import state from "./store";

let initialState=
    [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ];



const friendReducer = (state = initialState, action) =>{

    return state
}
export default friendReducer