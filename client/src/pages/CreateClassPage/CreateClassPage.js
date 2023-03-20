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
    min-height: 1000px;
    /* border: 1px red solid; */
    .button-container{
        margin-top: 30px;
    }
    .title-input, .input-number{
        width: 100%;
        height: 30px;
    }
    .element-container{
        margin-top: 25px;
    }
    h2 {
        margin-bottom: 10px;
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

const CreateClassPage = () => {
// 새로운 강습 모집글을 작성한다.
// 제목, 내용, 신청기간, 신청인원, 최초생성일
const createLesson = async () => {
    // axios.defaults.withCredentials = true;
    await axios
    .post(
        `/api/board-lessons`,
        {
            lessonTitle : `${title}`,
            lessonContent : `${content}`,
            deadLine : `${endDate}`,
            headCount : `${number}`,
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


const [title, setTitle] = useState('')
const [endDate, setEndDate] = useState(new Date())
const [number, setNumber] = useState('0')
const [content, setContent] = useState('');
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
    console.log(number)
}
const cancelClick = () => {
    navigate('/classlist')
}

    return (
        <>
        <Header/>
        <Space />
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
        <DatePicker 
        selected={endDate} 
        onChange={(date) => setEndDate(date)} 
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        minDate={new Date()}
        />
        </div>
        <div className="element-container">
            <h2>신청인원</h2>
        <input className="input-number" type='number' placeholder="숫자만 입력하세요." onChange={handleNumberChange}></input>
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

export default CreateClassPage;
