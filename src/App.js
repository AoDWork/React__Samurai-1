import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile"  element={<Profile profilePage={props.appState.profilePage}
                                                dispatch={props.dispatch} />} />
                        <Route path="/dialogs" element={<Dialogs state={props.appState.dialogsPage} 
                                                dispatch={props.dispatch} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
