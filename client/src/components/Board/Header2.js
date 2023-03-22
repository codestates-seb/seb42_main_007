import zIndex from "@mui/material/styles/zIndex"
import React, { useState } from "react"
import styled from "styled-components"
import Board from "../../pages/Board"
import Write from "../../pages/Write"
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  padding: 1.2rem 4rem;
  color: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: snow;
  border-radius: 10px;
  .header-title {
    span {
      font-size: 3rem;
      display: flex;
      align-items: center;
      font-family: "Pacifico", cursive;
    }
  }
  .header-menu {
    display: flex;
    flex-wrap: wrap;
  }
`

const Btn = styled.button`
  border-radius: 30px;
  margin-right: 30px;
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
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen(!open)

  return (
    <>
      <HeaderWrapper>
        <div className="header-title">
          <span>Health Together</span>
        </div>
        <div className="header-menu">
          <Btn onClick={() => onToggle()}>
            <p>게시판</p>
          </Btn>
          <Btn onClick={() => onToggle()}>
          <Link to="/boardList?page=1">게시판</Link>
          </Btn>
        </div>
      </HeaderWrapper>
    </>
  )
}

export default Header