import { useState, useEffect } from "react";
import axios from "axios";
import LoadingIndicator from "../LoadingIndicator";
import styled from "styled-components";

const JukDo8 = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const regionId = "8";

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
    return <LoadingWrapper><LoadingIndicator /></LoadingWrapper>;
  }
  
  if (!weather) {
    return <div>에러: 날씨 데이터에 접근 할 수 없습니다</div>;
  }

  const { wave, temp, windSpeed, precipitation } = weather;

  return (
    <WeatherWrapper>
    <WeatherInfo temperature={temp} wave={wave} windSpeed={windSpeed} precipitation={precipitation}>
      <div className="temp">{temp}℃</div>
      <div className="wave">파고: {wave}m</div>
      <div className="windSpeed">풍속: {windSpeed}m/s</div>
      <div className="precipitation">강수확률: {precipitation}%</div>
    </WeatherInfo>
  </WeatherWrapper>

  );
}

export default JukDo8;

const WeatherWrapper = styled.div`
margin-top: 1.2rem;
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  .temp {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => {
      const temperature = props.temperature;
      if (temperature >= 30) {
        return '#BD0000'; // 빨간색
      } else if (temperature >= 20 && temperature < 30) {
        return '#187D36'; // 초록색
      } else if (temperature >= 10 && temperature < 20) {
        return '#1C6EA4'; // 파랑색
      } else {
        return '#00008C'; // 남색
      }
    }};
  }

  .wave {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => {
      const waveHeight = props.wave;
      if (waveHeight >= 2) {
        return '#BD0000'; // 빨간색
      } else if (waveHeight >= 1) {
        return '#BF7C00'; // 주황색
      } else if (waveHeight >= 0.5) {
        return '#187D36'; // 초록색
      } else {
        return '#9C9A34'; // 연한 노랑색
      }
    }};
  }

  .windSpeed {
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => {
    const windSpeed = props.windSpeed;
    if (windSpeed <= 5.4) {
      return '#187D36'; // 초록색
    } else if (windSpeed <= 10.7) {
      return '#1C6EA4'; // 파랑색
    } else if (windSpeed <= 17.1) {
      return '#BF7C00'; // 주황색
    } else {
      return '#BD0000'; // 빨간색
    }
  }};
}

.precipitation {
  font-size: 1.2rem;
  font-weight: bold;
  color: ${props => {
    const precipitation = props.precipitation;
    if (precipitation <= 0) {
      return '#1C6EA4'; // 파랑색
    } else if (precipitation <= 10) {
      return '#187D36'; // 초록색
    } else if (precipitation <= 50) {
      return '#BF7C00'; // 주황색
    } else {
      return '#BD0000'; // 빨간색
    }
  }};
}
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border-radius: 10px;
`;
