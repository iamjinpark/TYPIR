const CloseButton = ({ onClose }) => {
  return (
        <button onClick={onClose} className="absolute top-4 right-4">
          <img src="/images/close.svg" className="w-[13px] h-[13px]"/>
        </button>
  );
};

export default CloseButton;