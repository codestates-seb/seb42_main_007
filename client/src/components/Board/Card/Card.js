import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukdoWeather from "./Weather/JukdoWeather";

export const Card = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"https://cdn.gwnews.org/news/photo/201507/62627_40107_444.jpg"} alt="양양 죽도해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">양양 죽도해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukdoWeather />
      </div>

      <div className="card-footer">
        <div className="username">초보자 추천</div>
        <div className="date">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card;