const API_KEY = "a782ae4c3e9d227152f127fdd632778d";

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			const country = document.querySelector(
				"#weather span:nth-child(1)"
			);
			const city = document.querySelector("#weather span:nth-child(2)");
			const weather = document.querySelector(
				"#weather span:nth-child(3)"
			);
			const temp = document.querySelector("#weather span:nth-child(4)");

			country.innerText = data.sys.country;
			city.innerText = data.name;
			weather.innerText = data.weather[0].main;
			temp.innerText = data.main.temp;
		});
}

function onGeoError() {
	console.log("사용자의 위치를 찾을 수 없어, 날씨 정보 제공이 어렵습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
