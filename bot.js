console.log("The bot begins...")

let getTwit = require('twit');

let getConfig = require('./config.js');

let getGenerateTweet = require('./generateTweet.js');

// put account config in twit
let obj_Twit = new getTwit(getConfig);

function sendTweet(){
	let currentTweet = getGenerateTweet.generateTweet();
	console.log(currentTweet);

	let tweet = {
		status: currentTweet
	}

	obj_Twit.post('statuses/update', tweet, didItTweet);

	// call back function
	function didItTweet(err, data, response){
		if(err){
			console.log('did not tweet...')
		}
		else{
			console.log('tweeted!')
		}

	}

};

// send a tweet at intervals, every day at 4, 8, 12 am & pm
// four hour interval
/*
var d = new Date();
if (d.getHours()===0 || d.getHours()===4 || d.getHours()===8 || d.getHours()===12 || d.getHours()===16 || d.getHours()=== 20){
	if (d.getMinutes()===0 && d.getSeconds()===0){
		sendTweet();
	}
}
*/

// send a tweet
sendTweet();