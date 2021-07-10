const createTaskButton = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const clearTodoListButton = document.getElementById('apaga-tudo');
const todoListChildren = todoList.children; // Constant for all todo list children // Used in clearCompletedFunction() and deleteSelectedFunction()
const clearCompletedButton = document.getElementById('remover-finalizados');
const deleteSelectedButton = document.getElementById('remover-selecionado');
const saveListButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

function createTaskFunction() {
  function createTask() {
    const taskItem = document.createElement('li');

    if (inputText.value === '') {
      return alert('Erro: Insira uma tarefa'); // Sends error if no input is entered
    }

    taskItem.innerText = inputText.value; // Adds input value into li element created

    todoList.appendChild(taskItem);

    inputText.value = ''; // Clears input value
  }

  createTaskButton.addEventListener('click', createTask);
}
createTaskFunction();

function changeListBackgroundColorFunction() {
  function changeListBackgroundColor(event) {
    const selectedListItem = document.querySelector('.selected');

    if (selectedListItem) {
      selectedListItem.classList.remove('selected'); // Clears the selected li item if there is another
    }

    event.target.classList.add('selected'); // Adds 'selected' class to target - the class itself changes the background color
  }

  todoList.addEventListener('click', changeListBackgroundColor);
}
changeListBackgroundColorFunction();

function completedTaskFunction() {
  function completedTask(event) {
    event.target.classList.toggle('completed'); // .toggle to select as active or not
  }

  todoList.addEventListener('dblclick', completedTask);
}
completedTaskFunction();

function clearTodoListFunction() {
  function clearTodoList() {
    todoList.innerHTML = ''; // Erases all content into todo list
  }

  clearTodoListButton.addEventListener('click', clearTodoList);
}
clearTodoListFunction();

function clearCompletedFunction() {
  function clearCompleted() {
    for (let index = todoListChildren.length - 1; index >= 0; index -= 1) { // Running backwards - avoiding clutter
      if (todoListChildren[index].classList.value.includes('completed')) {
        todoList.removeChild(todoListChildren[index]);
      }
    }
  }

  clearCompletedButton.addEventListener('click', clearCompleted);
}
clearCompletedFunction();

function deleteSelectedFunction() { // Same as previous
  function deleteSelected() {
    for (let index = 0; index < todoListChildren.length; index += 1) {
      if (todoListChildren[index].classList.value.includes('selected')) {
        todoList.removeChild(todoListChildren[index]);
        break;
      }
    }
  }

  deleteSelectedButton.addEventListener('click', deleteSelected);
}
deleteSelectedFunction();

function saveListFunction() {
  function saveList() {
    localStorage.setItem('todoList', todoList.innerHTML); // Saves list content into a localStorage key
    alert('Lista salva!');
  }

  saveListButton.addEventListener('click', saveList);
}
saveListFunction();

function loadListFunction() {
  function loadList(localStorageList) {
    if (localStorageList) {
      todoList.innerHTML = localStorageList; // Loads every time the page opens if there is a list saved
    }
  }
  loadList(localStorage.getItem('todoList'));
}
loadListFunction();

// Reference for functinos below: <https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript>

function moveItemUpFunction() {
  function moveItemUp() {
    const selected = document.querySelector('.selected');

    if (selected && selected.previousElementSibling) {
      selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    }
  }

  moveUpButton.addEventListener('click', moveItemUp);
}
moveItemUpFunction();

function moveItemDownFunction() {
  function moveItemDown() {
    const selected = document.querySelector('.selected');

    if (selected && selected.nextElementSibling) {
      selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    }
  }

  moveDownButton.addEventListener('click', moveItemDown);
}
moveItemDownFunction();
