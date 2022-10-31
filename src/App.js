import React from "react";
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer"
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileContainerDyn from "./Components/Profile/ProfileContainerFunctional";
import LoginPage from "./Components/Login/Login";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/profile/:userId?" element={<ProfileContainer />} />
                        {/* <Route path="/profile/:userId" element={<ProfileContainerFunctional />} /> */}
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
