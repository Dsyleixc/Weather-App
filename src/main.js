import './style.css';
import { getWeather } from './fetch-data.js';
import { getUserInput } from './user-input.js';
import { renderAllData } from './render-data.js';
import { weatherCodeDescription, weatherImages } from './weather-code-info.js';

const searchButton = document.querySelector('#search');

function init() {
    renderAllData('', '', '', '', '');
}

function sortData(dataObject) {
    const weatherCode = dataObject.data.values.weatherCode;
    const weatherImg = weatherImages[weatherCode];
    const temperature = dataObject.data.values.temperature;
    const weatherDescription = weatherCodeDescription[weatherCode];
    const humidityValue = dataObject.data.values.humidity;
    const windValue = dataObject.data.values.windSpeed;
    console.log(weatherImg, weatherDescription);

    return [weatherImg, temperature, weatherDescription, humidityValue, windValue];
}

async function handleClick() {
    const userInput = getUserInput();
    const data = await getWeather(userInput);
    const sortedData = sortData(data);
    renderAllData(...sortedData);
}

searchButton.addEventListener('click', handleClick);

init();
