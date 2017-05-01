var express = require('express')
var app = express()
var router = express.Router();
var bodyParser = require('body-parser');
var books = [{'id':0,'name':'Sirirat','type': 'student','email': 'sirirat@hotmail.com','for':'Study','title':'CLIENT','room':'6303','date':'06/07/2017','timeb':'08:00','timee':'12:00'}, 
{'id':1,'name':'Wunvisa','type': 'student','email': 'sirirat@hotmail.com','for':'Test','title':'Softdev','room':'6315','date':'06/08/2017','timeb':'10:00','timee':'12:00'}]
/*router.get('/',function (req,res) {
res.json({ message: 'Bear created!' })
})*/
var coms=[{'id':0,'title':'แก้ปัญหาในส่วนของความสะดวกในการใช้งาน'}];
var index=1;
var book1= 2;
app.use(express.static('public'))
router.route('/books')
.get(function(req, res) {
res.json(books)
})
.post(function(req, res) {
var book = {};
book.id = book1++
book.name = req.body.name
book.type= req.body.type
book.email= req.body.email
book.for= req.body.for
book.title= req.body.title
book.room= req.body.room
book.date= req.body.date
book.timeb= req.body.timeb
book.timee= req.body.timee
book.com= req.body.com
books.push(book)
// res.json(pros); 
res.json({ message: 'Added a new booking'} )
});
router.route('/books/:book_id')
.get(function(req, res) {
res.json(books[req.params.book_id])
})
.put(function(req,res){
var id = req.params.book_id
books[id].name = req.body.name
books[id].type = req.body.type
books[id].email = req.body.email
books[id].for = req.body.for
books[id].title = req.body.title
books[id].room = req.body.room
books[id].date = req.body.date
books[id].timeb = req.body.timeb
books[id].timee = req.body.timee
books[id].com = req.body.com
// res.json(pros[id])
// res.json(pros[id])
res.json({message: 'Booking updated'})
})
.delete(function(req,res){
var id = req.params.book_id
delete books[id]
// res.json(pros)
res.json({message: 'Successfully deleted'})
})


router.route('/coms')
.get(function(req, res) {
res.json(coms)
})
.post(function(req, res) {
var com = {};
com.id = index++
com.title= req.body.title
coms.push(com)
// res.json(pros); 
res.json({ message: 'Added a new comment'} )
});
//app.put('/pros/:pro_id', pros.updatepros);
//router.route('/pros').get(function(req,res){res.json(pros)})
//app.use('/api',bodyParser.urlencoded({extended:false}),router)
app.use('/api', bodyParser.json(), router)
app.listen(50061, function() {
console.log('web server is running')
})