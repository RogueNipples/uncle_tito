var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /Tito?/;

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  } else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

  var randomnum = Math.floor((Math.random() * 38) + 1);
  if (randomnum > 37)
    {
        botResponse = "You can paint the coconut shell, but you can’t change the milk inside.";
    }
    else if (randomnum > 36)
    {
        botResponse = "A wise man cherishes today because tomorrow he could meet the fiery end at the bottom of a volcano.";
    }
    else if (randomnum > 36)
    {
        botResponse = "He who misses the tide, must wait for the next moon.";
    }
    else if (randomnum > 36)
    {
        botResponse = "Man who tries to predict when volcano will blow, is usually toast by next day.";
    }
    else if (randomnum > 36)
    {
        botResponse = "Just ’cause you’re riding the high tide, doesn’t mean you’ve chosen the right course.";
    }
    else if (randomnum > 37)
    {
        botResponse = "If there is anyone in the village who can understand why the new chief made the mistake of planting coconuts near the volcano, it’s the old chief.";
    }
    else if (randomnum > 36)
    {
        botResponse = "Inside every rotten pineapple, there may be a pearl.";
    }
    else if (randomnum > 35)
    {
        botResponse = "A coconut is a hard nut to crack. Then again, it takes something hard to crack the coconut.";
    }
    else if (randomnum > 34)
    {
        botResponse = "Every wave has to come to the shore at some point.";
    }
    else if (randomnum > 33)
    {
        botResponse = "Some coconuts have thicker shells than others.";
    }
    else if (randomnum > 32)
    {
        botResponse = "Never drink the milk from a coconut you found in the dark.";
    }
    else if (randomnum > 31)
    {
        botResponse = "Sometimes a pineapple wishes it was a coconut.";
    }
    else if (randomnum > 30)
    {
        botResponse = "He who is on the canoe is responsible for the journey, whether he has a paddle or not.";
    }
    else if (randomnum > 29)
    {
        botResponse = "He who rubs his enemy’s face in the sand, gets buried in the sand with him.";
    }
    else if (randomnum > 28)
    {
        botResponse = "The mouth cannot speak what the mind does not leak.";
    }
    else if (randomnum > 27)
    {
        botResponse = "No common brudda ever knows the pain of the flower as it grows.";
    }
    else if (randomnum > 26)
    {
        botResponse = "When surfers don’t ride, potatoes ain’t fried.";
    }
    else if (randomnum > 25)
    {
        botResponse = "The Hawaiian ancients had an expression for someone who competes against his best friend and business partner: real bonehead.";
    }
    else if (randomnum > 24)
    {
        botResponse = "Just because you can afford the modern longboard, doesn’t mean you can honor the moving water.";
    }
    else if (randomnum > 23)
    {
        botResponse = "Never provoke the wrath of a ten year old.";
    }
    else if (randomnum > 22)
    {
        botResponse = "If you’re walking on a beach, and you step on a crab, even if you didn’t mean to, you should go back and apologize. After all, that crab could be in your soup later on.";
    }
    else if (randomnum > 21)
    {
        botResponse = "The coconut, though hard and brown, in the spring gives milk to the sand, after being kissed by the green water.";
    }
    else if (randomnum > 20)
    {
        botResponse = "The most important races are won in the ocean of the soul.";
    }
    else if (randomnum > 19)
    {
        botResponse = "Sometimes, the bird sings, sometimes it coughs up a worm.";
    }
    else if (randomnum > 18)
    {
        botResponse = "Sometimes, it’s best to trust the weight of experience, and I’ve got plenty of experience!";
    }
    else if (randomnum > 17)
    {
        botResponse = "Fly the kite; it must not fly you.";
    }
    else if (randomnum > 16)
    {
        botResponse = "There is no I in the word team.";
    }
    else if (randomnum > 15)
    {
        botResponse = "Don’t do the crime, if you can’t do the time.";
    }
    else if (randomnum > 14)
    {
        botResponse = "The bird that flies alone, is the goose that gets cooked.";
    }
    else if (randomnum > 13)
    {
        botResponse = "The coconut is always sweeter on the palm tree you can’t reach.";
    }
    else if (randomnum > 12)
    {
        botResponse = "The seagull that flies a crooked path, has a tough time returning home.";
    }
    else if (randomnum > 11)
    {
        botResponse = "When you’re itching for the waves, the only lotion is the ocean.";
    }
    else if (randomnum > 10)
    {
        botResponse = "When the sea turtle retreats into its hardened shell, just give him time – he’ll show up, especially when there’s teriyaki barbecue chicken.";
    }
    else if (randomnum > 9)
    {
        botResponse = "He who carves himself in stone, has rocks in his head.";
    }
    else if (randomnum > 8)
    {
        botResponse = "Blood is thicker than water, but not as refreshing.";
    }
    else if (randomnum > 7)
    {
        botResponse = "The sands of the beach must change with each new wind.";
    }
    else if (randomnum > 6)
    {
        botResponse = "The pelican can fly as high as the stars, if she believes she can.";
    }
    else if (randomnum > 5)
    {
        botResponse = "You can’t compare pineapples and coconuts.";
    }
    else if (randomnum > 4)
    {
        botResponse = "The village of a chief who won’t forget the past, may as well forget about the future.";
    }
    else if (randomnum > 3)
    {
        botResponse = "The green pineapple never falls from the tree by accident.";
    }
    else if (randomnum > 2)
    {
        botResponse = "The sun cannot drink its favorite pineapple in the field.";
    }
    else if (randomnum > 1)
    {
        botResponse = "Man who’s always watching for fallen coconut ends up stubbing toe.";
    }
    else botResponse = "A crashing wave may thrill the breath, but can’t replace the ocean depth.";


  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}


exports.respond = respond;
