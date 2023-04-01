import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '<your_api_key>';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Yangyang&appid=${API_KEY}`;

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [surfable, setSurfable] = useState(false);

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

  useEffect(() => {
    if (weather) {
      const { wind, waves } = weather;
      const { speed } = wind;
      const { height } = waves;
      setSurfable(speed >= 10 && height >= 1);
    }
  }, [weather]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!weather) return null;

  const { main, wind, waves } = weather;
  const { temp } = main;
  const { speed } = wind;
  const { height } = waves;

  return (
    <div>
      <h1>Weather in Yangyang</h1>
      <p>Temperature: {temp} K</p>
      <p>Wind speed: {speed} m/s</p>
      <p>Wave height: {height} m</p>
      {surfable ? (
        <p>Surf's up!</p>
      ) : (
        <p>Not good for surfing today...</p>
      )}
    </div>
  );
}

export default App;