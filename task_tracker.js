const { JSDate, addTask, loadTasks, updateTask, deleteTask, listTasks, markTask } = require("./functions_task_tracker");

function main(){
    const tasks = loadTasks();
    const datetime = JSDate();
    const command = process.argv[2];
    const firstArg = process.argv[3];
    const secondArg = process.argv[4];


    console.log("Welcome to Task Tracker 8000\n");
    console.log("You may add, update, delete or list new tasks.");
    console.log("You may also change a tasks' status between todo, in-progress or done\n");

    switch (command) {
        case "add":
            addTask(tasks, firstArg, datetime);
            break;

        case "update":
            updateTask(tasks, firstArg, secondArg, datetime);
            break;

        case "delete":
            deleteTask(tasks, firstArg);
            break;

        case "list":
            listTasks(tasks, firstArg);
            break;        
        case "mark":
            markTask(tasks, firstArg, secondArg);
            break;
        default: {
            console.log("Unkown command")
        }
    }
}

main();