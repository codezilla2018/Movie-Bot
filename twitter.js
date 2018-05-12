
var Twitter = require('twitter');
const rss = require('feed-read-parser');
const schedule = require('node-schedule');


module.exports = function (consumer_key,consumer_secret,access_token_key,access_token_secret) {

    var client = new Twitter({
        consumer_key: consumer_key,
        consumer_secret: consumer_secret,
        access_token_key: access_token_key,
        access_token_secret: access_token_secret

    });

    function sendTweet(message) {

        client.post('statuses/update', {status: message }, function(err, data,response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                console.log(response);
            }
        });
    }
    function tweetArticle() {
        rss("https://www.youtube.com/feeds/videos.xml?user=movieclipsTRAILERS", function(err,articles) {
            if(err) {
                throw new Error(err.message);
            } else {
                statusUpdate = "Check out this awesome post! " + articles[0].title + ' ' + articles[0].link;
                sendTweet(statusUpdate);
            }
        });
    }
//schedule the twitter time
//var tweet = schedule.scheduleJob({hour: 8, minute: 0, dayOfWeek: 1},tweetArticle);
    tweetArticle();
};


