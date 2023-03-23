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
                '<label for="check'+ quantidade +'" id="' + quantidade + '" style="text-decoration: none;">' + text + '</label>' +
                '<img src="./img/edit.png" alt="" onclick="openEditTaskModalWindow(' + quantidade + ')"></img>' +
                '<div class="edit-task-modal-window" id="edit-task-modal-window-' + quantidade + '">' +
                                '<div class="edit-task" id="edit-task-' + quantidade + '">' +
                                    '<input type="text" id="input-edit-task-' + quantidade + '" maxlength="50" oninput="charactersCounterEditTask(' + quantidade + ')">' +
                                    '<button type="submit" onclick="editTask(' + quantidade + ')">Save</button>' +
                                    '<textarea class="character-counter-edit-task" id="character-counter-edit-task-' + quantidade + '" cols="30" rows="10" disabled>0/50</textarea>' +
                                '</div>' +
                            '</div>' +
            '</div>' 
            
        );
}



