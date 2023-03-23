import React from "react"
import styled from "styled-components"
import CloseIcon from "@mui/icons-material/Close";
import Home from "./Home.js"
import BoardModal from "react-modal"
import Header from "../components/Header/Header.js";

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
  background-color: rgb(231, 235, 240);
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 790px;
  position: absolute;
  top: 100px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const CustomStyle = styled(BoardModal)`
  width: 1610px;
  height: 850px;
  position: absolute;
  top: 4%;
  left: 2%;
  border-radius: 30px;
  background-color: red;
  @media screen and (min-width: 1920px) {
  }
`

const Container = styled.div`
  width: 1730px;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -10;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`

const Board = ({ isModal, setModal }) => {
  return (
    <><Header />
    <BoardModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
>
      <ModalContainer>
        <ModalHead>
          <Closebtn src={CloseIcon} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          
          <Home />
        </ModalBody>
      </ModalContainer>
    </BoardModal>
    </>
  )
}

export default Board