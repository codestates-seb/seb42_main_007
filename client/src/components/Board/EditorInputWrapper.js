import styled from "styled-components";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { forwardRef } from "react";

const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background-color: #ffffff;

  & .title {
    color: #0c0d0e;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.2rem;
  }
`;

export const InputLabel = (props) => {
  return (
    <InputLabelWrapper>
      <div className='title'>{props.title}</div>
    </InputLabelWrapper>
  )
};


const StyledEditorInput = styled.div`
  border-radius:0.4rem;
`;

export const EditorInput = forwardRef((props, ref) => {

  return (
    <StyledEditorInput>
      <InputLabel title={props.title} />
      <Editor 
      initialEditType="wysiwyg"
      initialValue=" "
        height='30rem'
        toolbarItems={props.toolbarItems || [
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task', 'indent', 'outdent'],
          ['table', 'image', 'link'],
          ['code', 'codeblock']
        ]}
        ref={ref}
      />
    </StyledEditorInput>
  )
});

export const EditorInputWrapper = forwardRef((props, ref) => {
  return (
    <>
      <InputLabel title={props.title} />
      <EditorInput ref={ref} />
    </>
  )
});