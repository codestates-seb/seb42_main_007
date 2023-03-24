import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://cdn.gwnews.org/news/photo/201507/62627_40107_444.jpg"} alt="양양 죽도해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">양양 죽도해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">초보자 추천</div>
        <div className="date">⭐⭐⭐⭐⭐</div>
      </div>
    </div>
  );
};