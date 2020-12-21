const router = require('express').Router();
const pedidosController = require('../controllers/pedidos.controller');
const productosController = require('../controllers/productos.controller');
const usuariosController = require('../controllers/usuarios.controller');
const userValidation = require('../validations/users.validation');

//usuarios
router.post('/usuarios', userValidation.isAuthorized, userValidation.isAdmin, usuariosController.createUsuarios)
router.post('/usuarios/login', usuariosController.authenticate)

//productos
router.post('/productos',userValidation.isAuthorized, userValidation.isAdmin, productosController.createProductos)
router.get('/productos',userValidation.isAuthorized, productosController.getProductos)
router.get('/productos/:id', userValidation.isAuthorized, productosController.getProductoById)
router.put('/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, productosController.updateProduct)
router.delete('/productos/:id', userValidation.isAuthorized, userValidation.isAdmin, productosController.deleteProduct)

router.post('/pedidos', userValidation.isAuthorized, pedidosController.createPedidos)


/* PUSE ESTO ACA PARA IR REVISANDO UNO POR UNO, PARA VER SI ERA ERROR DE TIPEO
router.post('/pedidos', userValidation.isAuthorized, pedidosController.createPedidos)
router.get('/pedidos', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.getPedidos)
router.get('/pedidos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.getPedidoById)
router.put('/pedidos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.updatePedido)
router.delete('/pedidos/:id', userValidation.isAuthorized, userValidation.isAdmin, pedidosController.deletePedido)
*/

module.exports = router
