const API_KEY = "5daee078985c4de2a7d185254261409";

async function chkweather(event) {
  event.preventDefault();

  const input = document.querySelector("input");
  const weatherList = document.querySelector("ul");

  const city = input.value.trim();

  // Check empty input
  if (city === "") {
    weatherList.innerHTML = `
      <li class="error">
        Please enter a city name.
      </li>
    `;

    return;
  }

  // Loading message
  weatherList.innerHTML = `
    <li class="loading">
      Checking weather...
    </li>
  `;

  try {
    const API_URL =
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;

    const response = await fetch(API_URL);

    const data = await response.json();

    // API error
    if (!response.ok) {
      throw new Error(data.error?.message || "Unable to find weather.");
    }

    // Get weather information
    const location = data.location;
    const current = data.current;

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

    // Show weather
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
    console.error(error);

    weatherList.innerHTML = `
      <li class="error">
        ${error.message}
      </li>
    `;
  }
}