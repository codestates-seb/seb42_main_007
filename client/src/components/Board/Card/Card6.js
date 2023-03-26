import "./card.scss";
import {useNavigate} from "react-router-dom";

export const Card6 = ({board_id, title, content, img_url, username, date}) => {
  const navigate = useNavigate();
  return (
    <div className="card-wrapper" onClick={() => {
      navigate(`/board/${board_id}`)
    }}>
      <div className="card-body-img">
        <img src={"https://mblogthumb-phinf.pstatic.net/MjAyMjA3MjBfMTc5/MDAxNjU4MzE0OTIxMTA1.WoM9Oe1rI1fce5FU1YBSyuaCtERgsM3qyL96n_e98U0g.5KN3Up1lwnOZ0-7V-vWZco-Uhf8HBJ8_YWjaCKxIG3og.JPEG.245lim/20220715%EF%BC%BF161510.jpg?type=w800"} alt="강릉 경포해변" />
      </div>
      <div className="card-body-text">
        <div className="card-body-text-title">강릉 경포해변</div>
        <div className="card-body-text-content">서핑하기 좋은 날씨</div>
      </div>

      <div className="card-footer">
        <div className="username">중급자 추천</div>
        <div className="date">⭐⭐⭐</div>
      </div>
    </div>
  );
};

export default Card6;