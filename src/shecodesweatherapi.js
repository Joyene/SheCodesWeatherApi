let container = document.querySelector("#contain");
container.addEventListener("submit", displayTemp);
//display country name
function displayTemp(event) {
  event.preventDefault();
  //let cityBtn = document.querySelector("#typeCity");
  //let h2 = document.querySelector("#city");
  //h2.innerHTML = `${cityBtn.value}`;
  let apiKey = "5ec378af668e4e5ca5b63a514661a894";
  let city = document.querySelector("#typeCity").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  //console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#city_condition").innerHTML =
    response.data.weather[0].main;
  let mainTemp = Math.round(response.data.main.temp);
  document.querySelector("#temp").innerHTML = `${mainTemp}°C`;
  //console.log(response.data);
}
//end

let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = now.getDay();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let h3 = document.querySelector("h3");
h3.innerHTML = `${Days[day]}   ${hours}:${minutes}`;

//geolocation
