import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Kakaopay from "../../images/ClassPaymentPage/Kakaopay.png"
import PaymentSuccess from "./PaymentSuccess";

const ClassPaymentWrapper = styled.div`
    display: flex;
    position: relative;
    top: 100px;
    /* border: 1px red solid; */
    justify-content: center;
    align-items: center;
    height: 100%;
`
const ClassPaymentContainer = styled.div`
    width: 70%;
    height: fit-content;
    /* border: 1px red solid; */
    margin-top: 50px;
    margin-bottom: 20px;
    justify-content: center;

    h1 {
        margin-bottom: 30px;
        font-size: 25px;
    }

`
const ClassTitle = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    padding: 30px;
    border-radius: 20px;
    background-color: #B2D5DB;
    font-size: 20px;
    font-weight: bold;
`
const RegistrationDetail = styled.div`
    padding: 30px;
    border-radius: 20px;
    background-color: #B2D5DB;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .detail {
        text-align: left;
        margin-left: 60px;
    }
    .detail-text {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .category {
        text-align: right;
        margin-left: 20px;
        font-weight: bold;
    }
    .category-title {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`
const SelectedDate = styled.div`
`
const PersonsCounted = styled.div`
`
const Total = styled.div`
`
const PaymentButton = styled.button`
    text-align: center;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    background-color: #B2D5DB;
    border: transparent;
    font-size: 17px;
    margin-bottom: 30px;
    :hover {
        border: #3FBED3 3px solid;
        background-color: transparent;
    }
`
const KakaopayIcon = styled.img`
    width: 50px;
    margin-left: 8px;
    position: relative;
    top: 4px;
`

const ClassPaymentPage = () => {
    
    return (
        <>
        <Header />
        <ClassPaymentWrapper>
            <ClassPaymentContainer>
                <h1>✅ 결제 전 신청하신 내용을 최종 확인하세요!</h1>
            <ClassTitle>
            [와쎂 in Yangyang] 양양 서핑 강습 (2시간) 1회권 + 죽도 해변 요트투어 탑승 1회
            </ClassTitle>
            <RegistrationDetail>
                <div className="category">
                    <div className="category-title">선택 날짜</div>
                    <div className="category-title">총 인원</div>
                    <div className="category-title">총 금액</div>
                </div>
            <div className="detail">
                <div className="detail-text"> 2023년 7월 15일</div>
                <div className="detail-text"> 2</div>
                <div className="detail-text"> 154,000원</div>
            </div>
            </RegistrationDetail>
            <PaymentButton>
                카카오페이로 결제
            <KakaopayIcon src={Kakaopay} />
            </PaymentButton>
            </ClassPaymentContainer>
        </ClassPaymentWrapper>
        <Footer />
        </>
    )
}

export default ClassPaymentPage;