var express = require('express');
var router = express.Router();
const db = require('../data/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello/', async function(req, res, next) {
  var ppl = await db.GetAllPeopleAsync();
  res.json(ppl.map(p => p.firstName)); 
});

router.get('/hello/:ID', async function(req, res, next) {
  var p = await db.GetPersonByIdAsync(req.params.ID);
  if(p != null){
    res.send(`Hello, ${p.firstName}! `);
  }else{
    res.send('Hello, stranger.');
  }
});


module.exports = router;
