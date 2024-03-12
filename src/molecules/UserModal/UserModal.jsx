import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";
import { useEffect } from "react";
import { useState } from "react";


const UserModal = ({ onClose }) => {

  const [showCopyMessage, setShowCopyMessage] = useState(false)
  const [showReportMessage, setReportMessage] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShowCopyMessage(true)
        setTimeout(() => setShowCopyMessage(false), 1500)
      })
      .catch((err) => console.error("링크 복사에 실패했습니다", err))
  }

  const handleReport = () => {
    setReportMessage(true)
    setTimeout(() => setReportMessage(false), 1500)
  }

  const handleContainerClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center" onClick={handleContainerClick}>
        <div className="relative bg-white w-[290px] h-[180px] border-2 border-black rounded-xl flex justify-center items-center">
          <CloseButton onClose={onClose}/>
          <ul className="flex gap-16 font-semibold">
            <ModalButton onClick={handleCopyLink} fileName="linkCopy" buttonText="링크 복사"/>
            <ModalButton onClick={handleReport} fileName="report" buttonText="신고"/>
          </ul>
        </div>
      </div>
      {showCopyMessage && (
        <div className="fixed top-16 inset-0 flex justify-center z-50">
          <div>
            <img src="/images/copyMessage.svg"/>
          </div>
        </div>
      )}
      {showReportMessage && (
        <div className="fixed top-16 inset-0 flex justify-center z-50">
          <div>
            <img src="/images/reportMessage.svg"/>
          </div>
        </div>
      )}      
    </>
  );
};

export default UserModal;