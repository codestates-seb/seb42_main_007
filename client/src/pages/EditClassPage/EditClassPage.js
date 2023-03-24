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
const [title, setTitle] = useState('기존강좌명')
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [lessonDate, setLessonDate] = useState(new Date());
const [number, setNumber] = useState('0');
const [content, setContent] = useState('');
const [initialValue, setInitialValue] = useState("");
const [originalData, setOriginalData] = useState({});
const [price, setPrice] = useState('0');
const editorRef = useRef();
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZ2RAZ21haWwuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY3OTQ5OTcwN30.Knm8U82RHwU4qv0kVvBYkfejb-QgizeI_-sOCLkSLQE';

useEffect(() => {
    axios
      .get(`http://43.201.167.13:8080/lesson-class/1`,   // 수정할 클래스 아이디     
      {
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
      .then((res) => {
        setOriginalData(res.data);
        setInitialValue(originalData.content);
        setTitle(originalData.title);
        setStartDate(originalData.registerStart);
        setEndDate(originalData.registerEnd);
        setLessonDate(originalData.lessonDate);
        setNumber(originalData.headCount);
        setPrice(originalData.price);
      });
  }, []);


const EditLesson = async () => {
    await axios
    .patch(
        `http://43.201.167.13:8080/board-lessons/${originalData.lessonClassId}`,
        {
            title : `${title}`,
            content : `${content}`,
            registerStart : new Date(),
            registerEnd : `${endDate}`,
            headCount : `${number}`,
            price : `${price}`,
        },
    //   {
    //     "memberId": "1",
    //     "lessonClassId": 1,
    //     "title": "강습 클래스 제목",
    //     "content": "강습 클래스 내용",
    //     "registerStart": "2023-03-18T12:20:00",
    //     "registerEnd": "2023-03-20T23:30:00",
    //     "lessonDate": "2023-03-31",
    //     "headCount": 40,
    //     "price": 75000,
    //     "lessonStatus": "현재 강습을 신청할 수 있습니다.",
    //     "lessonRegisters": []
    //   },
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
        }
    )
    .then(() => {
        // History.back();
        window.location.replace(`/board-lessons/${originalData.lessonClassId}`);

    })
    .catch((error) => {
        console.log(error)

    });
}

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
const handlePriceChange = (event) => {
    const priceValue = event.target.value;
    setPrice(priceValue)
    console.log(priceValue)
}

const cancelClick = () => {
    navigate('/classlist')
    //해당 강습모집글 페이지로 다시 이동하도록 변경 
    // or History.back(), navigate(-1) ?
}

// // useEffect로 컴포넌트 렌더링 시에 
// const handleInitialValue = (originalData) => {
//     setInitialValue(originalData.content)
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
                <input 
                className="input-number" 
                type='number' 
                value={number} // 기존 설정된 인원 수
                onChange={handleNumberChange}>
                </input>
                <h2>강습 요금</h2>
                <input 
                className="input-price" 
                type='number' 
                min='0' 
                value={price}
                placeholder="숫자만 입력하세요." 
                onChange={handlePriceChange}>
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
    .input-number, .input-price{
        height: 30px;
        margin-bottom: 25px;
    }
    .element-container{
        margin-top: 25px;
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


export default EditClassPage;
