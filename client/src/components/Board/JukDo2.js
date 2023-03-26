import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '<your_api_key>';
const API_URL = `https://api.weather.com/v3/wx/observations/current?geocode=38.98,127.96&units=m&language=en-US&format=json&apiKey=${API_KEY}`;

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setWeather(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weather) return null;

  const { temperature, humidity, wind_speed, wind_direction } = weather.observation;

  return (
    <div>
      <h1>Weather in Yangyang</h1>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind speed: {wind_speed} km/h</p>
      <p>Wind direction: {wind_direction}°</p>
    </div>
  );
}

export default App;