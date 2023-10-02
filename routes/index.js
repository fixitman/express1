var express = require('express');
var router = express.Router();

module.exports = (db)=>{

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.get('/hello/', async function(req, res, next) {
    var ppl = await db.GetAllPeopleAsync();
    res.json(ppl); 
    req.session.test = '1234';
    console.log(req.session.test);
  });
  
  router.get('/hello/:ID', async function(req, res, next) {
    var t = req.session.test? req.session.test : 0;
    var p = await db.GetPersonByIdAsync(req.params.ID);
    var name = p== null? 'stranger' : p.firstName;
     
    res.send(`Hello, ${name}! ${t}`);
  });

  return router;

};


