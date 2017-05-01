var express = require('express')
var app = express()
var session = require('express-session')

app.use(session({ 
					secret: 'keyboard cat', 
					cookie: { maxAge: 60000 },
					resave: false,
					saveUninitialzed: false
				}))

app.use(function(req, res, next) {
	var sess = req.session
		if (sess.views) {
			sess.views++
		} 
		else {
			sess.views = 1
		}
console.log(sess.views)
sess.foo = "foo bar"
sess.guita = "wunvisa thammasoon"
next();
})



app.get('/', function(req,res){
	res.send('count = ' + req.session.views)

})

app.get('/foo', function(req,res){
	res.send('foo = ' + req.session.foo)

})

app.get('/guita', function(req,res){
	res.send('name = ' + req.session.guita)

})
app.listen(8000);
console.log('server is running on 8000');