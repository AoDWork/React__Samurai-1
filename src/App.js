import React from "react";
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer"
import Navbar from "./Components/Navbar/Navbar";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";
//import ProfileContainerDyn from "./Components/Profile/ProfileContainerFunctional";
import LoginPage from "./Components/Login/Login";
import { connect } from 'react-redux';
import { initializeApp } from '../src/Components/redux/app-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from "./Components/common/preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <LoginPage />} />
                </div>
            </div>
        );
    }
}

const mapSateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapSateToProps, { initializeApp }))(App);