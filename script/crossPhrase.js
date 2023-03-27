var cross = (idNumber) => {

    var id = idNumber.toString();
    var taskId = document.getElementById(id);

    if (taskId.classList.contains('taskDone')) {

        taskId.classList.remove('taskDone');

    } else {
        
        taskId.classList.add('taskDone');

    }
    
}