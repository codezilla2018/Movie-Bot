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



