const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODOS_KEY = "todos";

function saveTodos() {
	strTodos = JSON.stringify(todos);
	localStorage.setItem(TODOS_KEY, strTodos);
}

function deleteTodo(e) {
	const li = e.target.parentElement;
	li.remove();
	todos = todos.filter((todo) => parseInt(li.id) !== todo.id);
	saveTodos();
}

function paintTodos(newTodoObj) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const btn = document.createElement("button");

	todoList.appendChild(li);
	li.id = newTodoObj.id;
	li.appendChild(span);
	li.appendChild(btn);
	span.innerText = newTodoObj.text;
	btn.innerText = "❌";
	btn.addEventListener("click", deleteTodo);
}

function onTodoSubmit(e) {
	e.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = { text: newTodo, id: Date.now() };
	todos.push(newTodoObj);
	paintTodos(newTodoObj);
	saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

function paintSavedTodos() {
	if (savedTodos) {
		const parsedTodos = JSON.parse(savedTodos);
		todos = parsedTodos;
		parsedTodos.forEach(paintTodos);
	}
}

paintSavedTodos();
