# Twitter Bot: Patrick's Whatever
[Patrick's Whatever Twitter Acccount can be found here.](https://twitter.com/pats_whatever)

This is a Twitter bot that sends out random, mashed-up Patrick Star quotes.

It is built with node.js. Packages used include [twit](https://www.npmjs.com/package/twit) and [rita](https://www.npmjs.com/package/rita).


## Set Up the Bot
- Get your api info from [Twitter Developer](https://developer.twitter.com/) by creating a web app.
- Download the zip file or clone this respository to your desired directory on your computer.
- Download [node.js](https://nodejs.org/en/download/)
- In your terminal, navigate to your directory that contain the respository and type in `npm install twit` and `npm install rita` to install the packages.
- Create a new file called config.js in the same directory as bot.js, and copy paste the code below:
```
module.exports = {
  consumer_key:         'YOURS',
  consumer_secret:      'YOURS',
  access_token:         'YOURS',
  access_token_secret:  'YOURS',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
}
```

## Run The Bot
In your terminal, navigate to the directory containing the files, and type `node bot.js` to run the bot.

It should send a Tweet to your set account.



__________________________________
Created by Alex Yixuan Xu.