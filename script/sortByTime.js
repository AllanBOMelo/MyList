
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

