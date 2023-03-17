import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Counter from "./Counter";


const ClassDetailContainer = styled.div`
    min-height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 100px;
    /* border: 1px red solid; */
    padding-top: 50px;
    padding-bottom: 50px;
`

const ClassDetailTitle = styled.div`
    width: 80%;
    height: 300px;
    padding: 20px;
    background-image: url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    margin-bottom: 20px;
    .text {
        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 30px;
    }
`

const ClassDetailBody = styled.div`
    width: 80%;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border: 3px #3FBED3 solid;
    border-radius: 20px;
`

const RegistrationDetail = styled.div`
    width: 80%;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    border: 3px #3FBED3 solid;
    border-radius: 20px;
`

const RegistrationDate = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    /* border: 1px red solid; */

    .date-text {
        min-width: fit-content;
        /* border: red 1px solid; */
    }

`

const RegistrationPersonsCounted = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    /* border: 1px red solid; */
    .count-text {
        /* width: 100px; */
        /* border: red 1px solid; */
    }

`

const RegistrationSum = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    .sum-total {
        margin-left: 220px;
    }

`

const RegistrationButton = styled.button`
    width: 80%;
    background-color: #3FBED3;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
    :hover {
        border: solid 3px #3FBED3;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }
`

const ClassDetailEditButton = styled.button`
    width: 100px;
    background-color: #3FBED3;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 40px;
    font-size: 14px;
    :hover {
        border: solid 3px #3FBED3;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }

`

const ClassDetailDeleteButton = styled.button`
    width: 100px;
    background-color: #3FBED3;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 40px;
    font-size: 14px;
    margin-left: 10px;
    :hover {
        border: solid 3px #3FBED3;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }

`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ClassDetailPage = () => {
    const [date, setDate] = useState(new Date())
    const [number, setNumber] = useState('0')
    
    return (
        <>
        <Header />
        <ClassDetailContainer>
            <ClassDetailTitle>
                <div className="text">
                    [와쎂 in Yangyang] 양양 서핑 강습 (2시간) 1회권 + 죽도 해변 요트투어 탑승 1회
                </div>
            </ClassDetailTitle>
            <ClassDetailBody>홍보내용</ClassDetailBody>
            <RegistrationDetail>
                <RegistrationDate>
                    <div className="date-text">선택 날짜</div>
                    <DatePicker selected={date} onChange={date => setDate(date)} />
                </RegistrationDate>
                <RegistrationPersonsCounted>
                    <div className="count-text">인원 수</div>
                    <Counter />
                </RegistrationPersonsCounted>
                <RegistrationSum>
                    <div className="sum-text">총 금액</div>
                    <div className="sum-total">77,000원</div>
                </RegistrationSum>
            </RegistrationDetail>
            <RegistrationButton>강좌신청 👉</RegistrationButton>
            <ButtonsContainer>
                <ClassDetailEditButton>수정</ClassDetailEditButton>
                <ClassDetailDeleteButton>삭제</ClassDetailDeleteButton>
            </ButtonsContainer>
        </ClassDetailContainer>
        <Footer />
        </>
    )
}

export default ClassDetailPage;