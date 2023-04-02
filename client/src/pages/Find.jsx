import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/swiper-bundle.css";
import "../components/Board/FindList.scss";
import { Card, Card2, Card3, Card4, Card5, Card6, Card7, Card8 } from "../components/Board";
import GradeButton from "../components/Board/GradeButton";

SwiperCore.use([Autoplay]);

const Find = () => {
  const [viewCount, setViewCount] = useState(0);
  const [surfSpots, setSurfSpots] = useState([]);

  useEffect(() => {
    axios
      .get("http://43.201.167.13:8080/surf-spots?status=recommend&page=1&size=10")
      .then((res) => {
        setSurfSpots(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch surf spots:", err);
      });
  }, []);
  
  
  const [spotGrade, setSpotGrade] = useState([
    { name: 'A', grade: 3 },
    { name: 'B', grade: 5 },
    { name: 'C', grade: 1 },
    { name: 'D', grade: 4 },
    { name: 'E', grade: 2 },
    { name: 'F', grade: 3 },
    { name: 'G', grade: 2 },
    { name: 'H', grade: 1 },
  ]);
  


  // const renderSpots = () => {
  //   return spotGrade.map((spot) => {
  //     switch (spot.name) {
  //       case 'A':
  //         return <SwiperSlide key={spot.name}><Card waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'B':
  //         return <SwiperSlide key={spot.name}><Card2 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'C':
  //         return <SwiperSlide key={spot.name}><Card3 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'D':
  //         return <SwiperSlide key={spot.name}><Card4 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'E':
  //         return <SwiperSlide key={spot.name}><Card5 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'F':
  //         return <SwiperSlide key={spot.name}><Card6 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'G':
  //         return <SwiperSlide key={spot.name}><Card7 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       case 'H':
  //         return <SwiperSlide key={spot.name}><Card8 waveHeight={spot.grade} {...viewCount} /></SwiperSlide>;
  //       default:
  //         return null;
  //     }
  //   });
  // };
  const renderSpots = () => {
    return surfSpots.map((spot) => {
      const key = `Card${spot.surfSpotId}`;
      const CardComponent = {
        Card1: Card,
        Card2: Card2,
        Card3: Card3,
        Card4: Card4,
        Card5: Card5,
        Card6: Card6,
        Card7: Card7,
        Card8: Card8,
      }[key];
  
      if (CardComponent) {
        return (
          <SwiperSlide key={spot.surfSpotId}>
            <CardComponent
              waveHeight={spot.totalScore}
              viewCount={spot.viewCount}
            />
          </SwiperSlide>
        );
      }
  
      return null;
    });
  };
  


  return (
    <>
      <Header />
      <Main>
        <FindListWrapper>
          <FindListHeader>서핑장소 찾기</FindListHeader>
          <div>날씨에 따라 자동으로 서핑하기 좋은 추천순으로 표시</div>
          {/* <GradeButtonWrapper><GradeButton spotGrade={spotGrade} setSpotGrade={setSpotGrade} /></GradeButtonWrapper> */}
          {/* {spotGrade.map((spot) => (
          <li key={spot.name}>
            {spot.name} - {spot.grade}
          </li>
        ))} */}
          <FindListBody>
            <StyledSwiper
              // loop={true}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1, 
                  spaceBetween: 0,
                },
                560: {
                  slidesPerView: 2,
                  spaceBetween: 1,

                },
                940: {
                  slidesPerView: 3, 
                  spaceBetween: 1,
                  slidesOffsetAfter: 20,

                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 1,
                }
              }}
            >
              {renderSpots()}
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
  padding-bottom: 3rem;

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
const GradeButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: 2rem;
`
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