import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../LoadingIndicator";

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
    return <div><LoadingIndicator /></div>;
  }
  
  if (!weather) {
    return <div>에러: 날씨 데이터에 접근 할 수 없습니다</div>;
  }
  

  const { wave, temp, windSpeed, precipitation } = weather;

  return (
    <div>
      <p>
        온도: {temp}℃, 파고: {wave}m<br />
        강수량: {precipitation}mm, 풍속: {windSpeed}m/s
      </p>
    </div>
  );
}

export default JukDo;
