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

    // completed button add

    const taskCompleteBtn = document.createElement('button');
    taskCompleteBtn.classList.add('task-btn');
    taskCompleteBtn.classList.add('task-btn-complete');
    taskCompleteBtn.innerHTML = '<i class="far fa-check-square"></i>';
    taskDiv.appendChild(taskCompleteBtn);




    //console.log('click me')
}