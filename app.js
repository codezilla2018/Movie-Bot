var Twitter = require('twitter');
const rss = require('feed-read-parser');

var client = new Twitter({
   

    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

function sendTweet(message) {

    client.post('statuses/update', {status: message }, function(err, data,response) {
        if (err) {
            console.log(err);
        } else {
            console.log('Tweeted: ' + data);
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
tweetArticle();
