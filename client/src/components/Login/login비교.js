import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { REDIRECT_URI } from '../Apiurl';
import { useAuth } from '../../context/AuthContext';



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
    margin: 2rem;
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
    padding: 0.8rem 1.2rem; /* 수정된 부분 */
    margin-top: 1rem; /* 수정된 부분 */
    border-radius: 0.5rem;
    border: none;
    background-color: #0077c2;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    margin-right: 1rem;
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
  const { setTokens } = useAuth();

  const API_URL = `${REDIRECT_URI}members/login`;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        email,
        password,
      };

      const response = await axios.post(API_URL, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const { accessToken, refreshToken } = response.data;

      if (accessToken && refreshToken) {
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
        setCookie('accessToken', accessToken, { path: '/', maxAge: 60 * 30000 });
        setCookie('refreshToken', refreshToken, { path: '/', maxAge: 60 * 30000 });
        setTokens(accessToken, refreshToken);

        alert('로그인이 성공했습니다.');
        navigate('/');
      } else {
        setError('로그인 정보가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Error in handleLogin:', error);
      if (error.response) {
        if (error.response.status === 401) {
          console.error(error.response.status);
          setError('로그인 정보가 일치하지 않습니다.');
        } else {
          setError(`서버 오류: ${error.response.data.message}`);
        }
      } else {
        setError('알 수 없는 에러가 발생했습니다.');
      }
    }
  };
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes('@')) {
      setError('올바른 이메일 형식이 아닙니다.');
    } else {
      setError(null);
    }
  };

  const handleFindId = () => {
    navigate('/findid'); // 아이디 찾기 페이지로 이동
  };
  
  const handleFindPassword = () => {
    navigate('/findpassword'); // 비밀번호 찾기 페이지로 이동
  };
  
  const handleSignup = () => {
    navigate('/signup')
  }

  return (
    <LoginWrapper>
      <form onSubmit={handleLogin}>
        <h1>로그인</h1>
        {error && <div className="error">{error}</div>}
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
        <div>
          <button onClick={handleFindId} type="button">
            아이디 찾기
          </button>
          <button onClick={handleFindPassword} type="button">
            비밀번호 찾기
          </button>
          <button onClick={handleSignup} type="button">
            회원가입 페이지로
          </button>
        </div>
        <button type="submit" disabled={!email || !password}>
          로그인
        </button>
      </form>
      {/* <div>{JSON.stringify(cookies)}</div> */}
    </LoginWrapper>
  );
};

export default Login;