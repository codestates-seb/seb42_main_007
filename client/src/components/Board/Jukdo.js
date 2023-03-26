import React, { useState, useEffect } from "react";
import axios from "axios";

const JukDo = () => {
  const [temperature, setTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState("");
  const [waveHeight, setWaveHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get("/api/weather");
        const { data } = response;
        setWaveHeight(data.waveHeight);
        setTemperature(data.temperature);
        setWindSpeed(data.windSpeed);
        setWindDirection(data.windDirection);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, []);

  const isSafeToSurf = () => {
    if (waveHeight >= 2) {
      return "No, waves are too big.";
    }
    if (windSpeed >= 10) {
      return "No, winds are too strong.";
    }
    if (temperature < 10 || temperature > 30) {
      return "No, temperature is too extreme.";
    }
    return "Yes, it's safe to surf!";
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Temperature: {temperature}°C</p>
          <p>Wind Speed: {windSpeed} m/s</p>
          <p>Wind Direction: {windDirection}</p>
          <p>Wave Height: {waveHeight}m</p>
          <p>{isSafeToSurf()}</p>
        </div>
      )}
    </div>
  );
};

export default JukDo;