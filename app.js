var Twitter = require('twitter');
const rss = require('feed-read-parser');

var client = new Twitter({
    consumer_key: 'Uur2peTuZ3UmqoWwHQ19P2g9I',
    consumer_secret: 'je9jqiulmVTGaUjQ1SvtOMJVhjznnI2RKWThYceNpOUamMbmJ3',
    access_token_key: '703839945618657280-NnFX8WdowbYiBU066qFcaeC7ytWygmH',
    access_token_secret: '5PCsHCUM6RRjblHi2awGrzVNANz4tpBoFl31i3IdYWIsu'
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
