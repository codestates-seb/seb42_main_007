// import {
//   InputLabel,
//   EditorInputWrapper,
//   EditorInput,
// } from "../components/Board/EditorInputWrapper";
// import { Input } from "../components/Board/Input";
// import { Button } from "../components/Board/Button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import {
  useTodoDispatch,
  useTodoNextId,
} from "../components/Board/BoardContext";
import ImageUploader from "../components/Board/ImageUploader";
import TextArea from "../components/Board/TextArea";

const Write = () => {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "",
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onSubmit = (e) => {
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        done: false,
        img_url: image.preview_URL,
        title: title,
        content: content,
        username: "홍길동",
        date: TodayTime(),
      },
    });
    nextId.current += 1;
  };

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

  const canSubmit = useCallback(() => {
    return image.image_file !== "" && content !== "" && title !== "";
  }, [image, title, content]);

  const JsonData = {
    title: `${title}`,
    content: `${content}`,
    file: `${image.preview_URL}`,
  };

  const handleSubmit = useCallback(async () => {
    try {
      console.log(JSON.stringify(JsonData));
      axios({
        url: "/api/posts",
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
      toast.error("오류발생! 이모지를 사용하면 오류가 발생할 수 있습니다", {
        position: "top-center",
      });
    }
  }, [canSubmit]);

  const cancelButtonClick = () => {
    navigate("/List");
  };

  const navigate = useNavigate();
  const body1 = useRef();

  return (
    <>
      <Header />
      {
        <InsertFormPositioner>
          <AddBoardWrapper>
            <div className="addBoard-header">게시물 등록하기</div>

            <div className="submitButton">
              {canSubmit() ? (
                <Button
                  onClick={() => {
                    handleSubmit();
                    onSubmit();
                  }}
                  className="success-button"
                  variant="outlined"
                >
                  등록하기😃
                </Button>
              ) : (
                <Button
                  className="disable-button"
                  variant="outlined"
                  size="large"
                >
                  사진과 내용을 모두 입력하세요
                </Button>
              )}
            </div>

            <div className="addBoard-body">
              <ImageUploader
                setImage={setImage}
                preview_URL={image.preview_URL}
              />
              <TextArea
                setTitle={setTitle}
                setContent={setContent}
                title={title}
                content={content}
              />
            </div>
          </AddBoardWrapper>
        </InsertFormPositioner>
      }
      <Btn>
        <p>글쓰기</p>
      </Btn>
      <Footer />
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

const InsertFormPositioner = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: #ffbec3;
  border-radius: 30px;
`;

const AddBoardWrapper = styled.div`
  position: relative;
  top: 0px;
  z-index: 1;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  .addBoard-header {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 50px 0;
  }
  .submitButton {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
    }
    .disable-button {
      font-size: 1.1rem;
      cursor: not-allowed;
    }
    .success-button {
      font-size: 1.1rem;
    }
  }
  .addBoard-body {
    display: flex;
    margin: 20px 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Btn = styled.button`
  border-radius: 30px;
  position: absolute;
  top: -146px;
  right: 130px;
  color: #333;
  background-color: #fff;
  p {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration-line: none;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: "Noto Sans KR", sans-serif;
    flex-shrink: 0;
    margin: 0 1rem;
  }
  :hover {
    color: #333;
    background-color: pink;
    cursor: pointer;
  }
`;
