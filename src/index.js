import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Components/redux/state'
// import { addPost } from './Components/redux/state';
// import { updateNewPostText } from './Components/redux/state';
// import {subscribe} from './Components/redux/state';


let rerenderEntireTree = (store) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);