import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import  profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer, 
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 91- подключили redux dev tools

//window.store = __store__; //! так в консоли можно в любой момент посмотреть что находится в store, написав store.getState()
                          // 91 переименовали чтобы не было конфликтов с redux dev tools

export default store;