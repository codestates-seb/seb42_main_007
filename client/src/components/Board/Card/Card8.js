import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo8 from "./Weather/Jukdo8";

export const Card8 = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"https://www.visitbusan.net/uploadImgs/files/cntnts/20191225170315839_oen"} alt="부산 송정해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">부산 송정해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo8 />
      </div>

      <div className="card-footer">
        <div className="username">초중급자 추천</div>
        <div className="date">⭐⭐⭐⭐⭐</div>
        </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card8;