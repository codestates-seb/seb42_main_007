import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo from "./Weather/Jukdo";

export const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.querySelector("body").classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.querySelector("body").classList.remove("modal-open");
  };

  // let recommandation = "";
  // if (wave >= 0 && wave < 0.5) {
  //   recommandation = "패들 연습 추천";
  // } else if (wave >= 0.5 && wave < 1) {
  //   recommandation = "초보자 추천";
  // } else if (wave >= 1 && wave < 1.5) {
  //   recommandation = "중급자 추천";
  // } else if (wave >= 1.5 && wave < 2) {
  //   recommandation = "상급자 추천";
  // } else if (wave >= 2) {
  //   recommandation = "마스터 추천";
  // }


  return (
    <>
    <div className="card-wrapper" onClick={openModal}>
      <div className="card-body-img">
        <img src={"https://cdn.gwnews.org/news/photo/201507/62627_40107_444.jpg"} alt="양양 죽도해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">양양 죽도해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
        <JukDo />
      </div>
      <div className="card-footer">
      <div className="recommand">초보자 추천</div>
        <div className="date">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
    <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card;