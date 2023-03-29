import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo3 from "./Weather/Jukdo3";

export const Card3 = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"https://cdn.kado.net/news/photo/202108/1085944_514264_3609.jpg"} alt="고성 봉수대해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">고성 봉수대해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo3 />
      </div>

      <div className="card-footer">
        <div className="username">상급자 추천</div>
        <div className="date">⭐⭐⭐⭐</div>
        </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card3;