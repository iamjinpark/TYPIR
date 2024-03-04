import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";
import { useState } from "react";

const WriterModal = ({ onClose }) => {

  const [showCopyMessage, setShowCopyMessage] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShowCopyMessage(true)
        setTimeout(() => setShowCopyMessage(false), 1500);
      })
      .catch((err) => console.error("링크 복사에 실패했습니다", err))
  }

  return (
    <>
      <div className="fixed bottom-0 w-[290px] h-[200px] flex justify-center items-center z-50">
      <div className="relative bg-white w-[290px] h-[200px] border border-black rounded-xl flex justify-center items-center">
          <CloseButton onClose={onClose}/>
          <ul className="flex gap-12">
            <ModalButton href="#" fileName="edit" buttonText="수정"/>
            <ModalButton href="#" fileName="delete" buttonText="삭제"/>
            <ModalButton onClick={handleCopyLink} href="#" fileName="linkCopy" buttonText="링크 복사"/>
          </ul>
        </div>
      </div>
      <div className="absolute">
        {showCopyMessage && (<img src="/images/copyMessage.svg" />) }
      </div>
    </>
  );
};

export default WriterModal;