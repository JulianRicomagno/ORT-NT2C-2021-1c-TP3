const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const list = document.getElementById('todo-list')

let tareasTotales = 0
let tareasNoRealizadas = 0

//Ingresamos un mensaje a mostrar
function addTodo() {
  const task = prompt("Ingrese una tarea");
  if (task === null) {
    return;
  }  

  //Create element div
  const div = document.createElement("div");

  //Create element li and set className
  const li = document.createElement("li");
  li.className = classNames.TODO_ITEM;

  //Create Checkbox and ser properties
  const check = document.createElement('input');
  check.type = "checkbox";
  check.className = classNames.TODO_CHECKBOX;
  check.onchange = listenerTareas;
  
  //Join task/check/li and div
	li.append(task);
  li.append(check);
  div.append(li);
  list.append(div);

  contadorItems();
   
}

function contadorItems(){
  tareasTotales++;
  tareasNoRealizadas++;
  itemCountSpan.innerHTML = tareasTotales;
  uncheckedCountSpan.innerHTML = tareasNoRealizadas;
}

function listenerTareas(evento){
  if(evento.target.checked){
    tareasNoRealizadas--
  }else{
    tareasNoRealizadas++
  }
  uncheckedCountSpan.innerHTML = tareasNoRealizadas;
}