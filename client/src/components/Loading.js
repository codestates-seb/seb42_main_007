import React from 'react';
import styled from 'styled-components';
import Spinner from '../../images/LoadingIndicator.gif'

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`

export const Loading = () => {
  return (
    <Background>
        <img src={Spinner} alt="로딩중" width='5%'></img>
        <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </Background>
  )  
};

export default Loading;