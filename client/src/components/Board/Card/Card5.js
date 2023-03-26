import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card5 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://mblogthumb-phinf.pstatic.net/MjAyMjA4MzBfOTgg/MDAxNjYxODYwODI0Mzkx.Mm5SdO0_hQ9Ui-xsa4zLzwb6GqGap4gEvD2bHsfBpXEg.NKVIiNcP9NZb0JqI4799M4-EGd3RkTdHhgZRNmzqSCcg.JPEG.joara127/%EB%8F%99%ED%95%B4_%EC%84%9C%ED%95%9112.JPG?type=w800"} alt="동해 대진해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">동해 대진해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default Card5;