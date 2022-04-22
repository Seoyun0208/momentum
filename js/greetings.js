const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e) {
	e.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const userName = loginInput.value;
	localStorage.setItem(USERNAME_KEY, userName);
	greetings(userName);
}

function greetings(name) {
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `반가워요! ${name}님`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
	// login-form 보여주기
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	// greeting 보여주기
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greetings(savedUserName);
}
