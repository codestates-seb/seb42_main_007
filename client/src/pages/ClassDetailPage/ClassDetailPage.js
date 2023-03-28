import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Kakaopay from "../../images/ClassPaymentPage/Kakaopay.png";
import Loading from "../../components/Loading";

const ClassDetailPage = () => {
  const [date, setDate] = useState("2023년 4월 7일");
  const [number, setNumber] = useState("1"); // 수강신청할 인원 수
  const [registedNumber, setRegisteredNumber] = useState("0"); //현재 클래스에 수강신청된 인원
  const [classHeadCount, setClassHeadCount] = useState("10"); //현재 클래스 수강 총 인원 수
  const [classData, setClassData] = useState({});
  const [registerStartDate, setRegisterStartdate] = useState("2023년 1월 25일"); // 강습신청 기간 시작
  const [registerEndDate, setRegisterEnddate] = useState("2023년 3월 24일"); // 강습신청 기간 마감
  const [content, setContent] = useState("홍보내용"); // 강습 내용
  const [isLoading, setIsLoading] = useState("false");
  const [isAvailable, setIsAvailable] = useState("false"); // 수강신청 가능 여부
  const { lessonId } = useParams(); // /class/{lessonId}
  const navigate = useNavigate();

  const adminKey = process.env.KAKAOPAY_ADMIN_KEY;

  const dateFormatEdit = (str) => {
    if (typeof str === "string") {
      const year = `${str.slice(0, 4)}년`;
      const month = `${str.slice(5, 7)}월`;
      const day = `${str.slice(8, 10)}일`;
      return year + " " + month + " " + day;
    } else {
      const stringifiedStr = String(str);
      const year = `${stringifiedStr.slice(0, 4)}년`;
      const month = `${stringifiedStr.slice(5, 7)}월`;
      const day = `${stringifiedStr.slice(8, 10)}일`;
      return year + " " + month + " " + day;
    }
  };

  const handleNumberChange = (event) => {
    if (event.target.value > classHeadCount - registedNumber) {
      return alert(
        `현재 수강 가능 인원을 초과하였습니다. 현재 최대 ${
          classHeadCount - registedNumber
        }명까지 신청 가능합니다.`
      );
    } else {
      setNumber(event.target.value); // number : 강습신청하는 인원 수
    }
  };
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    axios
      .get(`http://43.201.167.13:8080/lesson-class/${lessonId}`)
      .then((res) => {
        //if()/available하지 않은 경우, 얼럿으로 현재 모집 종료된 강좌입니다. 띄움
        // 결제버튼을 모집 종료된 강좌입니다. 버튼으로 바꿈
        setClassData(res.data.data);
        setDate(res.data.data.lessonDate);
        setRegisterStartdate(classData.registerStart);
        setRegisterEnddate(classData.registerEnd);
        setClassHeadCount(classData.headCount);
        setContent(classData.content);
        setRegisteredNumber(classData.currentHeadCount);
        setIsLoading(false);
        clearTimeout(timer);
        // 지금 날짜가 수강신청 마감일을 지난 경우 or 총 수강가능인원수 === 수강신청한 인원수인 경우
        // 더이상 수강신청할 수 없음 -> isAvailable = false
        if (registerEndDate > new Date()) {
          setIsAvailable(false);
          return alert("현재 모집 기간이 종료되었습니다.");
        } else if (classHeadCount === registedNumber) {
          setIsAvailable(false);
          return alert("현재 수강 인원이 모두 찼습니다.");
        }
        //신청가능한 날짜가 아닌 경우

        // "data": {
        //     "memberId": 2,
        //     "lessonClassId": 1,
        //     "title": "강습 클래스 제목",
        //     "content": "강습 클래스 내용",
        //     "registerStart": "2023-03-23T12:20:00",
        //     "registerEnd": "2023-03-23T23:30:00",
        //     "lessonDate": "2023-03-31",
        //     "headCount": 30,
        //     "currentHeadCount": 0,
        //     "price": 75000,
        //     "lessonRegisters": []
        //   }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteClass = async () => {
    await axios
      .delete(`http://43.201.167.13:8080/lesson-class/${lessonId}`)
      //1 -> LessonId
      .then(() => {
        alert("강습 모집글이 삭제되었습니다.");
        navigate("/classlist");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const requestPayment = async () => {
    try {
      const response = await axios.post(
        "https://kapi.kakao.com/v1/payment/ready",
        null,
        {
          params: {
            cid: "TC0ONETIME",
            partner_order_id: lessonId,
            partner_user_id: "partner_user_id",
            item_name: classData.title,
            quantity: number,
            total_amount: classData.price * number,
            vat_amount: 0,
            tax_free_amount: 0,
            approval_url: `http://localhost:3000/paysuccess?lesson_id=${lessonId}item_name=${
              classData.title
            }&quantity=${number}&price=${classData.price * number}`,
            fail_url: "http://localhost:3000/payfailure",
            cancel_url: `http://localhost:3000/class/${lessonId}`,
          },
          // params : {
          //     cid: "TC0ONETIME",
          //     partner_order_id: lessonId, // 클래스id
          //     partner_user_id: "partner_user_id",
          //     item_name: "서핑강좌", // title
          //     quantity: 1, // 인원수
          //     total_amount: 77000, // 총 가격
          //     vat_amount: 0,
          //     tax_free_amount: 0,
          //     approval_url: `http://localhost:3000/paysuccess?lesson_id=${lessonId}&item_name=${'서핑강좌'}&quantity=${'1'}&price=${'22000'}`,
          //     fail_url: "http://localhost:3000",
          //     cancel_url: "http://localhost:3000/class/1",
          //   },
          headers: {
            Authorization: `KakaoAK 96b2b8ecaf66cbe0b9ddaaa9fb1fda29`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
      /* 결제 페이지로 이동 */
      window.location.href = response.data.next_redirect_pc_url;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ClassDetailWrapper>
            <ClassDetailContainer>
              <ClassDetailTitle>
                <div className="text">
                  {classData
                    ? classData.title
                    : "[와쎂 in Yangyang] 양양 서핑 강습 (2시간) 1회권 + 죽도 해변 요트투어 탑승 1회"}
                </div>
              </ClassDetailTitle>
              <div className="registering-date">
                <h2>강습 신청 가능 기간</h2>
                <div className="register-period">
                  {classData
                    ? dateFormatEdit(registerStartDate)
                    : "2023년 1월 25일"}{" "}
                  ~{" "}
                  {classData.registerEnd
                    ? dateFormatEdit(registerEndDate)
                    : "2023년 3월 24일"}
                </div>
                <h2>강습 일자</h2>
                <div className="lesson-date">
                  {classData ? dateFormatEdit(date) : "2023년 4월 7일"}
                </div>
                <h2>현재 신청 가능 인원 / 총 모집 인원</h2>
                <div className="lesson-date">
                  {classData
                    ? `${classHeadCount - registedNumber} / ${classHeadCount}`
                    : "4 / 10"}
                </div>
              </div>
              <ClassDetailBody>{content}</ClassDetailBody>
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
                  <div>
                    {classData.lessonDate
                      ? dateFormatEdit(date)
                      : "2023년 4월 7일"}
                  </div>
                  <input
                    className="input-number"
                    value={number}
                    type="number"
                    min="1"
                    max={classData.headCount - classData.currentHeadCount}
                    placeholder="숫자만 입력하세요."
                    onChange={handleNumberChange}
                  ></input>
                  {/* 신청가능 인원보다 높은 숫자 입력 불가 */}
                  <div className="sum-total">
                    {classData.price
                      ? `${classData.price * number}원`
                      : `${number * 77000}원`}
                  </div>
                </div>
              </RegistrationDetail>
              <ButtonsContainer>
                {isAvailable ? (
                  <RegistrationButton onClick={requestPayment}>
                    카카오페이로 강좌신청하기
                    <KakaopayButton src={Kakaopay} />
                  </RegistrationButton>
                ) : (
                  <button className="not-available">
                    <div className="text-show">
                      <Link to="/classlist">현재 모집 종료된 강좌입니다.</Link>
                    </div>
                    <div className="text-hidden">
                      <Link to="/classlist">강좌 리스트로 이동하기</Link>
                    </div>
                  </button>
                )}

                <div>
                  <ClassDetailEditButton>
                    <Link to={`/editclass/${lessonId}`}>수정</Link>
                  </ClassDetailEditButton>
                  <ClassDetailDeleteButton onClick={deleteClass}>
                    삭제
                  </ClassDetailDeleteButton>
                </div>
              </ButtonsContainer>
              <Space />
            </ClassDetailContainer>
          </ClassDetailWrapper>
        </>
      )}
      <Footer />
    </>
  );
};

const KakaopayButton = styled.img`
  width: 50px;
  margin-left: 13px;
  position: relative;
  top: 3.5px;
`;

const ClassDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media screen and (min-width: 768px) {
        max-width: 80%;
  } */
`;

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
  .registering-date {
    width: 80%;
    text-align: left;
    width: 80%;
    height: fit-content;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 30px 20px 25px;
    border: 3px #3fbed3 solid;
    border-radius: 20px;
  }
  .registering-date > h2 {
    font-size: 18px;
    background-color: #a7d7dc;
    padding: 3px 6px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    width: fit-content;
  }
  .registering-date > div {
    margin-bottom: 20px;
  }
  .register-period {
    margin-bottom: 20px;
  }
`;

const ClassDetailTitle = styled.div`
  width: 80%;
  height: 300px;
  padding: 20px;
  background-image: url("https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
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
`;

const ClassDetailBody = styled.div`
  width: 80%;
  height: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 3px #3fbed3 solid;
  border-radius: 20px;
`;

const RegistrationDetail = styled.div`
  width: 80%;
  height: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  padding-top: 40px;
  border: 3px #3fbed3 solid;
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
    text-align: center;
  }
  .column-left > div {
    margin: 10px;
    /* border: 1px red solid; */
    height: 30px;
  }
  .column-right > div {
    margin: 10px;
    /* margin-top: 13px;
        margin-bottom: 13px; */
    /* border: 1px red solid; */
    height: 30px;
  }
  .column-right > input {
    margin-top: -5px;
    margin-bottom: 7px;
    font-size: 15px;
    text-align: center;
    padding: 5px;
    border: #3fbed3 2px solid;
    border-radius: 10px;
    width: 100px;
  }
`;

const RegistrationButton = styled.button`
  width: 100%;
  background-color: #3fbed3;
  color: white;
  font-weight: bold;
  border: transparent;
  border-radius: 15px;
  height: 50px;
  font-size: 16px;
  flex: 3 1 0;
  padding: 0px 25px;
  :hover {
    border: solid 3px #3fbed3;
    background-color: transparent;
    color: black;
    transition: 0.5s;
  }
`;

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
    border: solid 3px #3fbed3;
    background-color: transparent;
    color: black;
    transition: 0.5s;
  }
`;

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
    border: solid 3px #3fbed3;
    background-color: transparent;
    color: black;
    transition: 0.5s;
  }
`;
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
  .not-available {
    width: 300px;
    background-color: #3fbed3;
    color: white;
    font-weight: bold;
    border: transparent;
    border-radius: 15px;
    height: 50px;
    font-size: 16px;
    flex: 3 1 0;
    padding: 0px 25px;
    :hover {
      border: solid 3px #3fbed3;
      background-color: transparent;
      color: black;
      transition: 0.5s;
      .text-hidden {
        display: block;
        color: black;
      }
      .text-show {
        display: none;
      }
    }
  }
  .not-available > div {
    color: white;
    font-weight: bold;
    font-size: 16px;
    :hover {
      background-color: transparent;
      color: black;
      transition: 0.5s;
    }
  }
  .not-available > .text-hidden {
    display: none;
    :hover {
      display: block;
    }
  }
  .not-available > .text-show {
    display: block;
    :hover {
      display: hidden;
    }
  }
`;

const Space = styled.div`
  height: 80px;
`;

export default ClassDetailPage;
