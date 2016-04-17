var express       = require('express');
var http          = require('http');
var port          = process.env.PORT || 3000;
var bodyParser    = require('body-parser');
var cors          = require('cors');
var passport      = require('passport');

// Routes
var contacts      = require('./routes/contacts/contacts');
var projects      = require('./routes/projects/projects');
var techs         = require('./routes/techs/techs');
var users         = require('./routes/users/users');

var app           = express();
var server        = http.Server(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
var apiRoot = '/api/v1'
app.use(apiRoot + '/contacts' , contacts);
app.use(apiRoot + '/projects' , projects);
app.use(apiRoot + '/techs'    , techs);
app.use(apiRoot + '/users'    , users);


server.listen(port, function(){
  console.log("Server listening on ", port);
});
