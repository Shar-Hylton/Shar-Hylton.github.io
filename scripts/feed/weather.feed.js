const apiKey = "6349841e23794351bf7171317252303";

const fetchWeather = async (lat, lon) => {
  const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5&aqi=yes&alerts=no`;

  try {
    const response = await fetch(weatherUrl);
    const weatherData = await response.json();

    if (weatherData && weatherData.forecast && weatherData.forecast.forecastday) {
      displayWeather(weatherData);
    } else {
      document.getElementById("weather-container").innerHTML = "<p>Weather data unavailable</p>";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-container").innerHTML = "<p>Error fetching weather data</p>";
  }
};

const displayWeather = (data) => {
    const { current, forecast, location } = data;
    const today = forecast.forecastday[0];
  
    // Map conditions to background colors
    const getBackgroundColor = (conditionText) => {
      const lower = conditionText.toLowerCase();
      if (lower.includes("sunny") || lower.includes("clear")) return "#ffffff";
      if (lower.includes("cloud")) return "#e0f7fa"; 
      if (lower.includes("rain") || lower.includes("drizzle")) return "#e1f5fe";
      if (lower.includes("snow")) return "#f3e5f5"; 
      if (lower.includes("thunder")) return "#fbe9e7";
      return "#f5f5f5"; 
    };
  
    const currentBgColor = getBackgroundColor(current.condition.text);
  
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = `
      <section class="weather-overview" style="background-color: ${currentBgColor}; padding: 20px; border-radius: 12px;">
        <div class="current-weather">
          <h2>${location.name}, ${location.region}</h2>
          <img src="https:${current.condition.icon}" alt="${current.condition.text}" />
          <p class="temp">${current.temp_c}°C</p>
          <p>${current.condition.text}</p>
        </div>
  
        <section class="forecast-container">
          <h3>3-Day Forecast</h3>
          <div class="forecast-cards">
          ${forecast.forecastday
            .map((day, index) => {
              const dayName = new Date(day.date).toLocaleDateString(undefined, {
                weekday: 'long',
              });
  
              const bgColors = ['#fce4ec', '#e3f2fd', '#e8f5e9', '#fff3e0', '#f3e5f5'];
              const bgColor = bgColors[index % bgColors.length];
  
              return `
                <article class="forecast-card" style="background-color: ${bgColor}">
                  <h4>${dayName}</h4>
                  <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}" />
                  <p>${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C</p>
                  <p>${day.day.condition.text}</p>
                </article>`;
            })
            .join("")}
          </div>
        </section>
  
        <section class="climate">
          <section class="sun-times">
            <h3>Sunrise & Sunset</h3>
            <p>🌅 Sunrise: ${today.astro.sunrise}</p>
            <p>🌇 Sunset: ${today.astro.sunset}</p>
          </section>
  
          <section class="air-quality">
            <h3>Air Quality</h3>
            <p>🌫️ AQI (PM2.5): ${current.air_quality.pm2_5.toFixed(1)}</p>
            <p>Visibility: ${current.vis_km} km</p>
          </section>
        </section>
      </section>
  
      <section class="weather-details">
        <h3>Details</h3>
        <table>
          <tr><td>Feels Like:</td><td>${current.feelslike_c}°C</td></tr>
          <tr><td>Humidity:</td><td>${current.humidity}%</td></tr>
          <tr><td>Wind:</td><td>${current.wind_kph} km/h ${current.wind_dir}</td></tr>
          <tr><td>UV Index:</td><td>${current.uv}</td></tr>
          <tr><td>Pressure:</td><td>${current.pressure_mb} mb</td></tr>
        </table>
      </section>
    `;
  };
  

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      () => {
        document.getElementById("weather-container").innerHTML =
          "<p>Location access denied. Unable to fetch weather data.</p>";
      }
    );
  } else {
    document.getElementById("weather-container").innerHTML =
      "<p>Geolocation is not supported by this browser.</p>";
  }
};



document.addEventListener("DOMContentLoaded", getLocation);
