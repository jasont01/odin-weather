const API_KEY='e8556c4fa07ab331b78b7bd73055b650';

const background = document.getElementById('background');
const input = document.querySelector('input');
const form = document.querySelector('form');
const output = document.getElementById('results');

const location = document.getElementById('location');
const icon = document.getElementById('icon');
const conditions = document.getElementById('current-conditions');
const currentTemp = document.getElementById('current-temp');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const compass = document.querySelector('.compass');
const date = document.getElementById('date');
const celsius = false;

form.addEventListener('submit', getWeather);  

async function getWeather(e) {
  e.preventDefault();
  const location = input.value || '33064';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  
  const result = await fetch(url);
  const data = await result.json();
  
  render(data);
}

function convertTemp(temp, celsius) {
  const degC = temp - 273.15;
  const degF = degC * (9/5) + 32;
  return (celsius) ? degC.toFixed(1) : degF.toFixed(0);
}

function getHeading(deg) {
  const val = Math.floor((deg / 22.5) + 0.5);
  const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

function render(data) {
  location.innerHTML = data.name;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  conditions.innerHTML = data.weather[0].main;
  const units = (celsius) ? "&#x2103" : "&#x2109"
  currentTemp.innerHTML = convertTemp(data.main.temp, celsius) + `<span id="units">${units}</span>`;
  feelsLike.innerHTML = convertTemp(data.main.feels_like, celsius) + units;
  humidity.innerHTML = data.main.humidity;
  pressure.innerHTML = data.main.pressure;
  compass.querySelector('p').innerHTML = `${getHeading(data.wind.deg)}<span>${data.wind.speed}MPH</span>`;
  compass.querySelector('.arrow').style.transform = `rotate(${data.wind.deg}deg)`;
  date.innerHTML = new Date(data.dt * 1000);

  background.classList = (data.weather[0].main).toLowerCase();
  output.style.display = 'block';
}