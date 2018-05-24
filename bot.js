console.log("starting");
var Twit = require('twit');
const rss = require('feed-read-parser');

var config = require('./config');

var T = new Twit(config);

tweetArticle();
//scheduling to tweet in every 24 hours
setInterval(tweetArticle,3600000*24);


function sendTweet(message) {

    T.post('statuses/update', {status: message }, function(err, data,response) {
        if (err) {
            console.log(err);
        } else {
            console.log("tweeted");
            //console.log(response);
        }
    });
}

function tweetArticle() {
    rss("https://www.youtube.com/feeds/videos.xml?user=movieclipsTRAILERS", function(err,articles) {
        if(err) {
            throw new Error(err.message);
        } else {
            statusUpdate = "Check out this awesome movie trailer! " + articles[0].title + ' ' + articles[0].link;
            sendTweet(statusUpdate);
        }
    });
}

