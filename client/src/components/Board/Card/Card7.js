import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card7 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F258429335968192412"} alt="포항 월포해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">포항 월포해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default Card7;