
const charactersCounter = () => {
    var string = document.getElementById('textForm').value;

    var character = string.length

    document.getElementById('character-counter').value = character + '/50'

}

const charactersCounterEditTask = (x) => {
    var inputEditTaskId = 'input-edit-task-' + x
    var characterCounteEditTask = 'character-counter-edit-task-' + x

    var string = document.getElementById(inputEditTaskId).value;

    var character = string.length

    document.getElementById(characterCounteEditTask).value = character + '/50'

}


