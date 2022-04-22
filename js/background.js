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
const bgImg = document.createElement("img");

function getRandomNumber(min = 0, max = images.length) {
	return Math.floor(Math.random() * (max - min) + min);
}

const pickedImgNum = getRandomNumber();

function changeImgs(picked) {
	body.appendChild(bgImg);
	bgImg.src = `/img/${picked}.jpg`;
}

changeImgs(pickedImgNum);
