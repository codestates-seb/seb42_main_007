import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card2 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://a.cdn-hotels.com/gdcs/production50/d161/45d19307-a8db-4921-8cff-5a88a4060ad0.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"} alt="부산 송정해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">부산 송정해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐⭐</div>
      </div>
    </div>
  );
};