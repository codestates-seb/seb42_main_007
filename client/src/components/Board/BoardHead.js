import React from "react"
import styled from "styled-components"

const TodoHeadBlock = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 30px 30px 0px 0px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
`

function BoardHead() {
  return <TodoHeadBlock />
}

export default BoardHead