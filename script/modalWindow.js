
// Open modal window
const openModalWindow = () => {
    document.getElementById('modal-window').classList.add('open');

    var string = document.getElementById('textForm').value;

    var character = string.length

    document.getElementById('character-counter').value = character + '/50'
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


// Modal input task buttons ends here

// task value

var taskValue = 0

const setvalue = (x) =>{
    taskValue = x
}


// Edit task Modal Window

const openEditTaskModalWindow = (x) => {

    // Vars
    var editTaskModalWindow = document.getElementById('modal-window-edit-task');
    var text = document.getElementById(x).innerHTML;
    var inputId = document.getElementById('inputEditTask');

    // Open Modal window
    editTaskModalWindow.classList.add('open');
    outClickCheck();


    // Text Load
    inputId.value = text;
    charactersCounterEditTask();

}

// Form Buttons
var sendButton = document.getElementById('sendButtonEditTask')
sendButton.addEventListener('click', function (e) {

    e.preventDefault();

    var editTaskModalWindow = document.getElementById('modal-window-edit-task');
    const labelId = document.getElementById(taskValue)
    const inputId = document.getElementById('inputEditTask');

    labelId.innerHTML = inputId.value

    editTaskModalWindow.classList.remove('open');

})

var cancelButton = document.getElementById('cancelButtonEditTask')
cancelButton.addEventListener('click', function (e) {

    e.preventDefault();

    document.getElementById('modal-window-edit-task').classList.remove('open');

})

// Edit task outclick check

const outClickCheck = () => {
    document.addEventListener("mouseup", function(event) {
        
        var editTask = document.getElementById('modal-edit-task');

        if (!editTask.contains(event.target)) {
            document.getElementById('modal-window-edit-task').classList.remove('open');
        }
    });
}






