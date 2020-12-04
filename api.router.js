const productosController = require('../controllers/productos.controller')
const usuariosController = require('../controllers/usuarios.controller')
const router = require('express').Router()
const userValidation = require('../validations/users.validation')



router.post('/usuarios', userValidation.isAuthorized, userValidation.isAdmin, usuariosController.createUsuarios)
router.post('/usuarios/login', usuariosController.authenticate)
router.post('/productos',userValidation.isAuthorized, userValidation.isAdmin, productosController.createProductos)
router.get('/productos',userValidation.isAuthorized, productosController.getProductos)

module.exports = router