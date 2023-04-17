import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

import io from 'socket.io-client';

import {useLocation} from 'react-router-dom';

import { Routes, Route, Link, Navigate,useNavigate } from "react-router-dom";

import Login from "./Login";
import Tweet from "./tweet";

const socket = io.connect('http://localhost:5000/'); // server connection


socket.onAny((event, ...args) => {
  console.log(event, args);
});

const Home = ({user}) => {
  
  const [tweets, setTweet] = useState( []);
  const [search, setSearch] = useState( []);



  const mapTweetsToState = (tweet) => {
      setTweet([tweet, ...tweets] );

  }

  useEffect(() => {
    socket.on('latest tweets', mapTweetsToState)
  });

  const handleInputChange = event => {
    const {value } = event.target;
    setSearch(value);
  };

  const startStream = () => {
    setTweet([])
    
    socket.emit('start stream', {search});
  
  }
  const stopStream = () => {
    socket.emit('stop stream', () => {}); 
  
  }
  
  return( <div> 
    {console.log(search)}
<div className="box">
<div class="field is-grouped">
            <p class="control is-expanded">
            <input
            placeholder="Search your keyword"
              type="text"
              className="input"
              id="search"
              required
              value={search}
              onChange={handleInputChange}
              name="search"
            />
            </p>
       
     
     
  <p class="control">
    <button class="button is-info" onClick={startStream}>
      Start stream
    </button>
  </p>
  
  <p class="control">
    <button class="button is-danger" onClick={stopStream}>
      Stop stream
    </button>
  </p>
</div>
</div>
<progress class="progress is-link" value={tweets.length} max="100">30%</progress>

<div className='container is-fluid is-Light'>


          {tweets.map((tweet) => {
            return (
              <Tweet data = {tweet}/>
            )
          })}
    
        </div>

  </div>)



      
    };
    



export default Home;