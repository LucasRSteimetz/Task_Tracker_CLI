const fs = require("fs");
const { Task } = require("./class_task_tracker");

function JSDate() {
  const time = new Date();
  const year = time.getFullYear() + 1;
  const month = time.getMonth();
  const day = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let date = `${month}/${day}/${year}`;
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  let finalDate = `${date}, ${temp}`
  return finalDate;
}

function define_new_id(tasks_array){
    let new_id = 0
    if(tasks_array==null){
        return 0;
    }
    tasks_array.forEach(task => {
        if(task.id > new_id){
            new_id = task.id;
        }
    })
    new_id++;
    if(new_id>99){
        new_id = 0;
    }
    return new_id;
}

function print_tasks(tasks_list, arg){
    let flagPrint = 0;
    console.log(`Listing ${arg} tasks:\n`)
    tasks_list.forEach(task=>{
                    if(task.status==`${arg}`){
                        console.log(`Task: ${task.taskDescription}, status: ${task.status}, id: ${task.id}, created at: ${task.createdAt}, last update at: ${task.updatedAt}`)
                        flagPrint = 1;
                    }
                })
    if(!flagPrint){
        console.log(`There are no tasks with ${arg} status.`)
    }
}

function loadTasks(){
    if(!fs.existsSync("task_tracker.json")){
        return [];
    }
    else{
        const data = fs.readFileSync("task_tracker.json", "utf8")
        return JSON.parse(data)
    }
}

//Commands

function addTask(taskArray, description, date){
    if(taskArray.length>99){
        console.log("You've reached the max of tasks possible, delete one to add another one")
        return 0;
    }
    console.log("Adding new task...")

    let new_id = define_new_id(taskArray)

    const newTask = new Task(description,"todo", new_id, date, "This task was not yet uptated");

    taskArray.push(newTask)
    fs.writeFileSync('task_tracker.json', JSON.stringify(taskArray, null, 2));
    console.log(`New task added: ${description}; ID: ${new_id}`)
}

function updateTask(tasksArray, id, description, date){
    console.log("Updating task...")
    tasksArray.forEach(task=> {
        if(task.id==id){
            task.taskDescription = description;
            task.updatedAt = date;
        }
    })
    fs.writeFileSync('task_tracker.json', JSON.stringify(tasksArray, null, 2));
    console.log(`Task ${id} uptaded: ${description}`)
}

function deleteTask(tasksArray, id){
    let flagDel = 0;
    console.log("Deleting task...")
    tasksArray.forEach(task=>{
        if(task.id==id){
            flagDel=1;
        }
    })
    if(flagDel){
        tasksArray = tasksArray.filter(task => task.id != id);
        fs.writeFileSync('task_tracker.json', JSON.stringify(tasksArray, null, 2));
        console.log(`Task ${id} deleted.`);
    }
    else{
        console.log(`Task ${id} was not found.`)
    }
}

function listTasks(tasksArray, status){
    if(status==null){
        tasksArray.forEach(task=>console.log(`Task: ${task.taskDescription}, status: ${task.status}, id: ${task.id}, created at: ${task.createdAt}, last update at: ${task.updatedAt}`));
    }
    else{
        print_tasks(tasksArray,status);
    }
}

function markTask(tasksArray, id, status){
    let flagMark = 0;
    console.log("Marking task...")
    tasksArray.forEach(task=> {
        if(task.id==id && (status=="in-progress"|| status=="todo"|| status=="done")){
            task.status = status;
            flagMark = 1;
        }
        
    })
    if(flagMark){
        fs.writeFileSync('task_tracker.json', JSON.stringify(tasksArray, null, 2));
        console.log(`Task ${id} status changed: ${status}`);
    }
    else{
        console.log("The task was not found or the status was incorrect")
    }
}

module.exports = { JSDate, loadTasks, addTask, updateTask, deleteTask, listTasks, markTask }