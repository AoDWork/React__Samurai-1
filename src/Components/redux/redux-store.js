import {applyMiddleware, createStore, combineReducers} from 'redux';
import  profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
//import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer 
    //form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; // так в консоли можно в любой момент посмотреть что находится в store, написав store.getState()

export default store;