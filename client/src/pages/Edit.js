import {
  InputLabel,
  EditorInput,
} from "../components/Board/EditorInputWrapper";
import { Input } from "../components/Board/Input";
import { Button } from "../components/Board/Button";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Edit = (props) => {

  const [answer, setAnswer] = useState('');
  const editorRef = useRef();


    const handleEditorChange = () => {
      const data = editorRef.current.getInstance().getMarkdown();
      setAnswer(data);
    };

    return (
        <MainLeft>
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
        height="400px"
        initialEditType="markdown"
        initialValue="Write your answer"
        previewStyle="vertical"
        useCommandShortcut={true}
        ref={editorRef}
        onChange={handleEditorChange}></Editor>
          <div>{props.questionContent}</div>
        </div>
        <div className="buttonWrapper">
          <Button
        //   onClick={saveEditButtonClick}
            buttonType="type2"
            buttonName="저장"
            width="8.04rem"
            height="3.79rem"
          />
          <Button
        //   onClick={cancelButtonClick}
            buttonType="type4"
            buttonName="취소"
            width="8.04rem"
            height="3.79rem"
          />
        </div>
        </MainLeft>

    );
};

export default Edit;


const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: 2.4rem;
  margin-top: 1.8rem;

  .buttonWrapper {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    margin-top: 1.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;