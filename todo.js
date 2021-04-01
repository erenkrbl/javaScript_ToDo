const newTask = document.querySelector('.task-input');
const newTaskAddBtn = document.querySelector('.btn-task-add');
const taskList = document.querySelector('.task-list');

newTaskAddBtn.addEventListener('click', taskAdd);
taskList.addEventListener('click', taskDeleteComplete);

function taskDeleteComplete(e) {
    const clickElement = e.target;
    
    if (clickElement.classList.contains('task-btn-complete')) {
        
        clickElement.parentElement.classList.toggle('task-complete');
    } 
    if (clickElement.classList.contains('task-btn-delete')) {
        clickElement.parentElement.classList.toggle('getlost');

        clickElement.parentElement.addEventListener('transitionend', function() {
            clickElement.parentElement.remove();
        });
    }
}

function taskAdd(e) {
    e.preventDefault();
    // div created
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');

    // li created

    const taskLi = document.createElement('li');
    taskLi.classList.add('task-define');
    taskLi.innerText = newTask.value;
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
     
    // localStorage Submit
    localStorageSubmit(newTask.value);
    newTask.value = '';
   
    //adding the created div to ul

    taskList.appendChild(taskDiv);
}

function localStorageSubmit (newTask) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}