import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios"
import DatePicker from "react-datepicker"
import { ko } from 'date-fns/esm/locale';
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';
import Cookies from "js-cookie";

const navigate = useNavigate;

const CreateClassPage = () => {
// 새로운 강습 모집글을 작성한다.
// 제목, 내용, 신청기간, 신청인원, 최초생성일

const createLesson = async () => {
    await axios
    .post(
        `http://43.201.167.13:8080/lesson-class`,
        {        
            title : title,
            content : content,
            registerStart : new Date(), 
            registerEnd : endDate,
            lessonDate: lessonDate, 
            headCount : number, 
            price : price
        }, 
        {
            headers: {
            Authorization: `Bearer: ${Cookies.get('accessToken')}`, // 저장된 토큰 가져오기
          }
        },
    )
    .then((res) => {
        console.log(res);
        navigate('/classlist');
    })
    .catch((error) => {
        console.log(error)

    });
}


const [title, setTitle] = useState('')
const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date())
const [lessonDate, setLessonDate] = useState(new Date())
const [number, setNumber] = useState('0')
const [content, setContent] = useState('');
const [price, setPrice] = useState('0')
const editorRef = useRef();

const handleChange = () => {
  const instance = editorRef.current.getInstance();
  const data = instance.getMarkdown();
  setContent(data);
  console.log(content)
};

const navigate = useNavigate()

const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value)
    console.log(value)
}
const handleNumberChange = (event) => {
    const numberValue = event.target.value;
    setNumber(numberValue)
    console.log(numberValue)
}
const handlePriceChange = (event) => {
    const priceValue = event.target.value;
    setPrice(priceValue)
    console.log(priceValue)
}
const cancelClick = () => {
    navigate('/classlist')
}

    return (
        <>
        <Header/>
        <CreateClassPageWrapper>
        <CreateClassPageContainer>
            <h1>매력적인 강습 모집글을 작성해보세요.</h1>
        <div className="element-container">
            <h2>제목</h2>
            <input className="title-input" placeholder="강좌명을 입력하세요." onChange={handleTitleChange}/>
        </div>
        <div className="element-container">
        <h2>내용</h2>
            <Editor
            initialValue=" "
            previewStyle="tab"
            height="400px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
            onChange={handleChange}>
            </Editor>
        </div>
        <div className="element-container">
        <h2>모집기한</h2> 
        <h3>강습 모집 시작일</h3> 
        <DatePicker 
        selected={startDate} 
        onChange={(date) => setStartDate(date)} 
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        />
        <h3>강습 모집 종료일</h3> 
        <DatePicker 
        selected={endDate} 
        onChange={(date) => setEndDate(date)} 
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        // minDate={new Date()}
        />
        <h3>강습 날짜</h3> 
        <DatePicker 
        selected={lessonDate} 
        onChange={(date) => setLessonDate(date)} 
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        // minDate={new Date()}
        />
        </div>
        <div className="element-container">
            <h2>신청인원</h2>
        <input className="input-number" type='number' min='0' placeholder="숫자만 입력하세요." onChange={handleNumberChange}></input>
        </div>
        <div className="element-container">
            <h2>강습 요금</h2>
        <input className="input-number" type='number' min='0' placeholder="숫자만 입력하세요." onChange={handlePriceChange}></input>
        </div>
        <div className="button-container">
        <SubmitButton type="submit" onClick={createLesson}>등록</SubmitButton>
        <CancelButton onClick={cancelClick}>취소</CancelButton>
        </div>
        </CreateClassPageContainer>
        </CreateClassPageWrapper>
        <Footer/>
        </>
    )
}

const CreateClassPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const CreateClassPageContainer = styled.div`
    width: 80%;
    min-height: 1000px;
    /* border: 1px red solid; */
    margin-top: 50px;
    .button-container{
        margin-top: 30px;
    }
    .title-input{
        width: 100%;
        height: 30px;
    }
    .input-number{
        height: 30px;
    }
    .element-container{
        margin-top: 25px;
        padding-bottom: 5px;
    }
    h2 {
        margin-bottom: 10px;
        font-size: 18px;
        background-color: #a7d7dc;
        padding: 3px 6px;
        display: flex;
        width: fit-content;
    }
    h3 {
        font-size: 15px;
        margin-bottom: 5px;
    }
    
`
const SubmitButton = styled.button`
    width: 90px;
    height: 35px;
    color: white;
    background-color: #3FBED3;
    text-align: center;
    border: transparent;
    border-radius: 15px;
    :hover {
        background-color: #2699ac;
        transition: 0.3s;
    }
`
const CancelButton = styled.button`
    width: 90px;
    height: 35px;
    background-color: transparent;
    color: #3FBED3;
    border: 3px solid #3FBED3;
    text-align: center;
    border: transparent;
    border-radius: 15px;
    margin-left: 10px;
    :hover {
        background-color: #a7d7dc;
        color: white;
        transition: 0.3s;
    }

`


export default CreateClassPage;
