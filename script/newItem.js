var quantidade = 0;


function newItemFunction(text) {     
    
    quantidade += 1

    /* tags */
    var li = document.createElement('li');

    /* Atributes */
    var idLi = document.createAttribute('id');
    idLi.value = "li"+quantidade;

    li.attributes.setNamedItem(idLi)

    document.getElementById('list').appendChild(li)

    document.getElementById('li'+quantidade).innerHTML = itemListPattern(text);

    
    
    /* Add to MySql */


}


var itemListPattern = function (text) {

    return (

        
            '<div class="container">' +

                '<input type="checkbox" id="check'+ quantidade +'" name="check" onclick="cross(' + quantidade + ')">' +
                '<label for="check'+ quantidade +'" id="' + quantidade + '">' + text + '</label>' +
                '<img src="./img/edit.png" alt="" onclick="openEditTaskModalWindow(' + quantidade + '), setvalue(' + quantidade + ')"></img>' +

                
            '</div>' 
            
        );
}

