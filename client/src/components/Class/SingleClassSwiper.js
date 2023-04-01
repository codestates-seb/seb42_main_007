import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { imagesUrl } from "../../components/Class/RandomImage";
import "swiper/css";
import "swiper/css/virtual";
import AlmostSoldout from "../../images/AlmostSoldout.png";
import Soldout from "../../images/Soldout.png";

export const SingleClassSwiper = () => {
  const defaultPhotoUrl =
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

  const [classData, setClassData] = useState([]);
  const [photoUrl, setPhotoUrl] = useState(defaultPhotoUrl);
  const [isAboutToSoldout, setIsAboutToSoldout] = useState(false);
  const [isSoldout, setIsSoldout] = useState(false);

  const getLessons = async () => {
    axios
      .get(`http://43.201.167.13:8080/lesson-class/?page=1&size=10`)
      .then((res) => {
        // console.log(res.data.data);
        setClassData(res.data.data);
        // console.log(classData);
        if (
          classData.currentHeadCount - classData.headCount ===
          0
          //   || classData.lessonDate.getTime() < new Date().getTime()
        ) {
          setIsSoldout(true);
          // 현재 수강신청된 인원수 === 수강신청 정원 -> 마감
          // 수강날짜가 현재시간보다 빠른(이미 지나간) 경우 마감
        }
        if (
          classData.headCount - classData.currentHeadCount <=
          3
          //||classData.lessonDate.getTime() === new Date().getTime()
        ) {
          setIsAboutToSoldout(true);
          //수강신청 정원 - 현재 수강신청된 인원수 <= 3  -> 마감임박
          //수강 날짜가 현재날짜와 같은 경우 마감임박
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLessons();
    handlePhotoUrl();
    console.log(classData);
  }, []);

  const handlePhotoUrl = (lessonClassId) => {
    return imagesUrl[lessonClassId] ?? defaultPhotoUrl;
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        modules={[Navigation, Pagination]}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1, //브라우저가 280보다 클 때
        //     spaceBetween: 0,
        //   },
        //   560: {
        //     slidesPerView: 2, //브라우저가 480보다 클 때
        //     spaceBetween: 0,
        //   },
        //   940: {
        //     slidesPerView: 3, //브라우저가 768보다 클 때
        //     spaceBetween: 0,
        //   },
        // }}
        className="classlistswiper"
      >
        <div className="container">
          {classData &&
            classData.map((lessondata) => {
              const photoUrl = handlePhotoUrl(lessondata.lessonClassId);
              return (
                <SwiperSlide key={lessondata.lessonClassId}>
                  <div className="lesson-data">
                    <SingleClassContainer>
                      <ClassThumbnail photoUrl={photoUrl} />
                      <ClassTitle>{lessondata.title}</ClassTitle>
                      <ClassPrice>{`${lessondata.price}원`}</ClassPrice>
                      <div className="buttons">
                        {isAboutToSoldout ? (
                          <AlmostSoldoutIcon src={AlmostSoldout} />
                        ) : (
                          <div />
                        )}
                        {isSoldout ? <SoldoutIcon src={Soldout} /> : <div />}
                        <ClassReservationButton>
                          <Link to={`/class/${lessondata.lessonClassId}`}>
                            상세보기 👉
                          </Link>
                        </ClassReservationButton>
                      </div>
                    </SingleClassContainer>
                  </div>
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
      {/* <div className="lesson-data" key='1' > 
                <SingleClassContainer>
                <ClassThumbnail src={photoUrl}/>
                <ClassTitle>{data[0] ? data[0].title : '클래스제목'}</ClassTitle>
                <ClassPrice>{data[0] ? `${data[0].price}원` : '77000원'}</ClassPrice>
                <ClassReservationButton><Link to={'/class/1'}>상세보기 👉</Link></ClassReservationButton>
                </SingleClassContainer>
                </div> */}
    </>
  );
};

const SingleClassContainer = styled.div`
  /* border: solid red 1px; */
  min-height: 450px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0px 0px 7px 1px #cbcbcb;
  border-radius: 20px;
  margin: 5px 0px 5px 5px;
  .copyright {
    font-size: 5px;
    color: #d4d2d1;
    margin-right: 3px;
  }
`;

const ClassThumbnail = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${(props) => props.photoUrl});
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 00px 0px;
`;

const ClassTitle = styled.div`
  font-size: 17px;
  padding: 13px;
  width: fit-content;
  min-height: 70px;
  text-align: right;

  /* border: 1px red solid; */
`;

const ClassPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  position: absolute;
  bottom: 80px;
  right: 13px;
  /* margin-top: 5px; */
  text-align: right;
  /* border: 1px red solid; */
`;

const AlmostSoldoutIcon = styled.img`
  width: 75px;
  margin-bottom: -6px;
  margin-right: 55px;
`;

const SoldoutIcon = styled.img`
  width: 75px;
  margin-bottom: -6px;
  margin-right: 55px;
`;

const ClassReservationButton = styled.button`
  width: 90px;
  height: 35px;
  color: white;
  background-color: #3fbed3;
  text-align: center;
  border: transparent;
  border-radius: 15px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  font-family: "NanumSquareNeo-Variable";
  position: absolute;
  bottom: 15px;
  right: 10px;
  :hover {
    transition: 0.5s;
    background-color: #319fb1;
  }
`;
