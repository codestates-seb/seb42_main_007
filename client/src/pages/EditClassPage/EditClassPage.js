import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const EditClassPage = () => {
  // 새로운 강습 모집글을 작성한다.
  // 제목, 내용, 신청기간, 신청인원, 최초생성일
  const [title, setTitle] = useState("기존강좌명");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [lessonDate, setLessonDate] = useState(new Date());
  const [number, setNumber] = useState("0");
  const [content, setContent] = useState("");
  const [initialValue, setInitialValue] = useState("기존강좌내용");
  const [originalData, setOriginalData] = useState({});
  const [price, setPrice] = useState("0");
  const [registedNumber, setRegisteredNumber] = useState("0");
  const editorRef = useRef();
  const { lessonId } = useParams(); // /class/{lessonId}
  const navigate = useNavigate();

  const getPrevLesson = async () => {
    await axios
      .get(
        `http://43.201.167.13:8080/lesson-class/${lessonId}` // 수정할 클래스 아이디
      )
      .then((res) => {
        setOriginalData(res.data.data);
        console.log(res.data.data);
        setInitialValue(res.data.data.content);
        setTitle(originalData.title);
        setStartDate(originalData.registerStart);
        setEndDate(originalData.registerEnd);
        setLessonDate(originalData.lessonDate);
        setNumber(originalData.headCount);
        setPrice(originalData.price);
        setRegisteredNumber(originalData.currentHeadCount);
      });
  };

  useEffect(() => {
    getPrevLesson();
  }, []);

  const patchLesson = async () => {
    await axios
      .patch(`http://43.201.167.13:8080/lesson-class/${lessonId}`, {
        title: title,
        content: content,
        registerStart: startDate,
        registerEnd: endDate,
        lessonDate: lessonDate,
        headCount: number,
        price: price,
      })
      .then(() => {
        // History.back();
        window.location.replace(`/class/${lessonId}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = () => {
    const instance = editorRef.current.getInstance();
    const data = instance.getMarkdown();
    setContent(data);
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleNumberChange = (event) => {
    const numberValue = event.target.value;
    if (numberValue > registedNumber) {
      alert(
        `이미 강습을 신청한 인원 수보다 더 적게 설정하실 수 없습니다. 최소 ${registedNumber}명 이상으로 설정해 주세요.`
      );
      setNumber(registedNumber);
    } else {
      setNumber(numberValue);
    }
  };
  const handlePriceChange = (event) => {
    const priceValue = event.target.value;
    setPrice(priceValue);
    console.log(priceValue);
  };

  const cancelClick = () => {
    navigate("/classlist");
  };
  const handleStartDateChange = (event) => {
    if (event.getTime() > endDate) {
      alert("강습 모집 시작 날짜는 마감 날짜보다 늦게 설정할 수 없습니다.");
      setStartDate(new Date());
    } else {
      setStartDate(event);
    }
  };
  const handleEndDateChange = (event) => {
    if (event.getTime() < startDate) {
      alert("강습 모집 마감 날짜는 시작 날짜보다 늦게 설정할 수 없습니다.");
      setEndDate(new Date());
    } else if (event.getTime() > lessonDate) {
      alert("강습 모집 마감 날짜는 강습 날짜보다 늦게 설정할 수 없습니다.");
      setEndDate(new Date());
    } else {
      setEndDate(event);
    }
  };
  const handleLessonDateChange = (event) => {
    if (event.getTime() < endDate) {
      alert("강습 날짜는 강습 모집 마감 날짜보다 이르게 설정할 수 없습니다.");
      setLessonDate(new Date());
    } else {
      setLessonDate(event);
    }
  };

  return (
    <>
      <Header />
      <EditClassPageWrapper>
        <EditClassPageContainer>
          <h1>강습 모집글 수정</h1>
          <div className="element-container">
            <h2>제목</h2>
            {originalData && (
              <input
                className="title-input"
                value={originalData.title}
                onChange={handleTitleChange}
              />
            )}
          </div>
          <div className="element-container">
            <h2>내용</h2>
            {originalData && (
              <Editor
                ref={editorRef}
                initialValue={initialValue}
                previewStyle="tab"
                height="400px"
                initialEditType="markdown"
                useCommandShortcut={true}
                onChange={handleChange}
              ></Editor>
            )}
          </div>
          <div className="element-container">
            <h2>모집기한</h2>
            <h3>강습 모집 시작일</h3>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
            />
            <h3>강습 모집 종료일</h3>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              // minDate={new Date()}
            />
            <h3>강습 날짜</h3>
            <DatePicker
              selected={lessonDate}
              onChange={handleLessonDateChange}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
              // minDate={new Date()}
            />
          </div>
          <div className="element-container">
            <h2>신청인원</h2>
            <input
              className="input-number"
              type="number"
              value={number} // 기존 설정된 인원 수
              onChange={handleNumberChange}
            ></input>
            <h2>강습 요금</h2>
            <input
              className="input-price"
              type="number"
              min="0"
              value={price}
              placeholder="숫자만 입력하세요."
              onChange={handlePriceChange}
            ></input>
          </div>
          <div className="button-container">
            <SubmitButton type="submit" onClick={patchLesson}>
              등록
            </SubmitButton>
            <CancelButton onClick={cancelClick}>취소</CancelButton>
          </div>
        </EditClassPageContainer>
      </EditClassPageWrapper>
      <Footer />
    </>
  );
};

const EditClassPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditClassPageContainer = styled.div`
  width: 80%;
  min-height: 1000px;
  margin-top: 50px;
  /* border: 1px red solid; */
  .button-container {
    margin-top: 30px;
  }
  .title-input {
    width: 100%;
    height: 30px;
  }
  .input-number,
  .input-price {
    height: 30px;
    margin-bottom: 25px;
  }
  .element-container {
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
`;
const SubmitButton = styled.button`
  width: 90px;
  height: 35px;
  color: white;
  background-color: #3fbed3;
  text-align: center;
  border: transparent;
  border-radius: 15px;
  :hover {
    background-color: #2699ac;
    transition: 0.3s;
  }
`;
const CancelButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: transparent;
  color: #3fbed3;
  border: 3px solid #3fbed3;
  text-align: center;
  border: transparent;
  border-radius: 15px;
  margin-left: 10px;
  :hover {
    background-color: #a7d7dc;
    color: white;
    transition: 0.3s;
  }
`;
export default EditClassPage;
