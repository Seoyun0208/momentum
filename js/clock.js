const clock = document.querySelector("#clock");

function currentTime() {
	const date = new Date();

	let h = String(date.getHours()).padStart(2, "0");
	let m = String(date.getMinutes()).padStart(2, "0");
	let s = String(date.getSeconds()).padStart(2, "0");

	clock.innerText = `${h}:${m}:${s}`;
}

currentTime();
setInterval(currentTime, 1000);
