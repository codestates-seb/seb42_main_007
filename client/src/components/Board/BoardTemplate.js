import React from "react"
import styled from "styled-components"

const TodoTemplateBlock = styled.div`
  width: 1200px;
  height: 600px;
  background-color: #fdd7a0;
  position: absolute; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  bottom: -10px;
  border-radius: 30px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  display: flex;
  flex-direction: column;
`

function BoardTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default BoardTemplate
