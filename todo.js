const newTask = document.querySelector('.task-input');
const newTaskAddBtn = document.querySelector('.btn-task-add');
const taskList = document.querySelector('.task-list');

newTaskAddBtn.addEventListener('click', taskAdd);

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

    //adding the created div to ul

    taskList.appendChild(taskDiv);

    //console.log('click me')
}