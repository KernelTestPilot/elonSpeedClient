const express = require("express");
const database = require('./config/sqlConnection');
const cors = require('cors')
const users = require("./controller/usercontroller.js");
const twitter = require("./controller/twittercontroller.js");

const app = express();

app.use(cors());
app.use(express.json())

const http = require('http');
const { Server } = require('socket.io'); 
const server = http.createServer(app);


    //Skapar io server som react kan använda
    const io = new Server(server, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
      },
    });

    
//Establishes socket connection.
twitter.streamTweets(io);




app.get('/', (req, res) => {

  //testar så servern funkar, körs på 5000
  res.send('Hello world');
});





require("./routes/user.routes")(app);
server.listen(5000, () => {
  console.log(`Server is up and running on 5000 ...`);
  
});