import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [lessonId, setLessonId] = useState("1");
  const [totalPrice, setTotalPrice] = useState("77000");
  const [registedHeadcount, setRegisteredHeadcount] = useState("1");

  function getParamsFromUrl() {
    const searchParams = location.search;
    const obj = new URLSearchParams(searchParams);
    setLessonId(obj.get("lesson_id"));
    setTotalPrice(obj.get("price"));
    setRegisteredHeadcount(obj.get("quantity"));
    console.log(`lessonClassId: ${obj.get("lesson_id")}`);
    console.log(obj.get("price"));
    console.log(`headCount: ${obj.get("quantity")}`);
    console.log(`title: ${obj.get("item_name")}`);
    console.log(location);
    // (obj.get("item_name")) 강좌이름title
  }

  //params = {lessonId, title, 신청인원수, 총금액}

  const registerLesson = async () => {
    await axios
      .post(
        `http://43.201.167.13:8080/lesson-register`,
        {
          lessonClassId: `${new URLSearchParams(location.search).get(
            "lesson_id"
          )}`,
          headCount: `${new URLSearchParams(location.search).get("quantity")}`,
          // 신청인원 : content,
          // 총금액 : new Date(),
          // 강습일자: lessonDate,
          // 결제여부변경 - 자동?
        },
        {
          headers: {
            Authorization: `Bearer: ${Cookies.get("accessToken")}`, // 저장된 토큰 가져오기
          },
        }
      )
      .then((res) => {
        console.log("결제가 완료되었습니다.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getParamsFromUrl();
    registerLesson();
    const timer = setTimeout(() => {
      navigate("/"); // 이동할 경로
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header />
      <Space />
      <PaymentSuccessWrapper>
        <PaymentSuccessContainer>
          <div className="message">
            <h1> 😉 결제가 성공적으로 완료되었습니다. </h1>
          </div>
          <div>5초 후 메인 화면으로 이동합니다.</div>
        </PaymentSuccessContainer>
      </PaymentSuccessWrapper>
      <Space />
      <Footer />
    </>
  );
};

const PaymentSuccessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const PaymentSuccessContainer = styled.div`
  height: 200px;
  width: 70%;
  border-radius: 20px;
  border: #3fbed3 3px solid;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .message {
    text-align: center;
  }
`;

export const Space = styled.div`
  height: 300px;
`;

export default PaymentSuccess;
