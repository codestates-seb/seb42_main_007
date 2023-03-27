import styled from "styled-components";

const BREAK_POINT_MOBILE = 767;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const MainArea = styled.div`
  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

  div.text {
    width: 1200px;
    margin: 0 auto;
    margin-top: 8rem;
    p {
      position: relative;
      z-index: 3;
      height: auto;
      color: #ffffffe8;
      font-weight: 600;
      letter-spacing: 4px;
      text-shadow: 2px 4px 2px gray;
      line-height: 1.2;
      transition: 0.2s;
    }
    // 모바일 : 0~767px :: 767px 이하로 적용되는 css
    @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
      p {
        left: 50px;
        font-size: 30px;
        line-height: 1.2;
        transition: 0.2s;
      }
    }
    // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      p {
        top: 10%;
        left: 40px;
        font-size: 40px;
        line-height: 1.2;
        transition: 0.2s;
      }
    }
    // PC : 1200px 이상 :: 1200px 이상 적용되는 css
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      p {
        padding-top: 50px;
        left: 70px;
        font-size: 60px;
        transition: 0.2s;
        line-height: 20%;
      }
    }
  }
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

  // 모바일 : 0~767px :: 767px 이하로 적용되는 css
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    left: 50px;
    font-size: 30px;
    line-height: 1.2;
    transition: 0.2s;
  }
  // 태블릿 : 1200px ~ 768px :: 768px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    top: 10%;
    left: 40px;
    font-size: 40px;
    line-height: 1.2;
    transition: 0.2s;
  }
  // PC : 1200px 이상 :: 1200px 이상 적용되는 css
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    padding-top: 50px;
    left: 70px;
    font-size: 60px;
    transition: 0.2s;
    line-height: 20%;
  }
`;

const HomeBack2 = () => {
    return (
      <>
          <MainArea>
            <div className="text">
              <MainText>서핑 어디서 하지?</MainText>
              <MainText>With</MainText>
              <MainText>Was'surf</MainText>
            </div>
          </MainArea>
      </>
    );
  };
  
  export default HomeBack2;
  