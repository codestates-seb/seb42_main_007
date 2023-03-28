import "./card.scss";
import { useState } from "react";
import CardModal from "./CardModal";
import JukDo from "./Weather/Jukdo";

export const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [waveHeight, setWaveHeight] = useState(null);
  

  const openModal = () => {
    setIsModalOpen(true);
    document.querySelector("body").classList.add("modal-open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.querySelector("body").classList.remove("modal-open");
  };

  const renderRecommendation = (waveHeight) => {
    if (!waveHeight) {
      return '정보가 없습니다';
    }

    if (waveHeight >= 2) {
      return "마스터 추천";
    } else if (waveHeight >= 1.5) {
      return "상급자 추천";
    } else if (waveHeight >= 1) {
      return "중급자 추천";
    } else {
      return "처음해도 좋아요";
    }
  }

  return (
    <>
      <div className="card-wrapper" onClick={openModal}>
        <div className="card-body-img">
          <img src={"https://cdn.gwnews.org/news/photo/201507/62627_40107_444.jpg"} alt="양양 죽도해변" />
        </div>
        <div className="card-body-text">
          <div className="card-body-text-title">양양 죽도해변</div>
          <div className="card-body-text-content">서핑하기 좋은 날씨</div>
          <JukDo onWaveHeightChange={setWaveHeight} />
        </div>
        <div className="card-footer">
          <div className="recommendation">{waveHeight && renderRecommendation(waveHeight)}</div>
          <div className="date">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <CardModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Card;
