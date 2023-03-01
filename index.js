
async function listar() {
    const db = require("./db");

    console.log("Index ativo");

    console.log('SELECT * FROM tarefas');
    const tarefas = await db.selecionarTarefas();

    console.log(tarefas[1].id);
    console.log("O tamanho é: " + tarefas.length)
}

listar()