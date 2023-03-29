var quantidade = 0;


function newItemFunction(text, fullhour) {     
    
    

    /* tags */
    var li = document.createElement('li');

    /* Atributes */
    var idLi = document.createAttribute('id');
    idLi.value = "li"+quantidade;

    li.attributes.setNamedItem(idLi)

    /* content */

    if (fullhour == "") {

        var contentText = text

        document.getElementById('list').appendChild(li)
        document.getElementById('li'+quantidade).innerHTML = itemListPattern(contentText);

    } else {

        var hourArray = fullhour.split(':')
        var hour = hourArray[0]
        var contentText = fullhour + " | " + text;
        var taskLabelTarget = document.getElementById("TaskLabel" + hour)
        

        if (document.getElementById("TaskLabel" + hour )) {
            
            if (taskLabelTarget.childNodes.length > 0) {
                document.getElementById("TaskLabel" + hour ).appendChild(li);
                document.getElementById('li'+quantidade).innerHTML = itemListPattern(contentText);
            } else {
                document.getElementById("TaskLabel" + hour ).appendChild(li);
                document.getElementById('li'+quantidade).innerHTML = itemListPatternHour(contentText);
            }

            

        } else {

            /* Elements */
            const listDiv = document.getElementById('hourList');
            const ulList = document.createElement('ul')
            const ulId = document.createAttribute('id')
            ulId.value = "TaskLabel" + hour        

            ulList.attributes.setNamedItem(ulId)

            listDiv.appendChild(ulList)

            document.getElementById("TaskLabel" + hour ).appendChild(li);

            document.getElementById('li'+quantidade).innerHTML = itemListPatternHour(contentText, hour);

        }


    } 
    
    /* Add to MySql */
    quantidade += 1
}


var itemListPattern = function (content) {

    return (
        
            '<div class="container">' +

                '<input type="checkbox" id="check'+ quantidade +'" name="check" onclick="cross(' + quantidade + ')">' +
                '<label for="check'+ quantidade +'" id="' + quantidade + '">' + content + '</label>' +
                '<img src="./img/edit.png" alt="" onclick="openEditTaskModalWindow(' + quantidade + ')"></img>' +

            '</div>' 
            
        );
}


var itemListPatternHour = function (content, hour) {

    return (


            '<span class="hourTask"> Atividades para as ' + hour + ' horas</span>' +        
            '<div class="container">' +

                '<input type="checkbox" id="check'+ quantidade +'" name="check" onclick="cross(' + quantidade + ')">' +
                '<label for="check'+ quantidade +'" id="' + quantidade + '">' + content + '</label>' +
                '<img src="./img/edit.png" alt="" onclick="openEditTaskModalWindow(' + quantidade + ')"></img>' +

            '</div>' 
            
        );
}