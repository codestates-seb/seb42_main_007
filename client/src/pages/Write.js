import {
  InputLabel,
  EditorInputWrapper,
  EditorInput,
} from "../components/Board/EditorInputWrapper";
import { Input } from "../components/Board/Input";
import { Button } from "../components/Board/Button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  useTodoDispatch,
  useTodoNextId,
} from "../components/Board/BoardContext";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  });
  const [ questionCont, setQuestionCont] = useState({
    title: "",
    content: "",
  })

    // 현재 시간 값을 반환하는 함수
    const TodayTime = () => {
      const now = new Date(); // 현재 날짜 및 시간
      const todayMonth = now.getMonth() + 1; // 월
      const todayDate = now.getDate(); // 일
      const week = ["일", "월", "화", "수", "목", "금", "토"];
      const dayOfWeek = week[now.getDay()]; // 요일
      const hours = now.getHours(); // 시간
      const minutes = now.getMinutes(); // 분
  
      return (
        todayMonth +
        "월" +
        todayDate +
        "일 " +
        dayOfWeek +
        "요일 " +
        hours +
        "시" +
        minutes +
        "분"
      );
    };


    const onSubmit = (data) => {
      setTitle({
        title: data?.title,
      });
      setContent({
        content: body1.current?.getInstance().getHTML(),
      });
    };

    const JsonData = {
      title: `${title}`,
      content: `${content}`,
      createAt: `${TodayTime()}`,
      // file: `${image.preview_URL}`,
    };

    const postButtonClick = useCallback(async () => {
      try {
        console.log(JSON.stringify(JsonData));
        axios({
          url: `http://localhost:4000/board-posts`,
          method: "post",
          data: JsonData,
        })
          .then(function a(response) {
            console.log("서버에서 내려온값:", response);
          })
          .catch(function (error) {
            console.log("에러내용:", error);
          });
  
        window.alert("😎등록이 완료되었습니다😎")();
      } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        console.error("오류발생! 이모지를 사용하면 오류가 발생할 수 있습니다", {
          position: "top-center",
        });
      }
    }, []);

  // const postButtonclick = async () => {
  //   return await axios({
  //     method: "POST",
  //     url: "http://localhost:4000/board-posts",
  //     data: JsonData,
  //   })
  //     .then((res) => {
  //       navigate("/List");
  //       })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  const cancelButtonClick = () => {
    setTitle({
      title: "",
    });
    setContent({
      content: "",
    })
    navigate("/List");
  };

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const body1 = useRef();

  return (
    <>
      <Header></Header>
      <MainLeft>
        <h2>글쓰기</h2>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <InputLabel title="제목" />
          <Input
            placeholder=""
            padding="0.78rem 0.91rem"
            width="100%"
            register={register('title')}
          />
        </form>
        <div>
          <InputLabel title="내용" />
          <EditorInputWrapper>
            <EditorInput ref={body1} />
          </EditorInputWrapper>
        </div>
        <div className="buttonWrapper">
          <Button
            onClick={() => {
              onSubmit();
              postButtonClick();
            }}
            buttonType="type2"
            buttonName="작성"
            width="8.04rem"
            height="3.79rem"
          />
          <Button
            onClick={cancelButtonClick}
            buttonType="type4"
            buttonName="취소"
            width="8.04rem"
            height="3.79rem"
          />
        </div>
      </MainLeft>
      <Footer></Footer>
    </>
  );
};

export default Write;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 10rem 20rem 20rem;
  padding-top: 2rem;

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: 12rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  > h2 {
    display: flex;
    flex-direction: row;
    font-size: 30px;
  }
`;
