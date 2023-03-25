import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { REDIRECT_URI } from '../Apiurl';

const FindIdWrapper = styled.div`
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

const FindId = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
  
    const handleFindIdSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(API_URL, { email });
        const { username } = response.data;
        setMessage(`회원님의 아이디는 ${username} 입니다.`);
      } catch (error) {
        setMessage('해당 이메일로 가입된 아이디를 찾을 수 없습니다.');
      }
    };
  
    const API_URL = `${REDIRECT_URI}members/{member-id}`;

    return (
        <FindIdWrapper>
          <form onSubmit={handleFindIdSubmit}>
            <h1>아이디 찾기</h1>
            <div>
              <label htmlFor="email">이메일:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" disabled={!email}>
              아이디 찾기
            </button>
          </form>
        </FindIdWrapper>
      );
    };
    
    export default FindId;