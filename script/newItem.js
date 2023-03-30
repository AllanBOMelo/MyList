var quantidade = 0;


function newItemFunction(text, fullhour) {     
    
    

    /* tags */
    var li = document.createElement('li');
    const ulId = "TaskLabel" + hour
    var hourArray = fullhour.split(':')
    var hour = hourArray[0]
    var minutes = hourArray[1]
    

    /* Atributes */
    var idLi = document.createAttribute('id');
    idLi.value = "li"+quantidade;
    li.attributes.setNamedItem(idLi)
    var nameLi = document.createAttribute('name')
    nameLi.value = "li" + minutes
    li.attributes.setNamedItem(nameLi)

    /* content */

    if (fullhour == "") {

        var contentText = text

        document.getElementById('list').appendChild(li)
        document.getElementById('li'+quantidade).innerHTML = itemListPattern(contentText);

    } else {

        
        var contentText = fullhour + " | " + text;
        var taskLabelTarget = document.getElementById("TaskLabel" + hour)
        

        if (document.getElementById("TaskLabel" + hour )) {
            
            document.getElementById("TaskLabel" + hour ).appendChild(li);
            document.getElementById('li'+quantidade).innerHTML = itemListPattern(contentText);
            
            if (taskLabelTarget.childNodes.length > 2) {
                sortTasks(hour)
            }

        } else {

            

            /* Elements */
            const listDiv = document.getElementById('hourList');
            const ulList = document.createElement('ul')
            const ulId = document.createAttribute('id')
            ulId.value = "TaskLabel" + hour        

            ulList.attributes.setNamedItem(ulId)

            listDiv.appendChild(ulList)
            spanAdd(hour)

            document.getElementById("TaskLabel" + hour ).appendChild(li);

            document.getElementById('li'+quantidade).innerHTML = itemListPattern(contentText);

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

const spanAdd = (hour) => {
    const li = document.createElement('li');
    const ulId = document.getElementById("TaskLabel" + hour);
    const span = document.createElement('span');
    const spanClass = document.createAttribute('class');

    spanClass.value = "hourTask"
    span.attributes.setNamedItem(spanClass)


    ulId.appendChild(li)
    li.appendChild(span)
    
    span.innerHTML = "Atividades para as " +  hour + "h"
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