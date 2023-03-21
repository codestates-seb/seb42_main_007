import {
  InputLabel,
  EditorInputWrapper,
  EditorInput,
} from "../components/Board/EditorInputWrapper";
import { Input } from "../components/Board/Input";
import { Button } from "../components/Board/Button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";

const Write = () => {
  const [boardCont, setBoardCont] = useState({
    boardTitle: "",
    boardContent: "",
  });

  const submitButtonClick = (data) => {
    setBoardCont({
      ...boardCont,
      boardTitle: data.title,
      boardContent: body1.current.getInstance().getHTML(),
    });
  };

  const postButtonclick = async () => {
    return await axios({
      method: "POST",
      url: "http://localhost:4000/board-posts",
      data: {
        ...boardCont,
        // boardTitle: "테스트",
        // boardContent: "테스트 내용",
      },
    })
      .then((res) => {
        setBoardCont({
          boardTitle: "",
          boardContent: "",
        });
        navigate("/List");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const cancelButtonClick = () => {
    setBoardCont({
      boardTitle: "",
      boardContent: "",
    });
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
        <form onSubmit={handleSubmit((data) => submitButtonClick(data))}>
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
              submitButtonClick();
              postButtonclick();
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
