import ReactModal from "react-modal";
import "./CardModal.scss";


const CardModal = ({ isOpen, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Card Modal"
      style={{
        content: {
          width: "70%",
          height: "70%",
          margin: "auto",
        },
      }}
      overlayClassName="modal-overlay"
    >
      <div className="modal-wrapper">
        <div className="modal-body">
          <button className="close-modal-btn" onClick={closeModal}>
            X
          </button>
          <div className="modal-body-left">
            <img src={"http://t1.daumcdn.net/roughmap/imgmap/b3c8a206f6178ccc3a7952f37f1ec3c6e848e9b9385ad624074ee148094eef26"} alt="양양 죽도해변" />
            {/* 지도 컴포넌트 */}
          </div>
          <div className="modal-body-left-under">
            <h2>양양 죽도 해변</h2>
          </div>
          <div className="modal-body-left-under-text">
            {/* 해변 간략한 소개 */}
            드넓은 모래사장이 있는 서핑 명소로 서핑 매장과 편안한 분위기의 식당이 해안가를 따라 있습니다.
          </div>
          <div className="modal-body-left-under-recommand">
            추천 대상 : 입문자, 초중급자
            <br />
            파도 세기 : 다소 빠름
            </div>
          <div className="modal-body-right">
            {/* 현재 날씨 정보 */}
          </div>
          <div className="modal-body-right-counts">
            {/* 조회수 */}
          </div>
          <div className="modal-body-right-under">
            {/* 3시간마다 날씨 정보를 보여주는 컴포넌트 */}
          </div>
        </div>
        <hr width="100%" />
        <div className="modal-footer">
          <div className="comments">댓글 창</div>
          <div className="stars">⭐4</div>
        </div>
      </div>
    </ReactModal>
  );
};

export default CardModal;

