import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "../components/Board/FindList.scss";

import { Card } from "../components/Board/Card/Card";
import { Card2 } from "../components/Board/Card/Card2";
import { Card3 } from "../components/Board/Card/Card3";
import { Card4 } from "../components/Board/Card/Card4";
import { Card5 } from "../components/Board/Card/Card5";
import { Card6 } from "../components/Board/Card/Card6";
import { Card7 } from "../components/Board/Card/Card7";
import { Card8 } from "../components/Board/Card/Card8";

SwiperCore.use([Autoplay]);

const Find = () => {
  return (
    <>
      <Header />
      <Main>
        <FindListWrapper>
          <FindListHeader>서핑장소 찾기</FindListHeader>
          <FindListBody>
            <StyledSwiper
              slidesPerView={1}
              spaceBetween={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                360: {
                  slidesPerView: 2,  //브라우저가 360보다 클 때
                  spaceBetween: 1,
                },
                768: {
                  slidesPerView: 3,  //브라우저가 768보다 클 때
                  spaceBetween: 1,
                },
                1400: {
                  slidesPerView: 4,  //브라우저가 1400보다 클 때
                  spaceBetween: 2,
                }
              }}
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card2 />
              </SwiperSlide>
              <SwiperSlide>
                <Card3 />
              </SwiperSlide>
              <SwiperSlide>
                <Card4 />
              </SwiperSlide>
              <SwiperSlide>
                <Card5 />
              </SwiperSlide>
              <SwiperSlide>
                <Card6 />
              </SwiperSlide>
              <SwiperSlide>
                <Card7 />
              </SwiperSlide>
              <SwiperSlide>
                <Card8 />
              </SwiperSlide>
            </StyledSwiper>
          </FindListBody>
          <div className="FindList-footer"></div>
        </FindListWrapper>
      </Main>
      <Footer />
    </>
  );
};

export default Find;

const Main = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 4rem;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;


const FindListWrapper = styled.div`
  display: flex;
  /* overflow-x: hidden; */
  align-items: center;
  flex-direction: column;
  width: 100%;

  /* @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1400px) {
    width: 1400px;
  } */
`;

const FindListHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FindListBody = styled.div`
  width: 100%;
  margin: 0 2rem 0 2rem;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
`;
