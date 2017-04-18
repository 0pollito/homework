var express = require('express');
var router = express.Router();
var db = require('db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('actividad');
});
router.get('/nueva', function(req, res, next) {
  res.render('actividad/nueva');
});
router.get('/editar', function(req, res, next) {
  res.render('actividad/editar');
});
router.get('/eliminar', function(req, res, next) {
  res.render('actividad/eliminar');
});
router.get('/areas', function(req,res, next){
  var conn= db.select();
  //var datos = [2];
  conn.query('select * from area', function(error, result){
     if(error) throw error;
     conn.end();
     res.render('actividad/nueva',{data: result});
     });
  /*conn.query('select * from empleado', function(error, result){
    if(error) throw error;
    conn.end();
    datos[1]=result;
  });*/
    //res.render('actividad/nueva',{data: datos});
});
router.post('/areas', function(req, res, next) {

});

module.exports = router
