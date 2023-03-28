import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo6 from "./Weather/Jukdo6";

export const Card6 = ({board_id, title, content, img_url, username, date}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.querySelector("body").classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.querySelector("body").classList.remove("modal-open");
  };

  return (
    <>
    <div className="card-wrapper" onClick={openModal}>
      <div className="card-body-img">
        <img src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeOI7aZ%2FbtrpLt5E5bJ%2FBE8N5PVnKUkjkAnucCmP0K%2Fimg.jpg"} alt="제주 중문해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">제주 중문해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo6 />
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐</div>
        </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card6;