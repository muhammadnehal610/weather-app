const containerImg = document.getElementById("containerImg");
const TempBox = document.getElementById("Temp-box");
const cityName = document.getElementById("cityName");
const temperatur = document.getElementById("temperatur");
const feelTem = document.getElementById("feel-tem");
const maxTem = document.getElementById("max-tem");
const minTem = document.getElementById("min-tem");
const dateTime = document.getElementById("date-time");

const pakistanCities = [
  { name: "Hunza Valley", latitude: 36.3167, longitude: 74.65 },
  { name: "Skardu", latitude: 35.2971, longitude: 75.6333 },
  { name: "Fairy Meadows", latitude: 35.4213, longitude: 74.5969 },
  { name: "Naltar Valley", latitude: 36.1396, longitude: 74.1928 },
  { name: "Murree", latitude: 33.9062, longitude: 73.3903 },
  { name: "Kaghan Valley", latitude: 34.7939, longitude: 73.5793 },
  { name: "Swat Valley", latitude: 35.222, longitude: 72.4258 },
  { name: "Chitral", latitude: 35.851, longitude: 71.7864 },
  { name: "Neelum Valley", latitude: 34.5857, longitude: 73.907 },
  { name: "Ratti Gali Lake", latitude: 34.8861, longitude: 74.0486 },
  { name: "Shangrila Resort", latitude: 35.3525, longitude: 75.5088 },
  { name: "Deosai National Park", latitude: 35.0303, longitude: 75.443 },
  { name: "Khunjerab Pass", latitude: 36.8497, longitude: 75.4306 },
  { name: "Shogran", latitude: 34.6271, longitude: 73.495 },
  { name: "Rama Meadows", latitude: 35.2918, longitude: 74.9643 },
  { name: "Gojal Valley", latitude: 36.6833, longitude: 74.85 },
  { name: "Kalash Valley", latitude: 35.6699, longitude: 71.7309 },
  { name: "Ayubia National Park", latitude: 34.0607, longitude: 73.402 },
  { name: "Saiful Muluk Lake", latitude: 34.8722, longitude: 73.6919 },
  { name: "Khaplu", latitude: 35.1404, longitude: 76.337 },
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { name: "Sibhi", latitude: 29.5532, longitude: 67.8808 },
];

const cityDrop = document.getElementById("cityDrop");

pakistanCities.forEach((data, ind) => {
  var dropdown = ` 
  <option value="${ind}">${data.name}</option>`;
  cityDrop.innerHTML += dropdown;
});
cityDrop.addEventListener("change", function () {
  console.log(pakistanCities[cityDrop.value]);

  fetchWeather(
    pakistanCities[this.value].latitude,
    pakistanCities[this.value].longitude,
    displayWeatherData
  );
});

function fetchWeather(lat, long, callback) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c153479685c47f1b34a83591f3b1acbe`
  )
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
}
function displayWeatherData(cityWeather) {
  console.log(cityWeather);
  cityName.innerText = cityWeather.name;
  // console.log(cityWeather.main.temp);
  displayTemp = cityWeather.main.temp - 273;
  // temperatur.innerText = displayTemp;
  displayFeelTemp = cityWeather.main.feels_like - 273;
  // feelTem.innerText = displayFeelTemp;
  displayMaxTemp = cityWeather.main.temp_max - 273;
  // maxTem.innerText = displayMaxTemp;
  displayMinTemp = cityWeather.main.temp_min - 273;
  displaySunSet = cityWeather.sys.sunset / 1000 / 60 / 60 / 24;
  displaySunrice = cityWeather.sys.sunrise / 1000 / 60 / 60 / 24;
  // minTem.innerText = displayMinTemp;
  var ele = ` <div class="heading">Temperature</div>
        <div class="temperatur" id="temperatur">${Math.round(displayTemp)}</div>
        <div class="heading">Feel-Temperature</div>
        <div class="feel-tem" id="feel-tem">${Math.round(displayFeelTemp)}</div>
        <div class="heading">Max-Temperature</div>
        <div class="max-tem" id="max-tem">${Math.round(displayMaxTemp)}</div>
        <div class="heading">Min-Temperature</div>
        <div class="min-tem" id="min-tem">${Math.round(displayMinTemp)}</div>
        <div class="heading">Humidity</div>
       
        <div class="heading">Wind</div>
        <div class="min-tem" id="min-tem">${
          cityWeather.wind.speed
        }km/hour</div>`;
  TempBox.innerHTML = ele;
  // var ele1 = ` <div class="heading">Sunset</div>
  //  <div class="min-tem" id="min-tem">${Math.floor(displaySunSet)}</div>
  //  <div class="heading">Sunrise</div>
  //  <div class="min-tem" id="min-tem">${Math.floor(displaySunrice)}</div>`;
  // dateTime.innerHTML = ele1;
}
