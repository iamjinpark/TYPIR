import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";
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

  return (
    // <>
    //   <div className="fixed bottom-0 w-[290px] h-[200px] flex justify-center items-center z-50">
    //     <div className="relative bg-white w-[290px] h-[200px] border border-black rounded-xl flex justify-center items-center">
    //       <CloseButton onClose={onClose} />
    //       <ul className="flex gap-20">
    //         <ModalButton onClick={handleCopyLink} href="#" fileName="linkCopy" buttonText="링크 복사"/>
    //         <ModalButton onClick={handleReport} href="#" fileName="report" buttonText="신고"/>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="absolute">
    //     {showCopyMessage && ( <img src="/images/copyMessage.svg" /> )}       
    //     {showReportMessage && ( <img src="/images/reportMessage.svg"/> )}
    //   </div>
    // </>

    <>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="w-[290px] h-[200px] flex justify-center items-center z-50">
        <div className="relative bg-white w-[290px] h-[200px] border border-black rounded-xl flex justify-center items-center">
            <CloseButton onClose={onClose}/>
            <ul className="flex gap-12">
              <ModalButton href="#" fileName="edit" buttonText="수정"/>
              <ModalButton href="#" fileName="delete" buttonText="삭제"/>
              <ModalButton onClick={handleCopyLink} href="#" fileName="linkCopy" buttonText="링크 복사"/>
            </ul>
          </div>
        </div>
      </div>
      {showCopyMessage && (
        <div className="absolute flex justify-center items-center z-50">
          <img src="/images/copyMessage.svg"/>
        </div>
      )}
      {showReportMessage && (
        <div className="absolute flex justify-center items-center z-50">
          <img src="/images/reportMessage.svg"/>
        </div>
      )}      
    </>
  );
};

export default UserModal;