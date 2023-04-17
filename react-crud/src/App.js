import logo from './logo.svg';
import './App.css';
import './bulma/css/bulma.css';
import React, { useState,  useEffect } from "react";

import { Routes, Route, Link, Navigate,useNavigate } from "react-router-dom";

import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import useToken from './components/useToken';



function App() {
  const { token, setToken } = useToken();

  /*
  if(!token) {
    return (

    <div className="container mt-3">
        <Navbar/>
<Login setToken={setToken}/>
  </div>
    )
    
  }
  */
  return (
    <section class="hero is-info is-fullheight">
    <div class="hero-body">
    <div class="container has-text-centered">
    <div class="container is-max-desktop">
     <Navbar/>
      <div className="container mt-3">
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login setToken={setToken}/>} />
          <Route path="/" element={<Home user={token}/>} />
        </Routes>
      </div>
  </div>

        </div>
    </div>
    </section>

 
  );
}

export default App;
