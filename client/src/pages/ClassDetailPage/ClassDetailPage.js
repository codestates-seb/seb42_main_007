import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const ClassDetailPage = () => {
    const [date, setDate] = useState(new Date())
    const [number, setNumber] = useState('0')
    const [classData, setClassData] = useState({})

    const { lessonId } = useParams(); // /class/{lessonId}
    const navigate = useNavigate()

    const handleNumberChange = (event) => {
        setNumber(event.target.value)
        console.log(number)
    }
    useEffect(()=>{
        axios
        .get(`http://43.201.167.13:8080/lesson-class/${lessonId}`)
        .then((res)=>{
            setClassData(res.data.data)
            setDate(res.data.lessonDate)
        })
        .catch((err) => {
            console.log(err);
          });
    })

    const deleteClass = async () => {
        await axios
        .delete(`http://43.201.167.13:8080/lesson-class/${lessonId}`)
        //1 -> LessonId
        .then(()=>{
            alert('강습 모집글이 삭제되었습니다.');
            navigate('/classlist');
        })
        .catch((err) => {
            console.log(err);
          });
    }
    // "data": {
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
    //   }

    return (
        <>
        <Header />
        <ClassDetailWrapper>
        <ClassDetailContainer>
            <ClassDetailTitle>
                <div className="text">
                {/* [와쎂 in Yangyang] 양양 서핑 강습 (2시간) 1회권 + 죽도 해변 요트투어 탑승 1회 */}
                {classData.title}
                </div>
            </ClassDetailTitle>
            <div className="registering-date">
                <h2>강습 신청 가능 기간</h2>
                <div className="register-period">{`${classData.registerStart ? classData.registerStart : '2023년 1월 25일'} ~ ${classData.registerEnd ? classData.registerEnd : '2023년 3월 24일'}`}</div>
                <h2>강습 일자</h2>
                <div className="lesson-date">{`${classData.lessonDate ? classData.lessonDate : '2023년 4월 7일'}`}</div>
            </div>
            <ClassDetailBody>{classData.content ? classData.content : '홍보내용'}</ClassDetailBody>
            <RegistrationDetail>
                <div className="column-left">
                    <div className="date-text">강습 날짜</div>
                    <div className="count-text">인원 수</div>
                    <div className="sum-text">총 금액</div>
                </div>
                <div className="column-right">
                    {/* <div className="datepicker">
                        <DatePicker selected={date} onChange={date => setDate(date)} />
                    </div> */}
                    <div>{classData.lessonDate ? classData.lessonDate : '2023년 3월 25일' }</div>
                    <input className="input-number" type='number' min='0' placeholder="숫자만 입력하세요." onChange={handleNumberChange}></input>
                    <div className="sum-total">{classData.price ? `${classData.price}원` : '77,000원'}</div>
                </div>
            </RegistrationDetail>
            <ButtonsContainer>
                <RegistrationButton><Link to={`/pay/${lessonId}`}>강좌신청 👉</Link></RegistrationButton>
                <div>
                    <ClassDetailEditButton><Link to={`/editclass/${lessonId}`}>수정</Link></ClassDetailEditButton>
                    <ClassDetailDeleteButton onClick={deleteClass}>삭제</ClassDetailDeleteButton>
                </div>
            </ButtonsContainer>
            <Space />
        </ClassDetailContainer>
        </ClassDetailWrapper>
        <Footer />
        </>
    )
}

const ClassDetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
        /* @media screen and (min-width: 768px) {
        max-width: 80%;
  } */

`

const ClassDetailContainer = styled.div`
    min-height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;
    /* border: 1px red solid; */
    padding-bottom: 50px;
    .registering-date{
        width: 80%;
        text-align: left;
        width: 80%;
        height: fit-content;
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 25px 20px;
        border: 3px #3FBED3 solid;
        border-radius: 20px;
    }
    .registering-date > h2 {
        font-size: 18px;
        background-color: #a7d7dc;
        padding: 3px 6px;
        display: flex;
        width: fit-content;
    }
    .register-period {
        margin-bottom: 20px;
    }

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
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .column-left > div {
        margin: 10.5px;
        /* border: 1px red solid; */
        height: 30px;
    }
    .column-right > div {
        margin-top: 13px;
        margin-bottom: 13px;
        /* border: 1px red solid; */
        height: 30px;
    }

`


const RegistrationButton = styled.button`
    width: 100%;
    background-color: #3FBED3;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 50px;
    font-size: 16px;
    flex: 3 1 0;

    :hover {
        border: solid 3px #3FBED3;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }
`

const ClassDetailEditButton = styled.button`
    width: 50px;
    background-color: #9bd9e5;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 50px;
    font-size: 14px;
    flex: 1 1 0;

    :hover {
        border: solid 3px #3FBED3;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }

`

const ClassDetailDeleteButton = styled.button`
    width: 50px;
    background-color: #9bd9e5;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 50px;
    font-size: 14px;
    flex: 1 1 0;
    :hover {
        border: solid 3px #3FBED3;
        background-color: transparent;
        color: black;
        transition: 0.5s;
    }

`
const ButtonsContainer = styled.div`
    display: flex;
    min-width: 300px;
    height: 50px;
    justify-content: space-between;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    button {
        margin-left: 6px;
        margin-right: 6px;
    }
`

const Space = styled.div`
    height: 80px;
`

export default ClassDetailPage;