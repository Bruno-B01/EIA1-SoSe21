var taskCounter = 0;
var userinput = document.querySelector("#addTask");
userinput.addEventListener("keypress", function (keyboardEvent) {
if (keyboardEvent.key == "Enter") {
    var inputTask = new Text(userinput.value);
    taskCounter = taskCounter + 1;
    document.querySelector("h3").innerHTML = taskCounter + " in total";
    var newTask = document.createElement("div");
    newTask.className = "task1";
    document.querySelector(".additionalTasks").appendChild(newTask);
    var taskOpen = document.createElement("i");
    taskOpen.classList.add("far", "fa-circle");
    var taskDone = document.createElement("i");
    taskDone.classList.add("far", "fa-check-circle", "isHidden");
    var deleted = document.createElement("i");
    deleted.classList.add("far", "fa-trash-alt");
    newTask.appendChild(inputTask);
    newTask.appendChild(taskOpen);
    newTask.appendChild(taskDone);
    newTask.appendChild(deleted);
    function changeClasses(firstHTMLElement, secondHTMLElement){
        firstHTMLElement.classList.add("isHidden");
        secondHTMLElement.classList.remove("isHidden");
    }
    taskOpen.addEventListener("click", function () {
        changeClasses(taskOpen, taskDone);
    });
    taskDone.addEventListener("click", function () {
        changeClasses(taskDone, taskOpen);
    });
    deleted.addEventListener("click", function () {
        newTask.classList.add("isHidden");
        taskCounter--;
        document.querySelector("h3").innerHTML = taskCounter + " in total";
    });
  }
});
//# sourceMappingURL=Aufgabe09.js.map