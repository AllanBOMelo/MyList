const express = require("express");
const app = express();
const User = require('./script/user')

app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname + '/script'))


app.get("/", function(req, res){
    res.send("Seja bem-vindo")
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
})

app.listen(3000, () => {
    console.log("Servidor rodando em  http://localhost:3000/home")
}); // Fim do codigo



/* Set in dataBase 
const setToDataBase = (taskText) => {

    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    var dateString = dia.toString() + mes + ano;

    const newTask = {
        task: text,
        date: dateString
    };

    User.create(newTask).then(user_tasks => {
        console.log(user_tasks.toJSON());
    });

}

module.exports = setToDataBase;

sequelize.sync();

*/