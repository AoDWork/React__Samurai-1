import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams} from "react-router-dom";


function App(props) {

//   let FunctionDialog = () => <Dialogs messagesData={props.appState.messagesData} dialogsData={props.appState.dialogsData}/>

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/dialogs" element={ <Dialogs /> } />
                      <Route path="/profile" element={ <Profile postsData={props.appState.postsData} /> } />
                      {/* <Route path="/profile" element={<Profile postsData={props.postsData} />} /> */}
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
