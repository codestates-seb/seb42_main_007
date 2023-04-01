import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo4 from "./Weather/Jukdo4";

export const Card4 = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"https://img.khan.co.kr/news/2019/01/06/l_2019010701000637800048991.webp"} alt="태안 만리포해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">태안 만리포해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo4 />
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐⭐</div>
        </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card4;