const Controller = require('../../lib/controller');
const usuarioModel = require('./usuario-model');
const config = require('../../config');

class UsuarioController extends Controller {

    listar(req, res, next) {
        var _success = function(){
            usuarioModel.listausuarios("status = ?",
                                      ["ATIVO"],
                                      function(usuario){
                                        res.status(201).json(usuario);
                                      },
                                      function(error){
                                        res.status(400).json(error);
                                      });
        }

        var _error = function(){
            res.status(401).end();
        }

        this.autenticar(req, _success, _error);
    }

    login(req, res, next) {
        var _callbackSucesso = function () {
            usuarioModel.listausuarios("login = ? AND senha = ?",
                                      req.body,
                                      function(usuario){
                                        res.status(201).json(usuario);
                                      },
                                      function(error){
                                        res.status(400).json(error);
                                      });
        };

        var _callbackErro = function () {
            return res.status(401).end();
        };

        this.autenticar(req, _callbackSucesso, _callbackErro);
    }
    
    autenticar(req, callback, callbackErro) {
        var authorization = req.headers['authorization'];
        if (authorization == config.token_web) {
            callback();
        } else {
            callbackErro();
        }
    }
}

module.exports = new UsuarioController(usuarioModel);