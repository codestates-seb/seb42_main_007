import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card4 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://www.gwgs.go.kr/thumbnail/tursmCn/TUCN_201812190858589971.jpg"} alt="고성 송지호해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">고성 송지호해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐</div>
      </div>
    </div>
  );
};