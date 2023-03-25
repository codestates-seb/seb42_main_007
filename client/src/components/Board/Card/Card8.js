import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card8 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://img.khan.co.kr/news/2019/01/06/l_2019010701000637800048991.webp"} alt="태안 만리포해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">태안 만리포해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default Card8;