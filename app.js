var express = require('express');
var app = express();
var expressHbs = require('express-handlebars');
var bodyParser = require('body-parser');

var tweets  = require('./twitter');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

//server running
var server = app.listen(3030,function () {
    console.log("listening");
})

//GET home page
app.get('/',function (req,res) {
    res.render('home', { title: 'Express' });
})

//get movie tweets
app.post('/getTweets',function (req,res) {
    var consumer_key = req.body.consumer_key;
    var consumer_secret = req.body.consumer_secret;
    var access_token_key = req.body.access_token_key;
    var access_token_secret = req.body.access_token_secret;

    var date = req.body.date;
    var hour = req.body.hour;
    var minutes = req.body.minute;

    var tweet = tweets(consumer_key,consumer_secret,access_token_key,access_token_secret);
})

