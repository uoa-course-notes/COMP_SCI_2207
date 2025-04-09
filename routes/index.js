var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var counter = 0;
router.get('/count', function(req, res, next){
  counter++;
  console.log(String(counter));
  res.send(`The browser received something to be sent, in this case the counter ---> ${counter}`);
  // res.send(); deprecated 
  // res.sendStatus(404);
});




module.exports = router;