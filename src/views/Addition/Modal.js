import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        
        <div className="promo-code">
            <a  onClick={handleClose}>
                Close
            </a>
        </div>
      </section>
    </div>
  );
};

export default Modal;