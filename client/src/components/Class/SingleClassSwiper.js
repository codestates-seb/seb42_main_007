import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RandomImage from "react-random-image";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { imagesUrl } from "../../components/Class/RandomImage";
import "swiper/css";
import "swiper/css/virtual";

export const SingleClassSwiper = () => {
  const defaultPhotoUrl =
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

  const [classData, setClassData] = useState([]);
  const [photoUrl, setPhotoUrl] = useState(defaultPhotoUrl);

  const getLessons = async () => {
    axios
      .get(`http://43.201.167.13:8080/lesson-class/?page=1&size=10`)
      .then((res) => {
        console.log(res.data.data);
        setClassData(res.data.data);
        console.log(classData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLessons();
    handlePhotoUrl();
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
        breakpoints={{
          0: {
            slidesPerView: 1, //브라우저가 280보다 클 때
            spaceBetween: 10,
          },
          560: {
            slidesPerView: 2, //브라우저가 480보다 클 때
            spaceBetween: 10,
          },
          940: {
            slidesPerView: 3, //브라우저가 768보다 클 때
            spaceBetween: 10,
          },
        }}
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
                      <ClassReservationButton>
                        <Link to={`/class/${lessondata.lessonClassId}`}>
                          상세보기 👉
                        </Link>
                      </ClassReservationButton>
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
  min-height: 400px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0px 0px 7px 1px #cbcbcb;
  border-radius: 20px;
  margin: 5px 0px 5px 5px;
  z-index: -1;
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
  z-index: -1;
`;

const ClassTitle = styled.div`
  font-size: 17px;
  padding: 10px;
  width: 100%;
  text-align: right;
  z-index: -1;

  /* border: 1px red solid; */
`;

const ClassPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  z-index: -1;

  /* margin-top: 5px; */
  text-align: right;
  /* border: 1px red solid; */
`;

//왼쪽 오른쪽 이동하는 아이콘 2개
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
  :hover {
    transition: 0.5s;
    background-color: #319fb1;
  }
`;
