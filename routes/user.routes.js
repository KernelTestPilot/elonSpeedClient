module.exports = app => {
    const user = require("../controller/usercontroller.js");
    const twitter = require("../controller/twittercontroller.js");

    var router = require("express").Router();
    const session = require('express-session');

          
    router.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    }));

    

    // Create a new user
  router.post("/register", user.create);


  router.post("/login", user.login);

  router.post("/getid", twitter.getUserid);



    app.use('/user', router);
  };

  