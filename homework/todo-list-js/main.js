const apiUrl = 'http://localhost:3000/api';

window.addEventListener('DOMContentLoaded', (event) => {
  renderTodos();
});

function handleAddItem(e) {
  e.stopPropagation();
  const todo = document.getElementById('todo');
  if (todo.value) {
    postTodo({ name: todo.value, completed: false });
    todo.value = '';
  }
}

function handleClickTodo(e, id) {
  e.stopPropagation();

  const listItem = document.querySelector(`li[id="${id}"]`);
  const item = listItem.querySelector('input');
  const name = item.nextSibling.nodeValue;
  const completed = item.checked == 1;

  const todo = {
    id,
    name,
    completed: completed,
  };
  putTodo(todo);
}

function handleUncheckAll(e) {
  e.stopPropagation();
  checkAll(false);
}

function handleCheckAll(e) {
  e.stopPropagation();
  checkAll(true);
}

function handleDeleteChecked(e) {
  e.stopPropagation();
  deleteChecked();
}

function checkAll(checked) {
  let inputs = document.querySelectorAll('input[type=checkbox]');
  inputs.forEach((item) => {
    item.checked = checked;
    if (item.checked) {
      item.parentNode.classList.add('complete');
    } else {
      item.parentNode.classList.remove('complete');
    }
  });
}

function deleteChecked() {
  let inputs = document.querySelectorAll('.complete');
  inputs.forEach((input) => {
    input.parentElement.removeChild(input);
  });
}

async function getTodos() {
  const response = await fetch(`${apiUrl}/todos`);
  const todos = await response.json();
  return todos;
}

async function renderTodos() {
  const todos = await getTodos();

  const list = document.getElementById('todos');
  list.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    renderTodo(list, todos[i]);
  }
}

function renderTodo(list, todo) {
  const newItem = document.createElement('li');
  newItem.id = todo.id;
  if (todo.completed) {
    newItem.className = 'complete';
  }

  newItem.innerHTML = `<input type="checkbox" onclick="handleClickTodo(event, ${todo.id})" ${
    todo.completed ? 'checked' : ''
  }/>${todo.name} <button class="small" <button class="small" onclick=deleteTodo(${todo.id})>DEL</button>`;
  list.appendChild(newItem);
}

async function deleteTodo(id) {
  const response = await fetch(`${apiUrl}/todos/${id}`, { method: 'DELETE' });
  renderTodos();
}

async function postTodo(todo) {
  const response = await fetch(`${apiUrl}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  renderTodos();
}

async function putTodo(todo) {
  const response = await fetch(`${apiUrl}/todos/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  renderTodos();
}
