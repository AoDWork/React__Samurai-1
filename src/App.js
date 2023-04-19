import React from "react";
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer"
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer";
import { Route, Routes } from "react-router-dom";
//import ProfileContainerDyn from "./Components/Profile/ProfileContainerFunctional";
import LoginPage from "./Components/Login/Login";
import { connect, Provider } from 'react-redux';
import { initializeApp } from '../src/Components/redux/app-reducer'
import { withRouter, BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import Preloader from "./Components/common/preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
import store from './Components/redux/redux-store'

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));


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
                    <Route path="/dialogs" render={ withSuspense(<DialogsContainer />) } />
                    <Route path="/profile/:userId?" render={ withSuspense(<ProfileContainer />) } />

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

let AppContainer = compose(
    withRouter,
    connect(mapSateToProps, { initializeApp }))(App);

const SamuraiApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiApp;