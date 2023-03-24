import styled from "styled-components";

const BREAK_POINT_MOBILE = 767;
const BREAK_POINT_TABLET = 768;
const BREAK_POINT_PC = 1200;

const BackgroundVideo = styled.div`
  background: #eee;
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
  font-family: "NanumBarunGothic";
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  list-style: none;
  text-decoration: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  height: 100%;
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    height: 100%;
    overflow: scroll;
  }

  > iframe { 
  object-fit: cover;
  box-sizing: border-box;
    height: 56.25vw;
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    width: 177.77777778vh;
    z-index:1;
    }
`;

const MainArea = styled.div`
  max-height: 864px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 128px 0px 0 0px;

  div.text {
    width: 1200px;
    margin: 0 auto;
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

const HomeBack = () => {
  return (
    <>
      <BackgroundVideo>
      <iframe
      title="랜딩페이지 배경"
      src="https://player.vimeo.com/video/538877060?mute=1&loop=1&autoplay=1&controls=0&modestbranding=1&amp;playlist=-fDsOcaR1sQ&loop=1&vq=hd1080" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
        <MainArea>
          <div className="text">
            <p>Surfing</p>
            <p>With</p>
            <p>Was'surf</p>
          </div>
        </MainArea>
      </BackgroundVideo>
    </>
  );
};

export default HomeBack;
