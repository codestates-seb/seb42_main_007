import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios"
import DatePicker from "react-datepicker"

const Space = styled.div`
    height: 100px;
`

const CreateClassPage = () => {
// 새로운 강습 모집글을 작성한다.
// 제목, 내용, 신청기간, 신청인원, 최초생성일
const createLesson = async () => {
    axios.defaults.withCredentials = true;
    await axios
    .post(
        `/api/board-lessons`,
        {
            lessonTitle : "제목",
            lessonContent : "내용",
            deadLine : "신청기간",
            headCount : "신청인원",
            createdAt : "최초 생성일",
            memberId : 1
        }
    )
    .then(() => {
        History.back();
    })
    .catch((error) => {
        console.log(error)
    });
}

const [endDate, setEndDate] = useState(new Date())
    return (
        <>
        <Header/>
        <Space />
        <div><input placeholder="강좌명을 입력하세요."/></div>
        
        {/* 에디터로 내용 넣기
        신청기간 datepicker or react-calendar
        신청인원 input? */}
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
        <Footer/>
        </>
    )
}

export default CreateClassPage;
