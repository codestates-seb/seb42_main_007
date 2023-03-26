import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Kakaopay from "../../images/ClassPaymentPage/Kakaopay.png"
import PaymentSuccess from "../../components/Payment/PaymentSuccess.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import { requestPayment } from "../../components/Payment/Kakaopay";

// 컨테이너 사이즈 반응형 웹으로 조정.

const ClassPaymentPage = () => {
    const { lessonId } = useParams();
    const [selectedClassData, setSelectedClassData] = useState({});
    
    useEffect(()=>{
        axios
        .get(`http://43.201.167.13:8080/lesson-class/${lessonId}`)
        .then((res)=>{
            setSelectedClassData(res.data.data)
        })
        .catch((err) => {
            console.log(err);
          });
    })

        return (
            <>
        <Header />
        <ClassPaymentWrapper>
            <ClassPaymentContainer>
                <h1>✅ 결제 전 신청하신 내용을 최종 확인하세요!</h1>
            <ClassTitle>{selectedClassData.title}</ClassTitle>
            <RegistrationDetail>
                <div className="category">
                    <div className="category-title">선택 날짜</div>
                    <div className="category-title">총 인원</div>
                    <div className="category-title">총 금액</div>
                </div>
            <div className="detail">
                <div className="detail-text">{selectedClassData.lessonDate}</div>
                <div className="detail-text">{selectedClassData.headCount}</div>
                <div className="detail-text">{selectedClassData.price}</div>
            </div>
            </RegistrationDetail>
            <PaymentButton onClick={requestPayment}>
                카카오페이로 결제
            <KakaopayIcon src={Kakaopay} />
            </PaymentButton>
            </ClassPaymentContainer>
        </ClassPaymentWrapper>
        <Footer />
        </>
        )
    }



const ClassPaymentWrapper = styled.div`
    display: flex;
    padding-top: 50px;
    /* border: 1px red solid; */
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
const ClassPaymentContainer = styled.div`
    width: 80%;
    height: fit-content;
    /* border: 1px red solid; */
    margin-bottom: 50px;
    justify-content: center;
    h1 {
        margin-bottom: 30px;
        font-size: 25px;
    }

`
const ClassTitle = styled.div`
    max-width: 100%;
    height: fit-content;
    margin-bottom: 20px;
    padding: 30px;
    border-radius: 20px;
    background-color: #B2D5DB;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
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
    :hover {
        border: #3FBED3 3px solid;
        background-color: transparent;
        transition: 0.5s;
    }
`
const KakaopayIcon = styled.img`
    width: 50px;
    margin-left: 8px;
    position: relative;
    top: 4px;
`


export default ClassPaymentPage;