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
	const todo = document.createElement("li");
	const text = document.createElement("span");
	const btn = document.createElement("button");

	todoList.appendChild(todo);
	todo.classList.add("todo");
	todo.id = newTodoObj.id;
	todo.appendChild(text);
	todo.appendChild(btn);
	text.innerText = newTodoObj.text;
	btn.innerHTML = "❌";
	btn.addEventListener("click", deleteTodo);
}

function onTodoSubmit(e) {
	e.preventDefault();
	const newTodo = "🤍 " + todoInput.value;
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

todoInput.addEventListener("focusin", () => onFocusIn(todoInput));

todoInput.addEventListener("focusout", () => onFocusOut(todoInput));

const WHITE = "#eee";
const GREY = "#eee";

function changeFontColor() {
	const h1 = document.querySelector("h1");
	const h2 = document.querySelector("h2");
	const span = document.querySelector("span");
	const div = document.querySelector("div");
	const li = document.querySelector("li");
	const input = document.querySelector("input");

	if (pickedBg === BG_DARK) {
		h1.style.color = WHITE;
		h2.style.color = WHITE;
		span.style.color = WHITE;
		div.style.color = WHITE;
		input.style.borderBottomColor = WHITE;
		li.style.borderBottomColor = WHITE;
	} else if (pickedBg === BG_LIGHT) {
		h1.style.color = GREY;
		h2.style.color = GREY;
		span.style.color = GREY;
		div.style.color = GREY;
		input.style.borderBottomColor = GREY;
		li.style.borderBottomColor = GREY;
	}
}

window.addEventListener("load", changeFontColor);
