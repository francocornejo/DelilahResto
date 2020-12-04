const { pedidos } = require('../models/index');
const db = require('../models/index');
const pedidosModules = require('../models/pedidos.modules');
​
​
const pedidosController = {
    //Create action
    createPedidos: async (req, res) => {
        const pedidos = db.pedidos.build({
            estado: req.body.estado, 
            total: req.body.total, 
            formaDePago: req.body.formaDePago,
            direccion: req.body.direccion
        })
        if(!pedidos.validate()){
            res.status(400).json();
        }
        try{
            await pedidos.save()
            res.status(201).json();
        }
        catch(error){
            res.status(500).json({
                isSucces: false,
                error: error
            })
        }
    },
    //Get action
    getPedidos: async (req, res) => {
        let pedidos = await db.pedidos.findAll()
        if(pedidos.length > 0){
            res.json(pedidos)
        }
        else{
            res.status(204).json()
        }
        
    },
    //Get by id action
    getPedidoById: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where:{
                id: req.params.id
            }
        })
        if(pedido !== null){
            res.json(pedido)
        }
        else{
            res.status(404).json()
        }
    },
    //Update action
    updatePedido: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where:{
                id: req.params.id
            }
        })
        if(pedido == null){
            res.status(404).json()
            await pedido.update({
                estado: req.body.estado, 
                total: req.body.total, 
                formaDePago: req.body.formaDePago,
                direccion: req.body.direccion
            })
            res.status(204).json()
        }
    },
    //Delete action
    deletePedido: async (req, res) => {
        let pedido = await db.pedidos.findOne({
            where:{
                id: req.params.id
            }
        })
        if(pedido == null){
            res.status(404).json();
            await pedido.destroy()
        }
        
    }
}
​
const pedidos = []
​
module.exports = pedidosController