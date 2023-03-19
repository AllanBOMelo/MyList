const Sequelize = require('sequelize');
const sequelize  = new Sequelize('mylist', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log("Conectato")
}).catch(function(erro) {
    console.log("Erro ao conectar: " + erro)
})