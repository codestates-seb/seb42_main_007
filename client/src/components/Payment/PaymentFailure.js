import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Space } from "./PaymentSuccess";
import { useNavigate } from "react-router-dom";

const PaymentFailure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // 이동할 경로
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <Header />
      <Space />
      <PaymentFailureWrapper>
        <PaymentFailureContainer>
          <div className="message">
            <h1> 🧐 결제 요청 유효시간이 경과되었습니다. </h1>
          </div>
          <div>5초 후 메인 화면으로 이동합니다.</div>
        </PaymentFailureContainer>
      </PaymentFailureWrapper>
      <Space />
      <Footer />
    </>
  );
};
const PaymentFailureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const PaymentFailureContainer = styled.div`
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

export default PaymentFailure;
