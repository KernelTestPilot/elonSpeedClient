
const { TwitterApi } = require('twitter-api-v2');


const client = new TwitterApi('YOURKEY');
 

const { ETwitterStreamEvent } = require('twitter-api-v2');


const startStream = (socket) => {
  (async () => {
    const stream = await client.v2.searchStream({
      'tweet.fields': ['referenced_tweets', 'author_id'],
      expansions: ['referenced_tweets.id','author_id'], autoConnect: false
    } );
    stream.close()
    console.log("stopped stream")
  stream.on(ETwitterStreamEvent.Data, async (tweet) => {
    console.log(tweet)
    const isARt = tweet.data.referenced_tweets?.some(tweet => tweet.type === 'retweeted') ?? false;
    if (isARt) {
      return;
    }else{socket.emit('latest tweets', tweet)  }
             
  });
await stream.connect();
  socket.on('stop stream', () => { stream.close(), deleteRules()
    console.log("stopped listen")
  })
          })().catch(e => {
            console.error(e);
          });
  }

const streamRules = (search, socket) => {
  (async () => {
    const rules =   await client.v2.streamRules()
    await client.v2.updateStreamRules({
    add: [
      { value: search.search },
    ],
  }).then(() => startStream(socket));
      })().catch(e => {
      console.error(e);
      });
  }


  exports.getUserid = (req, res) => {
    (async () => {
      console.log(req.body)
      const username = await client.v2.get('users/'+req.body.id+'')
      console.log(username)

      res.send(username)

            })().catch(e => {
              res.status(400).send("Something went wrong")
              res.end();
              console.error(e);
            });
    }

  

  const deleteRules = () => {
    (async () => {
      const rules =   await client.v2.streamRules()
      if (rules.data?.length) {
        await client.v2.updateStreamRules({
        delete: { ids: rules.data.map(rule => rule.id) },
      });
    }else{
      console.log("no rules")
    }
        })().catch(e => {
        console.error(e);
        });
    }

exports.streamTweets = (io) => {
         io.on('connection',  (socket) => {
          console.log("socket connected")
             socket.on('start stream',  (search) => {
              console.log(search)
               deleteRules()
               streamRules(search, socket);
              console.log('stream start')
            })
        })
       
}


