
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
    document.getElementById("time-input-task").value = "";
});



const botaoSend = document.querySelector("#Send");

botaoSend.addEventListener('click', function(e) {

    e.preventDefault();

    const hourInput = document.getElementById('time-input-task');
    const textInput = document.querySelector("#textForm");

    var hour = hourInput.value;
    var text = textInput.value;

    newItemFunction(text, hour);

    document.getElementById('modal-window').classList.remove('open');
    document.querySelector("#textForm").value = "";
    document.getElementById("time-input-task").value = "";

    sortByTime()

});


// Modal input task buttons ends here


// Edit task Modal Window
var lastFullHour = '00:00'
var lastLabelId = "0"

const openEditTaskModalWindow = (x) => {

    // Vars
    var editTaskModalWindow = document.getElementById('modal-window-edit-task');
    var text = document.getElementById(x).innerHTML;
    var inputId = document.getElementById('inputEditTask');
    var hourId = document.getElementById('editHourId');

    // Open Modal window
    editTaskModalWindow.classList.add('open');
    outClickCheck();


    // Text Load
    var inputText = text.split(" | ")

    hourId.value = inputText[0]
    inputId.value = inputText[1]
    charactersCounterEditTask();

    lastFullHour = hourId.value
    lastLabelId = x;
}

// Form Buttons
var sendButton = document.getElementById('sendButtonEditTask')
sendButton.addEventListener('click', function (e) {

    e.preventDefault();

    var editTaskModalWindow = document.getElementById('modal-window-edit-task');
    const labelId = document.getElementById(lastLabelId)
    const inputId = document.getElementById('inputEditTask');
    const hourId = document.getElementById('editHourId');

    var arrayHour = hourId.value.split(":");
    var lastArrayHour = lastFullHour.split(":")
    var lastHour = lastArrayHour[0]
    var hour = arrayHour[0]

    if (lastHour === hour ) {
    
        var text = hourId.value + " | " + inputId.value
        labelId.innerHTML = text

    } else {
        const liRemove = "li" + lastLabelId

        newItemFunction(inputId.value, hourId.value)
        document.getElementById(liRemove).remove()


    }

    var taskLabelTarget = document.getElementById("TaskLabel" + lastHour)
    if (taskLabelTarget.childNodes.length == 0) {
        taskLabelTarget.remove()
    }

    editTaskModalWindow.classList.remove('open');
    sortByTime()

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






