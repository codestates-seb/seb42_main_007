import {
    InputLabel,
    EditorInput,
  } from "../components/Board/EditorInputWrapper";
  import { Input } from "../components/Board/Input";
  import { Button } from "../components/Board/Button";
  import { Editor } from "@toast-ui/react-editor";
  import "@toast-ui/editor/dist/toastui-editor.css";
  import { useEffect, useState, useRef } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import styled from "styled-components";
  import Header from "../components/Header/Header";
  import Footer from "../components/Footer/Footer";
  import "../App.css";
  
  const Edit = (props) => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState("");
    const editorRef = useRef();
  
    const handleEditorChange = () => {
      const data = editorRef.current.getInstance().getMarkdown();
      setAnswer(data);
    };


    const cancelButtonClick = () => {
      navigate(`/List`);
    };
  
    return (
      <>
        <div className="App">
          <Header></Header>
        </div>
        <MainLeft>
          <h2>글쓰기</h2>
          <div>
            <InputLabel title="제목" />
            <Input placeholder="" padding="0.78rem 0.91rem" width="100%" />
            {/* <Input
              value={title.questionTitle}
              onChange={e => setquestionTitle(e.target.value)}
              padding='0.78rem 0.91rem'
              width='100%'
              /> */}
          </div>
          <div>
            <InputLabel title="내용" />
            {/* <EditorInput ref={editorRef} /> */}
            <Editor
              height="30rem"
              initialEditType="markdown"
              initialValue=" "
              useCommandShortcut={true}
              ref={editorRef}
              onChange={handleEditorChange}
            ></Editor>
            <div>{props.questionContent}</div>
          </div>
          <div className="buttonWrapper">
            <Button
              //   onClick={saveEditButtonClick}
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
  
  export default Edit;
  
  const MainLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 10rem 20rem 20rem;
  
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