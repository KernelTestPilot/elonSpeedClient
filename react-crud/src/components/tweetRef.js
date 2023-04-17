import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";


const TweetRef = ({tweets}) => {
  if (tweets.includes.users.length > 1 && tweets.includes.tweets.length > 1) {
    return    <>
      <article class="message is-small">
      <div class="message-body">
      <div class="level-left">
  <strong><p class="has-text-weight-bold is-capitalized">{tweets.includes.users[1].username}</p></strong>
  </div>
  <div class="level-left">
  <small> <p class="is-capitalized">@{tweets.includes.users[1].name}</p></small>
</div>
  <div class="level-left">
    <p class="subtitle-color-black is-6 has-text-left">
    {tweets.includes.tweets[1].text}
    </p>
    </div>
    </div>
    </article>
    </>;
  }
  return    <>
  
  </>;
}
 


export default TweetRef;