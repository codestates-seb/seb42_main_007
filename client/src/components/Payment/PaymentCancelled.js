import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PaymentCancelledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const PaymentCancelledContainer = styled.div`
  height: 200px;
  width: 70%;
  border-radius: 20px;
  border: #3fbed3 3px solid;
  justify-content: center;
  align-items: center;
  display: flex;
  .message {
    text-align: center;
  }
`;

const PaymentCancelled = () => {
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
      <PaymentCancelledWrapper>
        <PaymentCancelledContainer>
          <div className="message">
            <h1> 😌 결제 요청이 취소되었습니다. </h1>
          </div>
          <div>5초 후 메인화면으로 이동합니다.</div>
        </PaymentCancelledContainer>
      </PaymentCancelledWrapper>
    </>
  );
};

export default PaymentCancelled;
