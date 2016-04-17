var server = require('../server');
var app = server.app;
var router = server.router;

router.route('/')

      .get(function(req,res){
        res.send('connected to api');
      })
