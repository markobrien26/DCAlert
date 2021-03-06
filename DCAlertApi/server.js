var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
Alert = require('./api/models/alertModel'),
Ssh = require('./api/models/sshModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
   next();
});


var routes = require('./api/routes/alertRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
