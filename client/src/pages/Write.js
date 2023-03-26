import {
  InputLabel,
} from "../components/Board/EditorInputWrapper";
import { Input } from "../components/Board/Input";
import { Button } from "../components/Board/Button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useState, useRef } from "react";
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
  const body1 = useRef();


  const handleChange = () => {
    const instance = body1.current.getInstance();
    const data = instance.getMarkdown();
    setContent(data);
    console.log(content)
  };


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

  const onSubmit = async (data) => {
    console.log("onSubmit called");

    setTitle(data?.title);

    let editorContent;
    if (body1.current) {
      editorContent = body1.current.getInstance().getHTML();
    }
    setContent(editorContent);


    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/board-posts`,
        {
          title: data?.title,
          content: content,
          createAt: TodayTime(),
          imgPath: "test"
        }
      );
      console.log("서버에서 내려온값:", response);
      window.alert("등록 완료");
      navigate("/List");
    } catch (error) {
      console.error("오류!", error);
      window.alert("등록 실패");
    }
  };

  
  const cancelButtonClick = () => {
    setTitle("");
    setContent("");
    navigate("/List");
  };

  const { register, handleSubmit } = useForm();
  
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
          <InputLabel title="내용" />
          <Editor
            initialValue=" "
            previewStyle="tab"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={body1}
            onChange={handleChange}>
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
            </Editor>
          {/* <EditorInputWrapper>
            <Editor
              previewStyle="tab"
              height="600px"
              initialEditType="markdown"
              useCommandShortcut={false}
              ref={body1}
              onChange={handleChange}
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
          </EditorInputWrapper> */}
          
          <div className="buttonWrapper">
            <Button
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
        </form>
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

  /* Media query for screens smaller than 1080px */
  @media only screen and (max-width: 1080px) {
    margin: 6rem 2rem 4rem;
    padding-top: 1rem;

    > div {
      gap: 0.2rem;
    }

    > h2 {
      font-size: 30px;
    }

    .buttonWrapper {
      gap: 0.4rem;
      margin-bottom: 2rem;
    }
  }
`;
