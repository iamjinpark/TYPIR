import { useState } from 'react';
import DetailModal from '@/molecules/DetailModal/DetailModal';

const DetailImageButton = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? null : (
        <button
          className="w-[48px] h-[48px] rounded-full bg-black flex justify-center items-center"
          onClick={openModal}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
            aria-label=""
            role="img"
            className="m-auto"
          >
            <path
              fill="white"
              d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
            ></path>
          </svg>
        </button>
      )}
      {showModal && <DetailModal onClose={closeModal} />}
    </>
  );
};

export default DetailImageButton;
