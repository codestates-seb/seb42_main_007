import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import Cookies from "js-cookie";

const DeleteButton = ({ isOpen, closeModal }) => {
  const { boardPostId } = useParams();
  const navigate = useNavigate();
  
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/board-posts/${boardPostId}`,
      {
        headers: {
        Authorization: `Bearer: ${Cookies.get('accessToken')}`, // 저장된 토큰 가져오기
      }
    },
    );
      window.alert("삭제 완료");
      closeModal();
      navigate("/List");
    } catch (error) {
      window.alert("삭제 실패");
      console.error(error);
    }
  };


  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "20%",
            height: "20%",
            margin: "auto",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "20px",
            boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }
        }}
        overlayClassName="modal-overlay"
      >
        <ModalWrapper>
          <ModalText>정말로 삭제하시겠습니까?</ModalText>
          <ButtonWrapper>
            <ModalButton onClick={handleDelete}>예</ModalButton>
            <ModalButton onClick={closeModal}>아니오</ModalButton>
          </ButtonWrapper>
        </ModalWrapper>
      </ReactModal>
    </>
  );
};

export default DeleteButton;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ModalText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  background-color: #00b4db;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  width: 80px;

  &:hover {
    background-color: #0083a8;
  }
`;
