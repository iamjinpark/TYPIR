import CloseButton from '@/atoms/CloseButton/CloseButton';
import ModalButton from '@/atoms/ModalButton/ModalButton';
import { useState } from 'react';
import BookmarkSaveModal from '../BookmarkSaveModal/BookmarkSaveModal';

const DetailModal = ({ onClose }) => {
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const openBoardModal = () => {
    setShowBoardModal(true);
  };
  const openShareModal = () => {
    setShowBoardModal(true);
  };
  const closeBoardModal = () => {
    setShowBoardModal(false);
  };
  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const handleSaveBoard = () => {};

  return (
    <div className="relative w-[290px] h-[200px] top-[16px] left-[16px] xs:w-[380px] xs:h-[230px] xs:top-[16px] xs:left-[16px] border border-black rounded-xl flex justify-center items-center bg-white ">
      <CloseButton onClose={onClose} />
      <ul className="flex gap-8 xs:gap-12">
        <ModalButton href="#" fileName="savePlus" buttonText="보드에 저장" onClick={openBoardModal} />
        {showBoardModal && <BookmarkSaveModal onClose={closeBoardModal} />}
        <ModalButton href="#" fileName="write" buttonText="글쓰기" />
        <ModalButton href="#" fileName="linkCopy" buttonText="공유하기" />
      </ul>
    </div>
  );
};

export default DetailModal;
