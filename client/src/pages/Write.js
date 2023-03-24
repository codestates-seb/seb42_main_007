import {
  InputLabel,
  EditorInputWrapper,
} from "../components/Board/EditorInputWrapper";
import { Input } from "../components/Board/Input";
import { Button } from "../components/Board/Button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Editor } from "@toast-ui/react-editor";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const TodayTime = () => {
    const now = new Date();
    const todayMonth = now.getMonth() + 1;
    const todayDate = now.getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = week[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();

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
    setTitle(data?.title);
    setContent(body1.current.getInstance().getHtml());
  };

  const postButtonClick = useCallback(async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/board-posts`, {
        title: title,
        content: content,
        createAt: TodayTime(),
      });
      console.log("서버에서 내려온값:", response);
      window.alert("등록 완료");
      navigate("/List");
    } catch (error) {
      console.error("오류!", error);
      window.alert("등록 실패");
    }
  }, [title, content, navigate]);

  const cancelButtonClick = () => {
    setTitle("");
    setContent("");
    navigate("/List");
  };

  const { register, handleSubmit } = useForm();
  const body1 = useRef();

  return (
    <>
      <Header />
      <MainLeft>
        <h2>글쓰기</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel title="제목" />
          <Input
            placeholder=""
            padding="0.78rem 0.91rem"
            width="calc(100% - 30.12px);"
            register={register("title")}
          />
        </form>
        <div>
          <InputLabel title="내용" />
          <EditorInputWrapper>
            <Editor
              previewStyle="vertical"
              height="600px"
              initialEditType="wysiwyg"
              initialValue={content}
              ref={body1}
              hooks={{
                addImageBlobHook: async (blob, callback) => {
                  const formData = new FormData();
                  formData.append("image", blob);
                  try {
                    const response = await axios.post(
                      `${process.env.REACT_APP_SERVER_URL}/board-posts`,
                      formData
                    );
                    const imageUrl = response.data.url;
                    callback(imageUrl, "alt text");
                  } catch (error) {
                    console.error(error);
                  }
                },
              }}
            />
          </EditorInputWrapper>
        </div>
        <div className="buttonWrapper">
          <Button
            onClick={postButtonClick}
            type="submit"
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
      <Footer />
    </>
  );
};

export default Write;

const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 6rem 20rem 4rem;
  padding-top: 2rem;

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: 4rem;
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
