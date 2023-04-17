import React, { useState } from "react";
import UserService from "../services/UserService";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navigate,redirect  } from "react-router-dom";

const Navbar = () => {
 

return(
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="nagvbar-item" href="https://twitter.com">
      <img src="https://img.freepik.com/free-icon/twitter_318-674515.jpg" alt="twitter logo" width="50" height="28">
    </img></a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
 

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info">
            <strong> <Link to="/register">Register</Link></strong>
          </a>
          <a class="button is-light">
            <Link to="/login">Log in</Link>
          </a>
        </div>
      </div>
    </div>


</nav>



)

}


export default Navbar;