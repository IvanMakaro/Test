import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";


const App = (props) => {
debugger
  return (
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer/>

            <div className='app-wrapper-content'>
                <Route exact path='/dialogs' render = {() => <DialogContainer/>}/>
                <Route exact path='/profile' render = {() => <Profile/>}/>
                <Route exact path='/news' render = {() => <News/>}/>
                <Route exact path='/music' render = {() => <Music/>}/>
                <Route exact path='/settings' render = {() => <Settings/>}/>
            </div>
        </div>
        )
}

export default App;