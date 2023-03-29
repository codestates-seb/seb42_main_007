import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo2 from "./Weather/Jukdo2";

export const Card2 = ({board_id, title, content, img_url, username, date}) => {
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
        <img src={"https://i0.wp.com/thesurfer.co.kr/wp-content/uploads/2020/09/KakaoTalk_20200903_143147590-scaled.jpg?resize=1024%2C485&ssl=1"} alt="강릉 금진해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">강릉 금진해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo2 />
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

export default Card2;