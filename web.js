var express = require('express');
var app = express();
var people = [{'id':1,'name':'john', 'ege':20}, 
			  {'id':2,'name':'jack', 'ege':25}];

app.use('/user/:id', function (req, res, next) {
		
console.log('Request Type:', req.method);
console.log('Request id: ',req.params.id);
next();
});

app.get('/user/:id', function(req, res){
out = '<html></h1>' 
		+people[req.params.id-1].name
		+ '</h1><html>'
res.send(out)
});

app.listen(8000);

