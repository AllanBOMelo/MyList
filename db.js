async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:1234@localhost/mylist");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selecionarTarefas() {
    const connexao = await connect()
    const [tarefas] = await connexao.query('SELECT * FROM tarefas;')
    
    return tarefas
}

module.exports = {selecionarTarefas}