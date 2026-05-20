const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// News Route
app.get('/news/:country', async (req, res) => {

    const country = req.params.country;

    try {

        // NewsAPI URL
        const url =
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;

        // Fetch data
        const response = await axios.get(url);

        const articles = response.data.articles;

        // Limit to 5 articles
        const limitedArticles = articles.slice(0, 5);

        // Format response
        const formattedNews = limitedArticles.map(article => ({
            title: article.title,
            source: article.source.name,
            url: article.url,
            publishedAt: article.publishedAt
        }));

        // Send JSON response
        res.json({
            country: country,
            totalResults: formattedNews.length,
            headlines: formattedNews
        });

    } catch (error) {

        console.log(error.response?.data || error.message);

        // Invalid country or API issue
        res.status(500).json({
            error: 'Failed to fetch news headlines'
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});