const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = document.createTextNode(taskInput.value);
  const li = document.createElement('li');
  li.classList.add('task-item');

  const taskTextSpan = document.createElement('span');
  taskTextSpan.classList.add('task-text');
  taskTextSpan.appendChild(taskText);
  li.appendChild(taskTextSpan);

  const deleteButton = document.createElement('button');
  const deleteText = document.createTextNode('Delete');
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener('click', deleteTask);
  li.appendChild(deleteButton);

  const editButton = document.createElement('button');
  const editText = document.createTextNode('Edit');
  editButton.appendChild(editText);
  editButton.addEventListener('click', editTask);
  li.appendChild(editButton);

  const completeButton = document.createElement('button');
  const completeText = document.createTextNode('Complete');
  completeButton.appendChild(completeText);
  completeButton.addEventListener('click', completeTask);
  li.appendChild(completeButton);

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(event) {
  const li = event.target.parentElement;
  taskList.removeChild(li);
}

function editTask(event) {
  const li = event.target.parentElement;
  const taskTextSpan = li.querySelector('.task-text');
  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskTextSpan.textContent;
  li.replaceChild(input, taskTextSpan);
  input.focus();

  function saveEdit(event) {
    const newTaskText = document.createElement('span');
    newTaskText.classList.add('task-text');
    newTaskText.textContent = input.value;
    li.replaceChild(newTaskText, input);
  }

  input.addEventListener('blur', saveEdit);
  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      saveEdit(event);
    }
  });
}
function completeTask(event) {
  const li = event.target.parentElement;
  li.classList.toggle('completed');
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
