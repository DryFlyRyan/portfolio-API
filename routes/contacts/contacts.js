var express = require('express');
var app = express();
var router = express.Router();

console.log("hitting route");

router.get('/', function(req,res) {
  res.send('route hit');
})

module.exports = router;
