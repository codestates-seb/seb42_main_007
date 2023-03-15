import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios"
import DatePicker from "react-datepicker"
import { ko } from 'date-fns/esm/locale';


const Space = styled.div`
    height: 120px;
`
const CreateClassPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const CreateClassPageContainer = styled.div`
    width: 80%;
    height: fit-content;
    border: 1px red solid;
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
            deadLine : `${endDate}`,
            headCount : "신청인원",
            createdAt : new Date(),
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
const [number, setNumber] = useState('0')
    return (
        <>
        <Header/>
        <Space />
        <CreateClassPageWrapper>
        <CreateClassPageContainer>
        <div><span>제목 </span><input placeholder="강좌명을 입력하세요."/></div>
        <div>에디터로 작성할 내용 들어가는 곳</div>
        {/* 에디터로 내용 넣기
        신청기간 datepicker or react-calendar
        신청인원 input? */}
        <div>
        모집기한 <DatePicker 
        selected={endDate} 
        onChange={(date) => setEndDate(date)} 
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        minDate={new Date()}
        />
        </div>
        <div>
            신청인원
        <input type='number'></input>
        </div>
        </CreateClassPageContainer>
        </CreateClassPageWrapper>
        <Footer/>
        </>
    )
}

export default CreateClassPage;
