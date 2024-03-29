import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "../components/Board/FindList.scss";
import { Card, Card2, Card3, Card4, Card5, Card6, Card7, Card8 } from "../components/Board";


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
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,  //브라우저가 280보다 클 때
                  spaceBetween: 0,
                },
                560: {
                  slidesPerView: 2,  //브라우저가 480보다 클 때
                  spaceBetween: 1,

                },
                940: {
                  slidesPerView: 3,  //브라우저가 768보다 클 때
                  spaceBetween: 1,
                  slidesOffsetAfter: 20,

                },
                1400: {
                  slidesPerView: 4,  //브라우저가 1400보다 클 때
                  spaceBetween: 1,
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
  margin-top: 3rem;
  justify-content: center;
  width: 100%;
  z-index: 0;

  @media screen and (min-width: 0px) {
    width: 270px;
  }
  @media screen and (min-width: 560px) {
    width: 580px;
  }

  @media screen and (min-width: 940px) {
    width: 1080px;
  }

  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;

const FindListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const FindListHeader = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FindListBody = styled.div`
  width: 100%;
  margin: 0 2rem;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
`;