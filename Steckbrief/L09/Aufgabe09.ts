let taskCounter: number = 0;
let userinput: HTMLInputElement = document.querySelector("#addTask") as HTMLInputElement;

userinput.addEventListener("keydown", function (e): void {

if (e.key == "Enter") {

    let inputTask: Text = new Text(userinput.value);
    taskCounter = taskCounter + 1;
    document.querySelector("h3").innerHTML = taskCounter + " in total";
  
    let newTask: HTMLDivElement = document.createElement("div");
    newTask.className = "task01";
    document.querySelector(".additionalTasks").appendChild(newTask);

    const taskOpen: HTMLElement = document.createElement("i");
    taskOpen.classList.add("far", "fa-circle");

    const taskDone: HTMLElement = document.createElement("i");
    taskDone.classList.add("far", "fa-check-circle", "isHidden");

    const deleted: HTMLElement = document.createElement("i");
    deleted.classList.add("far", "fa-trash-alt");

    newTask.appendChild(inputTask);
    newTask.appendChild(taskOpen);
    newTask.appendChild(taskDone);
    newTask.appendChild(deleted);
  
    function changeClasses(firstHTMLElement: HTMLElement, secondHTMLElement: HTMLElement): void {
        firstHTMLElement.classList.add("isHidden");
        secondHTMLElement.classList.remove("isHidden");
    }

    taskOpen.addEventListener("click", function (): void {
        changeClasses(taskOpen, taskDone);
    });

    taskDone.addEventListener("click", function (): void {
        changeClasses(taskDone, taskOpen);
    });

    deleted.addEventListener("click", function (): void {
        newTask.classList.add("isHidden");
        taskCounter--;
        document.querySelector("h3").innerHTML = taskCounter + " in total";
    });
  }
});