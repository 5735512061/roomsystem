var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')


app.use(cookieParser('kerboard cat'));

app.get('/ck_get', function(req,res){
	var result = reg.cookies['bmi'];
	res.send('Result ='+ result);
})

app.listen(8000);
console.log('server is running on 8000');