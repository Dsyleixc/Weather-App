const weatherApiKey = 'N6ZujojbRj8fjLBqurNUEAqKADlecUbj'; // api key for openweathermap shits free so no need to hide it :D

async function getWeather(location) {
    try {
        const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${weatherApiKey}`, {
            mode: 'cors',
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Error fetching weather:', error);
        throw error;
    }
}

export { getWeather };
