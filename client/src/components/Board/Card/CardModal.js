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
          <div className="modal-body-left">
            {/* 지도 컴포넌트 */}
            <img src={"http://t1.daumcdn.net/roughmap/imgmap/b3c8a206f6178ccc3a7952f37f1ec3c6e848e9b9385ad624074ee148094eef26"} alt="양양 죽도해변" />
          </div>
          <div className="modal-body-right">
            {/* 3시간마다 날씨 정보를 보여주는 컴포넌트 */}
          </div>
        </div>
        <div className="modal-footer">
          <button className="close-modal-btn" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default CardModal;

