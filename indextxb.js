const tmi = require('tmi.js'),
    { channel, username, password, client_id, api_access_token, channel_access_token } = require('./settingstxb.json');

var request = require('request');


const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const headers = {
    Authorization: `Bearer ${api_access_token}`,
    'Client-Id': client_id
}

const headers_2 = {
    Authorization: `Bearer ${channel_access_token}`,
    'Client-Id': client_id,
    'Content-Type': 'application/json'
}

async function getUser(user) {
    const params = { login: user };
    const result = await fetch(`https://api.twitch.tv/helix/users?` + new URLSearchParams(params), {
      method: 'GET',
      headers: headers
    }).then((response => response.json()))
    
    return result
}

async function getRandomViewer(channel_name) {
    const params = {channel : channel_name}

    const result = await fetch("https://2g.be/twitch/randomviewer.php?" + new URLSearchParams(params), {
        method: 'GET',
    }).then((response => response.text()))

    return result
}

function extractArgs(str) {
    const regex = /\(([^)]*)\)|\b(\w+)\b/g;
    return Array.from(str.matchAll(regex), match => match[1] || match[2]);
}

const client = new tmi.Client(options);
client.connect().catch(console.error);

// client.on('connected', () => {
   // client.say(channel, ` باك 2020Rivalry`);
// });

const listeiad = [' ايودي', 'ابو طوطو', 'ابو طارق','تكسبر','ايااااد',' تي اكس بي ','txb_r',]

let randomElementeiad = listeiad[Math.floor(Math.random()*listeiad.length)]
        
console.log(randomElementeiad)

const listrd = ['لبيه','ارحب','هلا','نعم','عيوني هلا','امرني',]

let randomElementrd = listrd[Math.floor(Math.random()*listrd.length)]
        
console.log(randomElementrd)

const listem = ['madxSleepy  ','riyadh3Riad2 ','shaker2Belly  ','x3koosWeird ','txbrWow ','txbrNote  ','lordmaComfy ','lordmaEZ ','shaker2Peek ','shaker2Lollipop ','shaker2Popcorn ','shaker2Anya ', 'كف؟','shaker2Yawn ','ffara7Hmm ', '','','','','','', '','','','','', '','','','','','', '','','','','', '','','','','','', '','','','','', '','','','','','', '','','','','', '','','','','', /* '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '','','','', '','','','','', '','','','','', '','','','','', '','','','','', '','', '','','','','', '','','','','', '','','','','', '', */]

let randomElementem = listem[Math.floor(Math.random()*listem.length)]
        
console.log(randomElementem)

/* setInterval(function () {
          console.log(client.say(channel, ` ${listem[Math.floor(Math.random()*listem.length)]} `))
  },600000); */

