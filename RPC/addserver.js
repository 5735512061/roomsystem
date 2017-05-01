var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')

var rpc = require('json-rpc2');
var server = rpc.Server.$create();

function add(args, opt, callback) {
callback(null, args[0] + args[1]);
}
server.expose('add', add);
server.listen(8000, 'localhost');