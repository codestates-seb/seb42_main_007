import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Counter from "./Counter";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ClassDetailContainer = styled.div`
    min-height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 80px;
    /* border: 1px red solid; */
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    .column-left {
        /* border: 1px red solid; */
        text-align: center;
        width: 180px;
    }
    .column-right {
        /* border: 1px red solid; */
        width: 180px;
    }
    .column-left > div {
        margin: 10px;
        /* border: 1px red solid; */
        height: 30px;
    }
    .column-right > div {
        margin: 10px;
        /* border: 1px red solid; */
        height: 30px;

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
    margin-top: 20px;
`

const Space = styled.div`
    height: 140px;
`
const ClassDetailPage = () => {
    const [date, setDate] = useState(new Date())
    const [number, setNumber] = useState('0')
    
    const navigate = useNavigate()

    const deleteClass = async () => {
        await axios
        .delete(`/api/board-lessons/1`)
        .then(()=>{
            navigate('/classlist')
        })
        .catch((err) => {
            console.log(err);
          });
    }

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
                <div className="column-left">
                    <div className="date-text">선택 날짜</div>
                    <div className="count-text">인원 수</div>
                    <div className="sum-text">총 금액</div>
                </div>
                <div className="column-right">
                    <div className="datepicker">
                        <DatePicker selected={date} onChange={date => setDate(date)} />
                    </div>
                    <Counter />
                    <div className="sum-total">77,000원</div>
                </div>
            </RegistrationDetail>
            <RegistrationButton><Link to="/pay">강좌신청 👉</Link></RegistrationButton>
            <ButtonsContainer>
                <ClassDetailEditButton><Link to="/editclass">수정</Link></ClassDetailEditButton>
                <ClassDetailDeleteButton onClick={deleteClass}>삭제</ClassDetailDeleteButton>
            </ButtonsContainer>
            <Space />
        </ClassDetailContainer>
        <Footer />
        </>
    )
}

export default ClassDetailPage;