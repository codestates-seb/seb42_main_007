import { useState, useEffect } from "react";
import axios from "axios";

const JukDo = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const regionId = "1";

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/weather?regionId=${regionId}`);
        const result = response.data;
        setWeather(result.weather);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        setWeather(null);
      }
    }
    fetchWeather();
  }, [regionId]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!weather) {
    return <div>Error: Unable to retrieve weather data</div>;
  }
  

  const { lastUpdateTime, temp, humid, rainAmount } = weather;

  return (
    <div>
      <p>
        온도: {temp}℃, 습도: {humid}%,
        강수량: {rainAmount}mm (기준 시점: {lastUpdateTime}시)
      </p>
    </div>
  );
}

export default JukDo;
