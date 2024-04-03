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
