import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card3 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F250FFD4C577E87170A"} alt="제주 중문해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">제주 중문해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">상급자 추천</div>
        <div className="date">⭐⭐⭐⭐</div>
      </div>
    </div>
  );
};