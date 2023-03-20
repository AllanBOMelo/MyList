var hora = "15:00";
var quantidade = 0;


function newItemFunction(x) {

    var texto = 'Iniciar documentação do cliente'

    /* tags */
    var li = document.createElement('li');

    /* Atributes */
    var idLi = document.createAttribute('id');
    idLi.value = "li"+quantidade;

    li.attributes.setNamedItem(idLi)

    document.getElementById('list').appendChild(li)

    document.getElementById('li'+quantidade).innerHTML = itemListPattern(texto);

    quantidade += 1
    
}

var itemListPattern = function (texto) {

    return (

        
            '<div class="container">' +
                '<input type="checkbox" id="check" name="check" onclick="risca(' + quantidade + ')">' +
                '<label for="check" id="' + quantidade + '" style="text-decoration: none;">' + texto + '</label>' +
            '</div>' 
            
        );
}
  

