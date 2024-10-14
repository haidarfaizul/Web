// Kalkulator Functions
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let displayValue = document.getElementById("display").value;

  // Handle power operator (^)
  displayValue = displayValue.replace(/\^/g, "**");

  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

// To-Do List Functions
function addTodo() {
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a task.");
    return;
  }

  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");

  const textNode = document.createTextNode(todoText);
  li.appendChild(textNode);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => editTodoItem(li, input);
  li.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => deleteTodoItem(li);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
  input.value = "";
}

function editTodoItem(li, input) {
  const newText = prompt("Edit your task:", li.firstChild.nodeValue);
  if (newText !== null && newText.trim() !== "") {
    li.firstChild.nodeValue = newText.trim();
  }
}

function deleteTodoItem(li) {
  li.parentNode.removeChild(li);
}
