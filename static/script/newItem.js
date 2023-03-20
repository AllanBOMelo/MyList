var hora = "15:00";
var quantidade = 0;

function newItemFunction(x) {
    
    var texto = "teste";
    var lista = document.getElementById('list').innerHTML;

    lista = lista + itemListPattern(texto);
    
    document.getElementById('list').innerHTML = lista;
    
    quantidade += 1;

}

var itemListPattern = function (texto) {

    return (

        '<li>' +
            '<div class="container">' +
                '<input type="checkbox" id="check" onclick="risca(' + quantidade + ')">' +
                '<label for="check" id="' + quantidade + '" style="text-decoration: none;">check</label>' +
            '</div>' +
        '</li>'
            
        );
}
  

