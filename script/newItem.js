var quantidade = 0

function novoitem() {

    quantidade = quantidade + 1

    var texto = "teste"
    var lista = document.getElementById('lista').innerHTML


    lista = lista + "<li>" + quantidade + " : " + texto + "</li>"
    
    document.getElementById('lista').innerHTML = lista
}