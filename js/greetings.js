const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	greetings(username);
}

function greetings(name) {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `반가워요! ${name}님`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	// login-form 보여주기
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// greeting 보여주기
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greetings(savedUsername);
}
