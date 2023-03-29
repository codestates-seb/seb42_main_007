import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo7 from "./Weather/Jukdo7";

export const Card7 = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"http://www.visitjeju.net/ckImage/201706/web/ckeditor_7370820498843498951.JPG"} alt="제주 이호테우해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">제주 이호테우해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo7 />
      </div>

      <div className="card-footer">
        <div className="username">초보자 추천</div>
        <div className="date">⭐⭐⭐⭐</div>
        </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card7;