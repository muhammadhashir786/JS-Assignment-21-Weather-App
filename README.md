# 🌦️ Weather App

A clean, responsive, and real-time **Weather Forecast Web Application** built with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)** using the **WeatherAPI** service. Users can search any city worldwide to instantly view current temperature, weather conditions, and detailed atmospheric metrics.

## 💻 Live Demo

- 🔗 **Live Site:** https://muhammadhashir-weather-app.netlify.app
- 📂 **Repository:** https://github.com/muhammadhashir786/JS-Assignment-21-Weather-App

## ✨ Features

- **Real-Time Weather Search:** Fetches live weather data for any city globally via REST API (`fetch` + `async/await`).
- **Comprehensive Weather Metrics:** Displays current temperature (`°C`), condition summary with dynamic weather icons, location (city & country), "Feels Like" temperature (`°C`), humidity (`%`), wind speed (`km/h`) & direction, atmospheric pressure (`mb`), visibility (`km`), and UV index.
- **Smart Input Validation & Error Handling:** Handles empty search queries and invalid city names gracefully with clear, user-friendly error banners.
- **Request State & Spam Prevention:** Disables the submit button with a `"Checking..."` loading state during active API calls (`try / catch / finally`) to prevent duplicate requests.
- **Modern & Responsive UI:** Features a clean card-based layout with subtle border radii, soft gradient backgrounds, smooth hover/focus transitions, and full responsiveness across desktop, tablet (`≤600px`), and mobile (`≤400px`) viewports.

## 🛠️ Tech Stack

- **Structure:** HTML5 (Semantic & accessible form layout)
- **Styling:** CSS3 (Flexbox, CSS gradients, custom states, responsive media queries)
- **Logic & API Integration:** Vanilla JavaScript (ES6+, `async/await`, Fetch API, DOM Manipulation)
- **Data Provider:** https://www.weatherapi.com/
- **Deployment:** https://muhammadhashir-weather-app.netlify.app

## 📁 Project Structure

```text
JS-Assignment-21-Weather-App/
├── index.html      # Main HTML structure and search form
├── style.css       # Card styling, states, and responsive breakpoints
├── app.js          # API fetching, validation, and dynamic DOM rendering
└── README.md       # Project documentation
```

## 🚀 Getting Started (Run Locally)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/muhammadhashir786/JS-Assignment-21-Weather-App.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd JS-Assignment-21-Weather-App
   ```
3. **Open in browser:**
   Open `index.html` directly in your browser or launch it using the **Live Server** extension in VS Code.

## 👨‍💻 Author

**Muhammad Hashir**

- GitHub: https://github.com/muhammadhashir786
- LinkedIn: https://www.linkedin.com/in/muhammad-hashir-dev
