var express = require('express'); 
var app = express(); 
var router = express.Router(); 
var bodyParser = require('body-parser')

var seniors  = [{'id':0,'message':'5635512063 Anti-theft System','like':57,'share':14},
			 {'id':1,'message':'5635512017 Phuket RO Water System','like':51,'share':13}];

var seniorIndex = 2;

app.use(express.static('public')) 

router.route('/seniors') 
	.get( function(req,res) {
		res.json(seniors);
	})
	
	.post(function(req, res) { 
	    var senior = {}; 
	    senior.id = seniorIndex++
	    senior.message = req.body.message
	    senior.like = req.body.like
		senior.share = req.body.share
	    seniors.push(senior); 
		res.json( {message: 'Bear created!'} )
	})
  
router.route('/seniors/:senior_id')
	.get(function(req,res){
		res.json(seniors[req.params.senior_id] )
	})

	.put(function(req,res){
		var id = req.params.senior_id
		seniors[id].message = req.body.message
		seniors[id].like = req.body.like
		seniors[id].share = req.body.share
	})

	.delete(function(req,res){
		var id = req.params.senior_id
		delete seniors[id]
	})

app.use('/api', bodyParser.json(), router)
app.listen(8000, function() {
	console.log('Web server is running')
})
