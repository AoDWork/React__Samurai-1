import {createStore, combineReducers} from 'redux';
import  profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store; // так в консоли можно в любой момент посмотреть что находится в store, написав store.getState()

export default store;