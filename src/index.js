import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    {id: 1, message:"Hi,how are you", likeCount:0},
    {id: 2, message:"My first post", likeCount:24}]

let dialogs =
       [{id: 1,name: 'Dimych'},
        {id: 2,name: 'Andrey'},
        {id: 3,name: 'Sveta'},
        {id: 4,name: 'Sasha'},
        {id: 5,name: 'Victor'},
        {id: 6,name: 'Valera'}]

let messages =
       [{id: 1,message: 'hi'},
        {id: 2,message: 'yo'},
        {id: 3,message: 'How are you'},
        {id: 4,message: 'yo'},
        {id: 5,message: 'yo'},
        {id: 6,message: 'yo'}]


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
