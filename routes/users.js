var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:ID',(req,res)=>{
  res.send("ID: " + req.params.ID)
});

module.exports = router;
