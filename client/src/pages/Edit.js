import {
  InputLabel,
  EditorInput,
} from "../components/question/EditorInputWrapper";
import { Input } from "../components/Board/Input";
import { Button } from "../components/Board/Button";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Edit = (props) => {

    const editorRef= useRef();

    return (
        <MainLeft>
            <div>
          <InputLabel title="Title" />
          <Input placeholder="" padding="0.78rem 0.91rem" width="100%" />
          <Input
            // value={title.questionTitle}
            // onChange={e => setquestionTitle(e.target.value)}
            padding='0.78rem 0.91rem'
            width='100%'
            />
        </div>
        <div>
          <InputLabel title="Body" />
          <EditorInput ref={editorRef} />
          <div>{props.questionContent}</div>
        </div>
        <div className="buttonWrapper">
          <Button
        //   onClick={saveEditButtonClick}
            buttonType="type2"
            buttonName="Save edits"
            width="8.04rem"
            height="3.79rem"
          />
          <Button
        //   onClick={cancelButtonClick}
            buttonType="type4"
            buttonName="Cancel"
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