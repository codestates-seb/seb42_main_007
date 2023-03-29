import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo5 from "./Weather/Jukdo5";

export const Card5 = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"https://cdn.kbmaeil.com/news/photo/201910/828615_849621_2521.jpg"} alt="포항 용한리해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">포항 용한리해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo5 />
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

export default Card5;