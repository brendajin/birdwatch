var express = require("express");
var app = express();

var http = require('http');
var server	= http.createServer(app);

app.configure(function(){
	app.use(express.logger());

	app.use(express.static(process.env.PWD + '/public'));
	app.set('views', process.env.PWD + "/views");
	app.set('view engine', 'jade');
	app.engine('jade', require('jade').__express);

	app.use(express.bodyParser());

	app.use(express.favicon(process.env.PWD + '/public/favicon.ico'));
	
	app.use(express.cookieParser());
});


app.get('/', function(req,res) {
	res.render('index');
})

app.get('/:path', function(req, res) {
	res.render(req.params.path);
});

var port = process.env.PORT || 8111;
server.listen(port, function() {
  console.log("LISTENING ON PORT: "+port);
});