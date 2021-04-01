const newTask = document.querySelector('.task-input');
const newTaskAddBtn = document.querySelector('.btn-task-add');
const taskList = document.querySelector('.task-list');

newTaskAddBtn.addEventListener('click', taskAdd);
taskList.addEventListener('click', taskDeleteComplete);
document.addEventListener('DOMContentLoaded', localStorageRead);

function taskDeleteComplete(e) {
    const clickElement = e.target;
    
    if (clickElement.classList.contains('task-btn-complete')) {
        
        clickElement.parentElement.classList.toggle('task-complete');
    } 
    if (clickElement.classList.contains('task-btn-delete')) {
        clickElement.parentElement.classList.toggle('getlost');
        const deleteTask = clickElement.parentElement.children[0].innerText;
        localStorageDelete(deleteTask);

        clickElement.parentElement.addEventListener('transitionend', function() {
            clickElement.parentElement.remove();
        });
    }
}

function taskAdd(e) {
    e.preventDefault();

    taskItemCreate(newTask.value);
    // localStorage Submit
    localStorageSubmit(newTask.value);
    newTask.value = '';
    
}

function convertlocalStorageArray () {
    let tasks;
    if (localStorage.getItem('tasks')=== null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

function localStorageSubmit (newTask) {
    let tasks = convertlocalStorageArray();
   
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}



// localStorage read
function localStorageRead() {
    let tasks = convertlocalStorageArray();
   
    tasks.forEach(function (task){
        taskItemCreate(task);
    }); 
}

function taskItemCreate (task) {
    
    // div created
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');

    // li created

    const taskLi = document.createElement('li');
    taskLi.classList.add('task-define');
    taskLi.innerText = task;
    taskDiv.appendChild(taskLi);

    // completed button add

    const taskCompleteBtn = document.createElement('button');
    taskCompleteBtn.classList.add('task-btn');
    taskCompleteBtn.classList.add('task-btn-complete');
    taskCompleteBtn.innerHTML = '<i class="far fa-check-square"></i>';
    taskDiv.appendChild(taskCompleteBtn);

    // Deleted button add

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-btn');
    taskDeleteBtn.classList.add('task-btn-delete');
    taskDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    taskDiv.appendChild(taskDeleteBtn);
     
   
    //adding the created div to ul

    taskList.appendChild(taskDiv);

}

function localStorageDelete (task) {
    let tasks = convertlocalStorageArray();
    

    // item delete with splice

    const deleteElementIndex = tasks.indexOf(task);
    tasks.splice(deleteElementIndex, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));   
}