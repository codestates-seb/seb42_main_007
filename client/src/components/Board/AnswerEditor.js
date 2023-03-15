import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useRef, useState } from 'react';
import axios from 'axios';

const EditorContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 8px;

  > h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1em;
    padding-top: 20px;
  }
`;

const PostBtnWrapper = styled.div`
  padding: 10px 0 15px 0;
  display: flex;
`;

const PostBtn = styled.button`
  background-color: #7CCCDC;
  color: hsl(0, 0%, 100%);
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  font-size: 13px;
  padding: 0.8em;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: #36778B;
  }
`;

const AnswerEditor = ({ id }) => {
  const [answer, setAnswer] = useState('');
  const editorRef = useRef();

  const handleEditorChange = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    setAnswer(data);
  };

  const handlePostAnswer = answer => {
    axios({
      method: 'post',
      url: 'http://3.39.174.236:8080/answers',
      data: { memberId: 1, questionId: id, answerContent: answer },
    }).then(res => console.log(res));
  };

  return (
    <EditorContainer>
      <h2>댓글</h2>
      <Editor
        height="400px"
        initialEditType="markdown"
        initialValue=" "
        useCommandShortcut={true}
        ref={editorRef}
        onChange={handleEditorChange}></Editor>
      <PostBtnWrapper>
        <PostBtn onClick={() => handlePostAnswer(answer)}>
          댓글 작성
        </PostBtn>
      </PostBtnWrapper>
    </EditorContainer>
  );
};

export default AnswerEditor;
