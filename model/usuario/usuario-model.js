var config = require('../../config');

class UsuarioModel {

  listausuarios(filtro, values, success, erro){
    var sql = "SELECT * FROM usuario WHERE " + filtro;
    
    config.conetion.query(sql, values, function (err, result, fields) {
      if (err) erro(err);
      success(result);
    });
  }
  
}

module.exports = new UsuarioModel();