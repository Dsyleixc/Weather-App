'use strict';

const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidityValue = document.querySelector('#humidity-value');
const windValue = document.querySelector('#wind-value');

function renderWeatherIcon(icon) {
    weatherIcon.src = `/weather-pictures/${icon}`;
}

function renderTemperature(temp) {
    temperature.textContent = temp;
}

function renderWeatherDescription(description) {
    weatherDescription.textContent = description;
}

function renderHumidityValue(humidity) {
    humidityValue.textContent = `${humidity}%`;
}

function renderWindValue(wind) {
    windValue.textContent = `${wind}km/h`;
}

function renderAllData(icon, temp, description, humidity, wind) {
    renderWeatherIcon(icon);
    console.log('rendering icon');
    renderTemperature(temp);
    renderWeatherDescription(description);
    renderHumidityValue(humidity);
    renderWindValue(wind);
}

export { renderAllData };
