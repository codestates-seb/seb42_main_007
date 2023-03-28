import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
    const { params } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)
    console.log({params})
    console.log(useParams())
    //params = {lessonId, title, 신청인원수, 총금액}

    const registerLesson = async () => {
        await axios
        .post(
            `http://43.201.167.13:8080/lesson-register`,
            {
                lessonClassId : params[0],
                // 신청인원 : content,
                // 총금액 : new Date(), 
                // 강습일자: lessonDate, 
            }, 
        )
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error)
    
        });
    }

    useEffect(() => {
        registerLesson();
        const timer = setTimeout(() => {
            navigate('/') // 이동할 경로
        }, 5000)

        return () => {
            clearTimeout(timer);
        };
    }, [navigate])

    //post로 클래스-레지스터
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
    )
}

const PaymentSuccessWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const PaymentSuccessContainer = styled.div`
    height: 200px;
    width: 70%;
    border-radius: 20px;
    border: #3FBED3 3px solid;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    .message {
        text-align: center;
    }
`

export const Space = styled.div`
    height: 300px;
`


export default PaymentSuccess;