var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')


app.use(session({ secret: 'keyboard cat', 
cookie: { maxAge: 60000 },
resave: false,
saveUninitialized: false
}))

app.use(cookieParser('kerboard cat'));

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(express.static(__dirname + '/public'));
app.post('/bmi', urlencodedParser, function(req, res,next){
var result = (parseInt(req.body.weight) / (parseInt(req.body.height)*parseInt(req.body.height)))/(0.0001);

res.cookie('result',result);

res.send('Result = ' + result);

var sess = req.session 
sess.views = 'BMI ='+result
console.log(sess.views);
next();
});
app.listen(8000);
console.log('server is running on 8000');


 