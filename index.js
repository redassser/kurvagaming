var Discord = require("discord.js");
var client = new Discord.Client();
var config = require("./config.json");
var prefix = "/ss";
var request = require('request');
var cheerio = require('cheerio');
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("/ss");
  
});

client.on("message", (message) => {
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 var portEnd = 6;
 var title = 6;
 if (message.channel.id === "445104434830114817" || message.channel.id === "455850599100186625") {
    if (command === "1"||command === "2"||command === "3"||command === "4"||command === "5"||command === "6"||command === "7"||command === "b") {   
if (command === "1") {
  var title = 1;
  var portEnd = 77;
}
if (command === "2") {
  var title = 2;
  var portEnd = 78;
}
if (command === "3") {
  var title = 3;
  var portEnd = 80;
}
if (command === "4") {
  var title = 4;
  var portEnd = 81;
}
if (command === "5") {
  var title = 5;
  var portEnd = 82;
}if (command === "6") {
  var title = 6;
  var portEnd = 83;
}
if (command === "7") {
  var title = 7;
  var portEnd = 84;
}
if (command === "b") {
  var title = "but 2 big";
  var portEnd = 79;
}
	   	     request(`https://kigen.co/scpsl/getinfo.php?ip=69.30.198.74&port=77${portEnd}`, function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
				 message.channel.send({"embed": {
    "color": 9245716,
    "title": `Peanut Worshiper Net ${title} [OFFLINE]`,
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "69.30.198.74",
          inline: true
        },
        {
          name: "PORT:",
          value: `77${portEnd}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: 'N/A',
          inline: true
        }
          ],
      }
     });  
   }
   else {
	   var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf");
     } else {
          var playerCount = json.players;
      message.channel.send({"embed": {
    "color": 3498293,
    "title": `Peanut Worshiper Net ${title}`,
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: "69.30.198.74",
          inline: true
        },
        {
          name: "PORT:",
          value: `77${portEnd}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });       
     }
   }
   
		}
		 });
 }
    }
});
client.login(process.env.BOT_TOKEN);
