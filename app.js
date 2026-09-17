// store API key in variable:
const API_KEY = "5daee078985c4de2a7d185254261409";

// function to run weather app:
async function chkweather(event) {
  event.preventDefault();

  // Element Selection:
  const input = document.querySelector("input");
  const weatherList = document.querySelector("ul");

  // get input value:
  const city = input.value.trim();

  // check empty input:
  if (city === "") {
    weatherList.innerHTML = `
      <li class="error">
        Please enter a city name.
      </li>
    `;

    return;
  }

  // show loading message
  weatherList.innerHTML = `
    <li class="loading">
      Checking weather...
    </li>
  `;

  // try catch:
  try {
    const API_URL =
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;

    // fetch data from API:
    const response = await fetch(API_URL);

    // convert raw data into json (object):
    const data = await response.json();

    // API error/check response true/false:
    if (!response.ok) {
      throw new Error(data.error?.message || "Unable to find weather.");
    }

    // Get weather information:
    // extract information from data variable:

    // 2 main information in data variable:
    const location = data.location;
    const current = data.current;

    // other information extract from "location" and "current"

    const cityName = location.name;
    const country = location.country;

    const temperature = current.temp_c;
    const feelsLike = current.feelslike_c;

    const condition = current.condition.text;
    const weatherIcon = current.condition.icon;

    const humidity = current.humidity;
    const windSpeed = current.wind_kph;

    const windDirection = current.wind_dir;

    const pressure = current.pressure_mb;

    const visibility = current.vis_km;

    const uv = current.uv;

    // show extracted data on screen:
    weatherList.innerHTML = `
      <li>
        <img
          class="weather-icon"
          src="https:${weatherIcon}"
          alt="${condition}"
        >

        <div class="temperature">
          ${temperature}°C
        </div>

        <div class="condition">
          ${condition}
        </div>
      </li>

      <li>
        📍 <strong>Location:</strong>
        ${cityName}, ${country}
      </li>

      <li>
        🌡️ <strong>Feels Like:</strong>
        ${feelsLike}°C
      </li>

      <li>
        💧 <strong>Humidity:</strong>
        ${humidity}%
      </li>

      <li>
        💨 <strong>Wind:</strong>
        ${windSpeed} km/h (${windDirection})
      </li>

      <li>
        🌪️ <strong>Pressure:</strong>
        ${pressure} mb
      </li>

      <li>
        👁️ <strong>Visibility:</strong>
        ${visibility} km
      </li>

      <li>
        ☀️ <strong>UV Index:</strong>
        ${uv}
      </li>
    `;
  } catch (error) {
    // print error on console:
    console.error(error);

    // show error on screen:
    weatherList.innerHTML = `
      <li class="error">
        ${error.message}
      </li>
    `;
  }
}