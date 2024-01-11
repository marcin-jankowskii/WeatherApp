import axios from 'axios';

const API_KEY = '0139bd3f676e2ab90449be48e5aa00de';

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather: ", error);
    }
}

export const fetchForecast = async (city) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching forecast: ", error);
    }
}

export default { fetchWeather, fetchForecast };