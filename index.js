const express = require("express");
const app = express();

app.use(express.static(__dirname + '/static'))

app.get("/", function(req, res){
    res.send("Seja bem-vindo")
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
}); // Fim do codigo