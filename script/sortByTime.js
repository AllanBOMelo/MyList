
const sortByTime = () => {

    // Select Div
    const hourList = document.getElementById("hourList");

    //Select all items started by "taskLabel" and turn into an array
    const tasks = hourList.querySelectorAll("[id^='TaskLabel']");
    const tasksArray = Array.from(tasks);

    // Sort array
      tasksArray.sort((x, y) => {

        const id1 = parseInt(x.id.slice(9));
        const id2 = parseInt(y.id.slice(9));

        return id1 - id2;

      });

      // Introduce to list
      tasksArray.forEach(tasksArray => hourList.appendChild(tasksArray));

}

const sortTasks= (hour) => {

    const taskLabel = document.getElementById("TaskLabel" + hour)

    const tasks =  taskLabel.querySelectorAll("li");
    const tasksArray = Array.from(tasks);

    // Sort array
    tasksArray.sort((x, y) => {

      const id1 = parseInt(x.getAttribute('name').slice(2));
      const id2 = parseInt(y.getAttribute('name').slice(2));

      return id1 - id2;

    });
      tasksArray.forEach(tasksArray => taskLabel.appendChild(tasksArray))
}