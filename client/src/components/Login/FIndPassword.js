import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { REDIRECT_URI } from '../Apiurl';

const FindPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;

  form {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 2rem;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  button {
    display: inline-block;
    background-color: #007bff;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const API_URL = `${REDIRECT_URI}members/1`;

const FindPassword = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');


  const handleFindPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        email,
        username,
      });

      if (response.status === 200) {
        alert('비밀번호 찾기 이메일이 발송되었습니다.');
      } else {
        alert('비밀번호 찾기 요청에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error(error);
      alert('비밀번호 찾기 요청에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <FindPasswordWrapper>
      <form onSubmit={handleFindPasswordSubmit}>
        <h1>비밀번호 찾기</h1>
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
          <label htmlFor="username">닉네임:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!email || !username}>
          비밀번호 찾기
        </button>
      </form>
    </FindPasswordWrapper>
  );
};

export default FindPassword;