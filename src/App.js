import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
  return (
      <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends = {props.state.friends}/>
            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render = {() => <Dialogs
                    dialogs={props.state.dialogsPage.dialogs}
                    messages ={props.state.dialogsPage.messages}/>}/>
                <Route exact path='/profile' render = {() => <Profile
                    posts={props.state.profilePage.posts}/>}/>
                <Route exact path='/news' render = {() => <News/>}/>
                <Route exact path='/music' render = {() => <Music/>}/>
                <Route exact path='/settings' render = {() => <Settings/>}/>
            </div>
        </div>
        </BrowserRouter>
        )
}

export default App;