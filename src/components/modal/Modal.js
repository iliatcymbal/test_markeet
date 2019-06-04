import ReactModal from 'react-modal';

export const Modal = (props) => {
  const { open, title, children, close, onConfirm } = props;

  const onOk = () => {
    onConfirm();
    close();
  };

  return (
    <ReactModal
      isOpen={open}
    >
      <h2>{title}</h2>
      <span onClick={close}>X</span>
      <div>
        {children}
      </div>

      <div className="buttons">
        <button onClick={onOk}>Ok</button>
        <button onClick={close}>Cancel</button>
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = {
  title: 'Warning'
};