client.on('message', (channel, user, message, self,) => {
    if(self) return;

    const firstWord = message.split(' ')[0];

    var args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();
    const username = user["display-name"]
    const badges = user.badges
    const isMod = user.mod || (badges && user.badges["broadcaster"])
    if (command == 'prediction' && isMod) {
        args = args.join(" ")
        args = extractArgs(args);
        console.log(args)
        if (!args) {
            client.say(channel, `@${username} you didn't precise any arguments, please try again!`)
            return 0;
        }

        if (args.length < 4) {
            client.say(channel, `@${username} you need at least 4 arguments to start a prediction!`);
            return 0;
        }

        if (args.length > 12) {
            client.say(channel, `@${username} too many arguments (max of 12)`)
            return 0;
        }

        if (!Number.isInteger(+args[args.length - 1]) || args[args.length -1] == "0") {
            client.say(channel, `@${username} make sure you well precise a non-zero duration (in seconds)!`)
            return 0;
        }

        // args = [x.split("( )") for (x of )]
        // console.log(args.join(" ").split(/\s*(?![^()]*\))/))
        // args = args.join(' ')
        //                 .split( /\s*(?![^()]*\))/)
        //                .map(x => x.replace(/[()]/g, ''));
        url = 'https://api.twitch.tv/helix/predictions'
        title = args[0]
        outcomes = args.slice(1, -1).map(arg => ({title : arg}))
        prediction_window = +args[args.length - 1]
        getUser("txb_r").then((data) => {
            channel_id = data["data"][0].id
            body_params = {
                'broadcaster_id': channel_id,
                title: title,
                outcomes: outcomes,
                'prediction_window': prediction_window
            }
        fetch(url, {
            method: 'POST',
            headers: headers_2,
            body: JSON.stringify(body_params)
          })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data["data"]) {
                    client.say(channel, `@${user.username}, prediction "${title}" started successfully!`)
                } else {
                    client.say(channel, `@${user.username}, There is already a prediction running or there was an error while requesting! Please try again!`)
                }
            }).catch(error => client.say(channel, `@${user.username}, There is already a prediction running or there was an error while requesting! Please try again!`));
        })
    }

    getRandomViewer("txb_r").then(randomuser => {

        if (username){
            client.say(channel,  ` ${listem[Math.floor(Math.random()*listem.length)]}  `);
        }

        if(firstWord == 'السلام')  {
            client.say(channel, `@${user.username} وعليكم السلام ورحمة الله و بركاته   `);
        }
    
    /* if(firstWord == 'hello') {
        client.say(channel, `@${user.username}, hello!`);
    }

    if(firstWord == 'السلام')  {
        client.say(channel, `@${user.username} وعليكم السلام ورحمة الله و بركاته   `);
    }

    if(firstWord == 'سلام')  {
        client.say(channel, `@${user.username} وعليكم السلام ورحمة الله و بركاته   `);
    }

    if(firstWord == 'برب') {
        const listبر = [`@${user.username} خذ راحتك `,`@${user.username} تيت`,`@${user.username} في امان الله`,]

let randomElementبر = listبر[Math.floor(Math.random()*listبر.length)]
        
console.log(randomElementبر)
        client.say(channel, ` ${listبر[Math.floor(Math.random()*listبر.length)]}`);
    }
    
    if(firstWord == 'باك') {
        client.say(channel, `@${user.username} ولكم باك`);
    }

    if(firstWord == '@txb_r') {
        client.say(channel, `@${user.username} ${listem[Math.floor(Math.random()*listem.length)]} `);
    }

    if(firstWord == 'اياد') {
        client.say(channel, `@${user.username} ${listrd[Math.floor(Math.random()*listrd.length)]} `);
    }

    if(firstWord == 'كيفك') {
        client.say(channel, `@${user.username} اللهم لك الحمد `)
    }

    if(firstWord == 'كيفكم') {
        client.say(channel, `@${user.username} اللهم لك الحمد `)
    }

    if(firstWord == 'الحمد') {
        client.say(channel, `@${user.username} يا جعلها دايمه  `);
    }

    if(firstWord == '👤') {
        client.say(channel, ` شكرا على الفولو `);
    } */

    if (firstWord == '✔️') {
        if(username == 'WizeBot') {
        client.say(channel,'السلام عليكم')
        client.say(channel,'كيفكم طيبين')
    }}

    if (firstWord == '❌') {
        if(username == 'WizeBot') {
        client.say(channel,'ما قصرت شكرا على البث')
        setTimeout(function () {
    
            console.log(client.say(channel, `${listس[Math.floor(Math.random()*listس.length)]}`));
           
       },2000);
    }}

})});

/* client.on('cheer', (channel, userstate) => {
    const bits = userstate.bits;
    const username = userstate['display-name'];
    
    if(bits)
        client.say(channel,`قلوب @${username}`)
        setTimeout(function () {
        
            console.log(client.say(channel, `shaker2XDance shaker2XDance shaker2XDance shaker2XDance  `));
           
       },2000);

       setTimeout(function () {
        
        console.log(client.say(channel, `txbrDance txbrDance txbrDance txbrDance txbrDance `));
       
   },4000);

}); */

