import React, { Component } from "react";

import store from './Components/redux/redux-store';
import Navbar from "./Components/Navbar/Navbar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginPage from "./Components/Login/Login";

import { HashRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Components/redux/app-reducer';
import Preloader from "./Components/common/preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
import './App.css';


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
                    <Switch>
                        <Route exact path="/" render={ ()=> <Redirect to={"/profile"}/>} />

                        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />

                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <LoginPage />} />
                        
                        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                    </Switch>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SamuraiApp;