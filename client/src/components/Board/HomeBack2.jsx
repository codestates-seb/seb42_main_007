import styled, { keyframes } from "styled-components";
import LandingSurfer from "../../images/Board/LandingSurfer.png";

const BREAK_POINT_MOBILE = 767;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const MainArea = styled.div`
  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;
  
  @font-face {
    font-family: 'KOTRA_BOLD-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.1/KOTRA_BOLD-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }


  div.text {
    width: 500px;
    margin: 0 auto;
    margin-top: 8rem;
    margin-right: 12rem;
    p {
      position: relative;
      z-index: 3;
      height: auto;
      color: #ffffffe8;
      font-weight: 600;
      letter-spacing: 4px;
      line-height: 1.2;
      transition: 0.2s;
    }
    // 모바일 : 0~767px :: 767px 이하로 적용되는 css
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      p {
        right: 50px;
        font-size: 30px;
        line-height: 1.2;
        transition: 0.2s;
      }
    }
    // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      p {
        top: 10%;
        right: 40px;
        font-size: 40px;
        line-height: 1.2;
        transition: 0.2s;
      }
    }
    // PC : 1200px 이상 :: 1200px 이상 적용되는 css
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      p {
        padding-top: 50px;
        right: 0px;
        font-size: 60px;
        transition: 0.2s;
        line-height: 20%;
      }
    }
  }
`;
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`;
const LeftImage = styled.img`
  position: absolute;
  top: 0;
  left: -100%;
  height: 100vh;
  animation: ${slideIn} 0.5s forwards;
  animation-delay: 1s;
  z-index: 5;
`;



const MainText = styled.p`
  position: relative;
  z-index: 3;
  height: auto;
  color: #ffffffe8;
  font-weight: 600;
  letter-spacing: 4px;
  text-shadow: 2px 4px 2px gray;
  line-height: 1.2;
  transition: 0.2s;
  font-family: 'KOTRA_BOLD-Bold';
  text-align: right;
  
  
  // 모바일 : 0~767px :: 767px 이하로 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    right: 50px;
    font-size: 30px;
    line-height: 1.2;
    transition: 0.2s;
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    top: 10%;
    right: 40px;
    font-size: 40px;
    line-height: 1.2;
    transition: 0.2s;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    padding-top: 50px;
    right: 70px;
    font-size: 60px;
    transition: 0.2s;
    line-height: 20%;
  }
`;

const SubText = styled.div`
position: relative;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.85;
  margin-top: 1rem;
  font-family: 'Pretendard-Regular';
  text-align: right;
  margin-right: 3.5rem;

  // 모바일 : 0~767px :: 767px 이하로 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 12px;
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    font-size: 14px;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    font-size: 16px;
    margin-right: 0.5rem;
  }
`;


const HomeBack2 = () => {
  return (
    <>
      <MainArea>
        <div className="text">
          <MainText>서핑을 즐기는</MainText>
          <MainText>모든 방법</MainText>
          <div>
            <SubText>오늘 서핑하기 좋은 날씨인지</SubText>
            <SubText>서핑 할 해변들의 정보와</SubText>
            <SubText>서퍼들과의 이야기</SubText>
          </div>
        </div>
        <LeftImage src={LandingSurfer} alt="서퍼" />
      </MainArea>
    </>
  );
};


export default HomeBack2;
