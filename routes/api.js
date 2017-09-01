const Router = require('express').Router;
const router = new Router();

const usuario  = require('../model/usuario/usuario-router');

router.use('/usuario', usuario);

module.exports = router;