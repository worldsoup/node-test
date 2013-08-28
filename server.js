console.log('server starting!')
var deployd = require('deployd');

var options = {
  port:process.env.PORT || 80,
  db:{
    port:10095,              // \
    host:"dharma.mongohq.com", //  \ 
    name:"app16925968",      //   \
    credentials:{            //   / replace with your own settings
      username:"master", //  /
      password:"Woodstock0"  // /
    }
  }

};
var server = deployd(options);
server.listen();
console.log('server running!')  