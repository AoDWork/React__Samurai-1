import store from './Components/redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// root.render(     //! 90 рефакторинг. Димыч сказал что нужно тут оборачивать BrowserRouter потому что будет конфликт с withRouter
//   <React.StrictMode>   //! попробую сделать как у него
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
