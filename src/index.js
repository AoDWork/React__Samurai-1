import store from './Components/redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StoreContext from './StoreContext'
import {Provider} from 'react-redux';


let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});

// state={state} dispatch={store.dispatch.bind(store)} store={store} - из Апп компонента