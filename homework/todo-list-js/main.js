const apiUrl = 'http://localhost:3000/api';

http: function addNewTodo(list, todo) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `<li> <input type="checkbox" onclick="handleClickTodo(${todo.id}))"/>${todo}</li>`;
  list.appendChild(newItem);
}

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

function handleClickTodo(id) {
  const listItem = document.querySelector(`li[id="${id}"]`);
  const item = listItem.querySelector('input');
  const name = item.nextSibling.nodeValue;

  const completed = item.checked == 1;

  const todo = {
    id,
    name,
    completed: completed,
  };
  console.log(todo);
  putTodo(todo);
  // if (e.target.checked == 1 && li) {
  //   li.classList.add('complete');
  // } else {
  //   li.classList.remove('complete');
  // }
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
    // console.log(input.parentElement);
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
  console.log(todos);

  const list = document.getElementById('todos');
  list.innerHTML = '';
  console.log(todos, todos.length);
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
  newItem.innerHTML = `<input type="checkbox" onclick="handleClickTodo(${todo.id})"/>${todo.name} <button class="small" <button class="small" onclick=deleteTodo(${todo.id})>DEL</button>`;
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
  console.log(todo);
  const response = await fetch(`${apiUrl}/todos/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });

  renderTodos();
}
