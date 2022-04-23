const BG_LIGHT = "light";
const BG_DARK = "dark";

const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
];
const body = document.querySelector("body");
const content = document.querySelector("#content");

function getRandomNumber(min = 0, max = images.length) {
	return Math.floor(Math.random() * (max - min) + min);
}
let pickedBg;
const pickedImgNum = getRandomNumber();
function changeImgs(picked) {
	body.style.background = `linear-gradient(
		rgba(0, 0, 0, 0.1),		
		rgba(0, 0, 0, 0.3)
	), url(./img/${picked}.jpg) center center / cover no-repeat`;
	content.style.background = `linear-gradient(
		rgba(255, 255, 255, 0.1),		
		rgba(255, 255, 255, 0.3)
		), url(./img/${picked}.jpg) center center / cover no-repeat`;
}

changeImgs(pickedImgNum);
