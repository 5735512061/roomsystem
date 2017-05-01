var express = require('express'),
	app = express(),
	router = express.Router(),
	bodyParser = require('body-parser')
  
var bears = [{'id':0,'name':'Panda','weight':130},
			 {'id':1,'name':'Polar','weight':150}];

var bearIndex = 2;

app.use(express.static('public')) 

router.route('/bears') 
	.get( function(req,res) {
		res.json(bears);
	})

	.post(function(req, res) { 
	    var bear = {}; 
	    bear.id = bearIndex++
	    bear.name = req.body.name
	    bear.weight = req.body.weight
	    bears.push(bear); 
	})
  
router.route('/bears/:bear_id')
	.get(function(req,res){
		res.json(bears[req.params.bear_id] )
	})

	.put(function(req,res){
		var id = req.params.bear_id
		bears[id].name = req.body.name
		bears[id].weight = req.body.weight
	})

	.delete(function(req,res){
		var id = req.params.bear_id
		delete bears[id]
	})

app.use('/api', bodyParser.json(), router)
app.listen(8000, function() {
	console.log('Web server is running')
})
