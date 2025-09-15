// Coordinates for Abuja
const lat = 9.05785;
const lon = 7.49585;

// Open-Meteo API (3 days, Fahrenheit, includes mean temp)
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,sunrise,sunset,relative_humidity_2m_mean,weathercode&temperature_unit=fahrenheit&timezone=Africa/Lagos&forecast_days=3`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // ---------------- CURRENT WEATHER ----------------
        const current = data.current_weather;
        const temp = Math.round(current.temperature);
        const code = current.weathercode;

        const high = Math.round(data.daily.temperature_2m_max[0]);
        const low = Math.round(data.daily.temperature_2m_min[0]);
        const humidity = data.daily.relative_humidity_2m_mean[0];
        const sunrise = new Date(data.daily.sunrise[0]).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        const sunset = new Date(data.daily.sunset[0]).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
        

        const weatherDescriptions = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Fog",
            48: "Rime fog",
            51: "Light drizzle",
            61: "Rain showers",
            71: "Snowfall",
            95: "Thunderstorm"
        };
        const description = weatherDescriptions[code] || "Unknown";

        // Update current section
        document.querySelector('.description').textContent = description;
        document.querySelector('.temperature').textContent = `${temp}°F`;
        document.querySelector('.high').textContent = `High: ${high}°F`;
        document.querySelector('.low').textContent = `Low: ${low}°F`;
        document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
        document.querySelector('.sunrise').textContent = `Sunrise: ${sunrise}`;
        document.querySelector('.sunset').textContent = `Sunset: ${sunset}`;

        // ---------------- FORECAST ----------------
        const forecastDiv = document.querySelector('.forecast');
        forecastDiv.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            let label;
            if (i === 0) {
                label = "Today";
            } else {
                label = new Date(data.daily.time[i]).toLocaleDateString([], {
                    weekday: 'long'
                });
            }

            const dayTemp = Math.round(data.daily.temperature_2m_mean[i]);

            const card = document.createElement("div");
            card.classList.add("forecast-day");
            card.innerHTML = `<p>${label}: <strong>${dayTemp}°F</strong></p>`;
            forecastDiv.appendChild(card);
        }

    } catch (err) {
        console.error(err);
        document.querySelector('.description').textContent = "Weather unavailable";
    }
}

getWeather();