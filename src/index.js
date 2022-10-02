let now = new Date();
let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

let day = document.querySelector(".day");
day.innerHTML = `${days[now.getDay()]}`;
let date = document.querySelector(".date");
let currentMonth = month[now.getMonth()];
date.innerHTML = `${now.getDate()}.${currentMonth}`;
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let time = document.querySelector(".time");
time.innerHTML = `${hours}:${minutes}`;

let search = document.querySelector(".submit");
let city = document.querySelector("#search-form");
let currentCity = document.querySelector(".currentCity");
function searchCity(event) {
  event.preventDefault();
  currentCity.innerHTML = `${city.value}`;

  let apiKey = "197ef3a642b76eef90e131866f74a0a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
search.addEventListener("click", searchCity);
let currentTemperature = document.querySelector(".currentTemperature");
function displayTemperature(response) {
  currentTemperature.innerHTML = ` ${Math.round(response.data.main.temp)}°C`;
}
