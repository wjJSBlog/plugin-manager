var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/xml', function(req, res, next){
  res.setHeader("Content-Disposition", "attachment;filename=theFileName.xml");
  fs.readFile(path.resolve(__dirname , "../Vul_report.xml"), function(err, data){
   res.write(data);
   res.end();
  }); 
});

module.exports = router;
