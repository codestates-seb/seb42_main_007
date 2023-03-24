import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { REDIRECT_URI } from '../Apiurl';

const LoginWrapper = styled.div`
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #102a43;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 30rem;
    padding: 3rem;
    background-color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }

  label {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #102a43;
  }

  input[type='email'],
  input[type='password'] {
    font-size: 1.4rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
    background-color: #f2f2f2;
    color: #102a43;
  }

  button {
    font-size: 1.6rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #0077c2;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #0062a6;
  }

  .error {
    font-size: 1.4rem;
    color: red;
    margin-bottom: 2rem;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['accessToken', 'refreshToken']);

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, { email, password });
      const { accessToken, refreshToken } = response.data;
      // 로그인이 성공하면 토큰을 쿠키에 저장하고 메인 페이지로 이동합니다.
      setCookie('accessToken', accessToken, { maxAge: 60 * 60 }); // 1시간
      setCookie('refreshToken', refreshToken, { maxAge: 60 * 60 }); // 1시간
      navigate('/');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const API_URL = `${REDIRECT_URI}members/login`;

  return (
    <LoginWrapper>
      <form>
        <h1>로그인</h1>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>로그인</button>
      </form>
    </LoginWrapper>
  );
};

export default Login;
