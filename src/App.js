import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from "./Components/Header/Header"
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/dialogs" element={<Dialogs />} />
                      <Route path="/profile" element={<Profile />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;
