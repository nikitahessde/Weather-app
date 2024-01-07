const apiKey = "076a430faa640546a63a998f068be33f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.getElementById("input");
const searchBtn = document.getElementById("button");
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  const error = document.getElementById("error");
  const weatherElement = document.getElementById("weather");
  const sadIcon = document.getElementById("sad-icon");

  if (data.message == 'city not found') {
    error.classList.remove("hidden");
    error.classList.add("block");
    weatherElement.classList.remove("block");
    weatherElement.classList.add("hidden");
  } else {
    error.classList.remove("block")
    error.classList.add("hidden")
    weatherElement.classList.remove("hidden");
    weatherElement.classList.add("block");
  }

  document.getElementById("city").innerHTML = data.name;
  document.getElementById("temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.getElementById("humidity").innerHTML =
    Math.round(data.main.humidity) + " %";
  document.getElementById("wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "../images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "../images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "../images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "../images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "../images/rain.png";
  } else {
    weatherIcon.src = "../images/snow.png";
  }

}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
