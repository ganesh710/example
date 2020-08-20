var express = require('express');
var router = express.Router();
var monk = require('monk');
var db = monk('localhost:27017/example');
var collection = db.get('signupdata');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/postsignupdata', function(req, res) {
  console.log(req.body);
  collection.insert(req.body,function(err,docs) {
  	if(err){
  		console.log("error");
  	}
  	else{
  		console.log("details sent to database");
  		console.log(docs);
  		res.send(docs);
  	}
  });
});

module.exports = router;
