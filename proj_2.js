 let toDo=["Eating","Study","Sleep"];
let req=prompt("Enter your choice");
while(true){
    if (req==4){
        console.log("Quitting app");
        break
    }
    if(req==1){
        for(task of toDo){
            console.log(task);
        }
    }
    else if(req==2){
        let taskA=prompt("Enter the task to add");
        toDo.push(taskA);
        console.log("Task added");
    }
    else if(req==3){
        let taskD=prompt("Enter the ")
    }
    else if(req==5){
        let idx=prompt("Enter the index of the task to remove");
        toDo.splice(idx,1);
        console.log("Task completed");
    }
    req=prompt("Enter your choice");


}
