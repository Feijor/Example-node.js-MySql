const controller = require('./usuario-controller');
const Router = require('express').Router;
const router = new Router();  

router.route('/')
    .get((...args) => controller.listar(...args));

router.route('/login')
    .post((...args) => controller.login(...args));

module.exports = router;