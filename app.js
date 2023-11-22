const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const weatherApiKey = 'YOUR_WEATHERBIT_API_KEY';
const weatherApiUrl = 'https://api.weatherbit.io/v2.0/current';

app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get(weatherApiUrl, {
            params: {
                city: 'Bandung',
                key: weatherApiKey,
            },
        });

        const weatherData = response.data.data[0];
        res.json({
            temperature: weatherData.temp,
            condition: weatherData.weather.description,
        });
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
