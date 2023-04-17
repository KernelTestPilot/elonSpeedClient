import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";

import TweetRef from "./tweetRef";

const Tweet = ({data}) => {


return( 

<article class="message is-dark">
 
  <div class="message-body">
  <div class="level-left">
  <strong><p class="has-text-weight-bold is-capitalized">{data.includes.users[0].username}</p></strong>
  </div>
  <div class="level-left">
  <small><p class=" is-capitalized"> @{data.includes.users[0].name}</p></small>
</div>
<div class="level-left">
  <p class="has-text-weight-semibold	 has-text-left">{data.data.text} </p>
    </div>
  </div>

  <TweetRef tweets = {data}/>

</article>

)

}


export default Tweet;