import CloseButton from '@/atoms/CloseButton/CloseButton';
import ModalButton from '@/atoms/ModalButton/ModalButton';
import { useState } from 'react';
import BoardSaveModal from '../BoardSaveModal/BoardSaveModal';
import ShareModal from '../ShareModal/ShareModal';
import { useNavigate, useMatch, Link } from 'react-router-dom';
import { useDetailModalStore } from '@/zustand/useStyleStore';

const DetailModal = ({ onClose, item, imageSrc }) => {
  const navigate = useNavigate();
  const { showBoardModal, showShareModal, setShowBoardModal, setShowShareModal } = useDetailModalStore();

  // 보드 모달
  const openBoardModal = () => {
    setShowBoardModal(true);
  };
  const closeBoardModal = () => {
    setShowBoardModal(false);
  };
  // 공유 모달
  const openShareModal = () => {
    setShowShareModal(true);
  };
  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const ImageMatch = useMatch('/style/detail/:imageId/?');
  const layoutId = ImageMatch?.params.imageId;

  // const moveToNewBoard = (imageId) => {
  //   if (location.pathname.startsWith('/style/detail')) {
  //     navigate(`/style/newBoard/${imageId}`, { state: { imageSrc } });
  //   }
  // };

  return (
    <div className="relative w-[290px] h-[200px] top-[16px] left-[16px] xs:w-[380px] xs:h-[230px] xs:top-[16px] xs:left-[16px] border border-black rounded-xl flex justify-center items-center bg-white ">
      <CloseButton onClose={onClose} />
      <ul className="flex gap-8 xs:gap-12">
        <ModalButton href="#" fileName="savePlus" buttonText="보드에 저장" onClick={openBoardModal} />
        <Link to={`/style/newBoard/${layoutId}`} state={{ imageSrc }}>
          <ModalButton fileName="write" buttonText="글쓰기" imageSrc={imageSrc} />
        </Link>
        <ModalButton href="#" fileName="linkCopy" buttonText="공유하기" onClick={openShareModal} />
      </ul>
      {showBoardModal && <BoardSaveModal onClose={closeBoardModal} text="기존 보드에 추가" />}
      {showShareModal && <ShareModal onClose={closeShareModal} />}
    </div>
  );
};

export default DetailModal;
