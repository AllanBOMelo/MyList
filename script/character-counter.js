
const charactersCounter = () => {
    var string = document.getElementById('textForm').value;

    var character = string.length

    document.getElementById('character-counter').value = character + '/50'
    

}

const charactersCounterEditTask = () => {
    var string = document.getElementById('inputEditTask').value;

    var character = string.length

    document.getElementById('character-counter-edit-task').value = character + '/50'
    
}
