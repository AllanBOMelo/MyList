/* Banco */

const Sequelize = require('sequelize');
const sequelize  = new Sequelize('mylist', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log("Conectato ao banco de dados");
}).catch(function(erro) {
    console.log("Erro ao conectar ao banco de dados: " + erro);
});



