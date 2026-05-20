const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Route
app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;

    try {
        // OpenWeather API URL
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        // Fetch weather data
        const response = await axios.get(url);

        const data = response.data;

        // Create custom response
        const weatherData = {
            city: data.name,
            temperature: data.main.temp,
            condition: data.weather[0].description,
            humidity: data.main.humidity
        };

        // Send JSON response
        res.json(weatherData);

    } catch (error) {

    console.log(error.response?.data || error.message);

    if (error.response && error.response.status === 404) {
        return res.status(404).json({
            error: 'City not found'
        });
    }

    res.status(500).json({
        error: 'Failed to fetch weather data'
    });
}
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});