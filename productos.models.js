module.exports = (sequelize, dataTypes) =>{
    return sequelize.define('productos', {
        id: {
            type:dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })
}