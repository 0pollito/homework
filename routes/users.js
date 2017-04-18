var express = require('express');
var router = express.Router();
var db = require('db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var conn= db.select();
  conn.query('select e.id_empleado,e.nombre,e.apellidopaterno,e.apellidomaterno,e.correo,e.telefono,e.puesto, (a.nombre) as area from empleado e inner join area a on e.id_area=a.id_area', function(error, result){
     if(error) throw error;
     conn.end();
     console.log(result);
     res.render('usuarios',{data: result});
     });
});
router.get('/nuevo', function(req, res, next) {
  var conn= db.select();
  //var datos = [2];
  conn.query('select * from area', function(error, result){
     if(error) throw error;
     conn.end();
     res.render('usuarios/nuevo', {data: result});
     });
});
router.get('/editar', function(req, res, next) {
  res.render('usuarios/editar');
});
router.get('/eliminar', function(req, res, next) {
  res.render('usuarios/eliminar');
});
router.get('/buscar', function(req, res, next) {
  res.render('usuarios/search');
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
router.post('/nuevo', function(req, res){
  var nombre=req.body.nombre;
  var ap=req.body.ap;
  var am=req.body.am;
  var area=req.body.area;
  var puesto=req.body.puesto;
  var email=req.body.email;
  var telefono=req.body.telefono;
  var conn= db.select();
  conn.query('select id_area from area where nombre = ?',[area], function(error, result){
     if(error) throw error;
     conn.end();
       console.log(result);
     db.insert("insert into empleado(nombre,apellidopaterno,apellidomaterno,correo,telefono,id_area,puesto) values(?,?,?,?,?,?,?)",
               [nombre,ap,am,email,telefono,result[0].id_area,puesto]);
     res.redirect('/usuario/');
     });
});
router.get('/detalleUsuario',function(req,res){

});

//pendiente *********
router.post('/buscar',function(req,res){
  var id=req.body.id;
  conn.query('select * from empleado where id_empleado = ?',[id], function(error, result){
     if(error) throw error;
     conn.end();
      console.log(result);
      res.redirect('/usuario/',{info: result});
     });

});
module.exports = router;
