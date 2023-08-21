"use strict";

// Elemente aus dem DOM auswählen
const todoInput = document.querySelector("#todo-input");
const btnAdd = document.querySelector("#add-todo");
const todosList = document.querySelector(".todos-list");
const radioFilter = document.querySelectorAll(".filter-radio");
const deleteButton = document.querySelector("#delete-todo");

// Zustand initialisieren oder aus dem Local Storage abrufen
const state = JSON.parse(localStorage.getItem("state")) || {
  todos: [
    { description: "HTML lernen", done: false },
    { description: "CSS lernen", done: true },
  ],
};

// Event Listener für den "Add" Button hinzufügen
btnAdd.addEventListener("click", addTodo);

// Funktion zum Hinzufügen eines neuen Todos
function addTodo(event) {
  event.preventDefault();

  // Überprüfen, ob das Todo bereits vorhanden ist
  if (
    state.todos.some(function (todo) {
      return todoInput.value.toLowerCase() === todo.description.toLowerCase();
    })
  ) {
    return;
  }

  // Ein neues Todo-Objekt erstellen
  const newTodo = {
    description: todoInput.value,
    done: false,
  };

  // Das neue Todo zur Liste hinzufügen
  state.todos.push(newTodo);
  persistState(state);
  todoInput.value = "";
  todoInput.focus();
  renderTodos();
}

// Die Liste mit allen Todos rendern
function renderTodos() {
  todosList.innerHTML = "";

  let filteredTodos = state.todos;

  if (document.querySelector("#radio-open").checked) {
    filteredTodos = filteredTodos.filter(todo => !todo.done); // Nur offene Todos anzeigen
  } else if (document.querySelector("#radio-done").checked) {
    filteredTodos = filteredTodos.filter(todo => todo.done); // Nur erledigte Todos anzeigen
  };

  for (const todo of filteredTodos) {
    const newTodoListItem = document.createElement("li"); // <li> Element erstellen
    const doneCheckbox = document.createElement("input"); // <input> Element erstellen
    doneCheckbox.type = "checkbox"; // <input type="checkbox">

    // EventListener auf Checkbox
    doneCheckbox.addEventListener("change", function (e) {
      todo.done = doneCheckbox.checked; // Zustand des Todos aktualisieren
      persistState(state);
    });

    doneCheckbox.id = `${todo.description} -> ID:${Date.now()}`; // <input type="checkbox" id="">

    doneCheckbox.checked = todo.done; // <input type="checkbox" id="">

    const todoLabel = document.createElement("label"); // <label> Element erstellen

    todoLabel.setAttribute("for", doneCheckbox.id); // <label for="">

    todoLabel.innerText = todo.description; // <label>Description</label>

    newTodoListItem.append(doneCheckbox, todoLabel); // <input type="checkbox"> und <label> an <li> anhängen

    todosList.append(newTodoListItem); // <li> an <ul> anhängen (als Child-Element)
  }
}


// Event Listener für die Radiobuttons
radioFilter.forEach((radio) => {
  radio.addEventListener("change", radioChange)
});

// Funktion "Zustand der Radiobuttons"
function radioChange(event) {
  const selectedRadio = event.target.id;

  if (selectedRadio === "radio-all") {
    renderTodos();
  }
  else if (selectedRadio === "radio-open") {
    renderTodos();
  }
  else if (selectedRadio === "radio-done") {
    renderTodos();
  }
};

// Event Listener für den "Delete" Button
deleteButton.addEventListener("click", deleteDoneTodos);

// 
function deleteDoneTodos() {
  state.todos = state.todos.filter(todo => !todo.done);
  persistState(state);
  renderTodos();
}

// Aktuellen Zustand im LocalStorage speichern
function persistState(newState) {
  localStorage.setItem("state", JSON.stringify(newState));
}

// Aktuellen Zustand aus dem LocalStorage laden
renderTodos();