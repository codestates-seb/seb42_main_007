import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios"
import DatePicker from "react-datepicker"
import { ko } from 'date-fns/esm/locale';
import { Editor } from "@toast-ui/react-editor";
import '@toast-ui/editor/dist/toastui-editor.css';


const EditClassPage = () => {
// 새로운 강습 모집글을 작성한다.
// 제목, 내용, 신청기간, 신청인원, 최초생성일
const EditLesson = async () => {
    // axios.defaults.withCredentials = true;
    await axios
    .patch(
        `/api/board-lessons/1`,
        {
            lessonTitle : `${title}`,
            lessonContent : `${content}`,
            deadLine : `${endDate}`,
            headCount : `${number}`,
            field : true,
            updatedAt : new Date(),
        }
    )
    .then(() => {
        History.back();
    })
    .catch((error) => {
        console.log(error)

    });
}


const [title, setTitle] = useState('기존강좌명')
const [endDate, setEndDate] = useState(new Date())
const [number, setNumber] = useState('0')
const [content, setContent] = useState('');
const [initialValue, setInitialValue] = useState('기존홍보내용');
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

// useEffect로 컴포넌트 렌더링 시에 
// const handleInitialValue = () => {
//     setInitialValue('기존 홍보내용 불러오기')
//   // boardlesson GET하여 res.data를 통해 
//   // 기존 작성 내용을 initialvalue로 지정
// }



    return (
        <>
        <Header/>
        <EditClassPageWrapper>
        <EditClassPageContainer>
            <h1>강습 모집글 수정</h1>
        <div className="element-container">
            <h2>제목</h2>
            <input 
            className="title-input" 
            value={title}
            onChange={handleTitleChange}/>
        </div>
        <div className="element-container">
        <h2>내용</h2>
            <Editor
            initialValue={initialValue}  
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
        selected={endDate} // 기존에 설정된 데드라인
        onChange={(date) => setEndDate(date)} 
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        minDate={new Date()}
        />
        </div>
        <div className="element-container">
            <h2>신청인원</h2>
        <input 
        className="input-number" 
        type='number' 
        value={number} // 기존 설정된 인원 수
        onChange={handleNumberChange}>
        </input>
        </div>
        <div className="button-container">
        <SubmitButton type="submit" onClick={EditLesson}>등록</SubmitButton>
        <CancelButton onClick={cancelClick}>취소</CancelButton>
        </div>
        </EditClassPageContainer>
        </EditClassPageWrapper>
        <Footer/>
        </>
    )
}

const EditClassPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const EditClassPageContainer = styled.div`
    width: 80%;
    min-height: 1000px;
    margin-top: 50px;
    /* border: 1px red solid; */
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


export default EditClassPage;
