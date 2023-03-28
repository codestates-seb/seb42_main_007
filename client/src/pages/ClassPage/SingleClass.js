import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import RandomImage from "react-random-image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesUrl } from "../../components/Class/RandomImage";


const SingleClass = () => {
  const defaultPhotoUrl =
    "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

  const [classData, setClassData] = useState([]);
  const [photoUrl, setPhotoUrl] = useState(defaultPhotoUrl);


  const getLessons = async () => {
    axios
      .get(`http://43.201.167.13:8080/lesson-class/?page=1&size=10`)
      .then((res) => {
        // console.log(res.data.data)
        setClassData(res.data.data);
        setPhotoUrl(imagesUrl[Math.floor(Math.random()*100)])
        console.log(classData)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <>
      {classData &&
        classData.map((lessondata) => {
          return (
            <SwiperSlide key={lessondata.lessonClassId}>
                <div className="lesson-data">
              <SingleClassContainer>
                <ClassThumbnail photoUrl={`${photoUrl}`} />
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
    background-image: url(${props => props.photoUrl});
    background-size: cover;
    background-position: center;

`;

const ClassTitle = styled.div`
  font-size: 17px;
  padding: 10px;
  width: 100%;
  text-align: right;
  /* border: 1px red solid; */
`;

const ClassPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
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

export default SingleClass;
