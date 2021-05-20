import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {Route} from "react-router-dom";



const App = (props) => {
  return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsPage = {props.state.friendsPage}/>
            <div className='app-wrapper-content'>

                <Route exact path='/dialogs' render = {() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                   />}/>

                <Route exact path='/profile' render = {() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch = {props.dispatch}
                />}/>

                <Route exact path='/news' render = {() => <News/>}/>
                <Route exact path='/music' render = {() => <Music/>}/>
                <Route exact path='/settings' render = {() => <Settings/>}/>
            </div>
        </div>
        )
}

export default App;