const button = document.querySelector("#loadBtn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <img src="${data[0].url}" width="300">
      `;
    })
    .catch(error => {
      console.log("Error:", error);
    });
});

const weatherContainer = document.getElementById("weatherContainer");
const loadWeatherBtn = document.getElementById("loadWeather");

loadWeatherBtn.addEventListener("click", () => {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true")
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const temperature = data.current_weather.temperature;

      weatherContainer.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
      `;
    })
    .catch(error => {
      console.error("Error:", error);
      weatherContainer.innerText = "Unable to load weather data.";
    });
});

const output = document.getElementById("output");

document.getElementById("weatherBtn").addEventListener("click", () => {
  fetchWeather();
});

document.getElementById("windBtn").addEventListener("click", () => {
  fetchWind();
});

function fetchWeather() {
  fetch("API_URL")
    .then(res => res.json())
    .then(data => {
      output.innerText = "Temperature: " + data.current_weather.temperature;
    });
}

function fetchWind() {
  fetch("API_URL")
    .then(res => res.json())
    .then(data => {
      output.innerText = "Wind Speed: " + data.current_weather.windspeed;
    });
}