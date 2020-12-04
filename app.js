const expressLib = require('express');
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api.router')
const myApp = expressLib()
const config = require('./config');
const db = require('./models/index');
//const swaggerUI = require('swagger-ui-express') //completar

myApp.use(bodyParser.json())

myApp.use((req, res, next) =>{
    console.log('Ruta accedida:' + req.path)
    next()
});

myApp.use('/api', apiRouter)

db.init().then(async () =>{
    await db.sequelize.sync({ force: false}).then(() =>{
        console.log('Sincronizacion correcta con DROP')
    })
    myApp.listen(config.port, () =>{
        console.log(`myApp is running at http://localhost:${config.port}`)
    });
})
    .catch((err) => {
        console.log('No se pude conectar con la DB debido a : ' + err)
    })