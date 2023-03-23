
// Open modal window
const openModalWindow = () => {
    document.getElementById('modal-window').classList.add('open');

    var string = document.getElementById('textForm').value;

    var character = string.length

    document.getElementById('character-counter').value = character + '/50'
}

const openEditTaskModalWindow = (x) => {
    var editTaskModalWindow = 'edit-task-modal-window-' + x
    var characterCounterEditTask = 'character-counter-edit-task-' + x
    var inputEditTask = '#input-edit-task-' + x

    outClickCheck(x);

    document.getElementById(editTaskModalWindow).classList.add('openEditTask');

    var taskID = x.toString();
    var texto = document.getElementById(taskID).innerHTML

    document.querySelector(inputEditTask).value = texto;

    var character = texto.length

    document.getElementById(characterCounterEditTask).value = character + '/50'
}



const editTask = (x) => {
    var taskID = x.toString()
    var inputID = '#input-edit-task-' + x

    var newTask = document.querySelector(inputID).value;

    document.getElementById(taskID).innerHTML = newTask;

    var editTaskId = 'edit-task-modal-window-' + x
    document.getElementById(editTaskId).classList.remove('openEditTask');
}



const outClickCheck = (x) => {
    document.addEventListener("mouseup", function(event) {

        var editTaskId = 'edit-task-modal-window-' + x
        
        var editTask = document.getElementById(editTaskId);

        if (!editTask.contains(event.target)) {
            document.getElementById(editTaskId).classList.remove('openEditTask');
        }
    });
}



// Close modal window when outside click
document.addEventListener("mouseup", function(event) {
    var modalWindow = document.getElementById("modal");

    if (!modalWindow.contains(event.target)) {
        document.getElementById('modal-window').classList.remove('open');
    }

});


// Modal input task buttons
const botaoCancel = document.querySelector("#Cancel");

botaoCancel.addEventListener('click', function(e) {
    e.preventDefault();

    document.getElementById('modal-window').classList.remove('open');

    document.querySelector("#textForm").value = "";
});



const botaoSend = document.querySelector("#Send");

botaoSend.addEventListener('click', function(e) {

    e.preventDefault();

    const textInput = document.querySelector("#textForm");

    var text = textInput.value;

    newItemFunction(text);

    document.getElementById('modal-window').classList.remove('open');

    document.querySelector("#textForm").value = "";
});