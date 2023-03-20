var quantidade = 0;


function newItemFunction(x) {

    var texto = prompt("Insira a tarefa");

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
                '<input type="checkbox" id="check'+ quantidade +'" name="check" onclick="cross(' + quantidade + ')">' +
                '<label for="check'+ quantidade +'" id="' + quantidade + '" style="text-decoration: none;">' + texto + '</label>' +
            '</div>' 
            
        );
}
  

