import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '<af9623f9d7e9c5712a1d1434431155aa>';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Yangyang&appid=${API_KEY}`;

function JukDo() {
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

  const { main, wind } = weather;
  const { temp, humidity } = main;
  const { speed, deg } = wind;

  return (
    <div>
      <h1>Weather in Yangyang</h1>
      <p>Temperature: {temp} K</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind speed: {speed} m/s</p>
      <p>Wind direction: {deg} deg</p>
    </div>
  );
}

export default JukDo;