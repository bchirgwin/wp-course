function addNewTodo(list, todo) {
  const newItem = document.createElement('li');
  newItem.innerHTML = `<li> <input type="checkbox" onclick="handleClickTodo(event)"/>${todo}</li>`;
  list.appendChild(newItem);
}

window.addEventListener('DOMContentLoaded', (event) => {
  const list = document.getElementById('todos');
  addNewTodo(list, 'Take out trash');
  addNewTodo(list, 'Do homework');
  addNewTodo(list, 'Clean Dishes');
});

function handleAddItem(e) {
  e.stopPropagation();
  const todo = document.getElementById('todo');
  if (todo.value) {
    const list = document.getElementById('todos');
    addNewTodo(list, todo.value);
    todo.value = '';
  }
}

function handleClickTodo(e) {
  e.stopPropagation();
  const li = e.srcElement.parentElement;
  if (e.target.checked == 1 && li) {
    li.classList.add('complete');
  } else {
    li.classList.remove('complete');
  }
}

function handleUncheckAll(e) {
  e.stopPropagation();
  uncheckAll();
}

function uncheckAll() {
  let inputs = document.querySelectorAll('input[type=checkbox]');
  inputs.forEach((item) => {
    item.checked = 0;
    item.parentNode.classList.remove('complete');
  });
}
