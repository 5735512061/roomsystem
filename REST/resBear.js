var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = express.Router()

var bears=[{'id':0,'name':'pooh','weight':123},
		   {'id':1,'name':'winnie','weight':111}
		]


router.route('/bears')
			.get(function(req,res){
				res.json(bears)
				
			})
			.post(function(req,res){
				var bear={}
				bear.id = req.body.id
				bear.name = req.body.name
				bear.weight = req.body.weight
				bears.push(bear)
				res.json(bears)
				
			})

router.route('/bears/:bear_id')
			.get(function(req,res){
				res.json(bears[req.params.bear_id])			
			})

router.route('/bears/:bear_id')
			.put(function(req,res){
				res.json(bears)			
			})			
			
app.use('/api', bodyParser.urlencoded({extended:false}), router)

app.listen(80);
console.log('web server is running');