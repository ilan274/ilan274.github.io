// Grab objects
const buttons = document.querySelectorAll('button');
const grabInput = document.getElementById('texto-tarefa');
const grabList = document.getElementById('lista-tarefas');
let pegarLi = document.querySelectorAll('li');

// Verify if user have saved list
if (localStorage.getItem('todo-list')) {
  grabList.innerHTML = localStorage.getItem('todo-list');
}

// Functions
function updateLi() {
  pegarLi = document.querySelectorAll('li');
  return pegarLi;
}

function addTodo() {
  const createLi = document.createElement('li');
  createLi.innerText = grabInput.value;
  grabList.appendChild(createLi);
  grabInput.value = '';
  createLi.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
  createLi.addEventListener('click', function(event) {
    let previousSelected = document.getElementsByClassName('selected')[0];
    if (previousSelected != null) {
      previousSelected.classList.remove("selected");
    }
      event.target.classList.add('selected');
  });
  updateLi();
}

// Delete everything
function deleteAll() {
  for (let i = document.querySelectorAll('li').length; i >= 1; i--) {
    document.querySelector('li').remove();
  }
}

// Remove completed items
function removeComp() {
  for (let i = document.querySelectorAll('li').length - 1; i >= 0; i--) {
    if (document.querySelectorAll('li')[i].classList.contains('completed')) {
      document.querySelectorAll('li')[i].remove();
    }
  }
  updateLi();
}

// Function save to Do List
function saveTodo() {
  let pegarInner = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('todo-list', pegarInner);
}

// Remove selected function
function removeSelected() {
  for (let i = 0; i < pegarLi.length; i += 1) {
    if (pegarLi[i].classList.contains('selected')) {
      pegarLi[i].remove();
    }
  }
  updateLi();
}
// Move selected item up
function moveUp() {
  let mover = document.querySelector('.selected');
  if (mover) {
    if (mover.previousElementSibling) {
      mover.parentNode.insertBefore(mover, mover.previousElementSibling);
    }
  }
}

// Move selected item down
function moveDown() {
  let mover = document.querySelector('.selected');
  if (mover) {
    if (mover.nextElementSibling) {
      mover.parentNode.insertBefore(mover.nextElementSibling, mover);
    }
  }
}

// Event listener
buttons[0].addEventListener('click', addTodo);
buttons[1].addEventListener('click', moveUp);
buttons[2].addEventListener('click', moveDown);
buttons[3].addEventListener('click', removeSelected);
buttons[4].addEventListener('click', removeComp);
buttons[5].addEventListener('click', saveTodo);
buttons[6].addEventListener('click', deleteAll);
