import pb from "@/api/pocketbase";
import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WriterModal = ({ onClose }) => {

  const [showCopyMessage, setShowCopyMessage] = useState(false)
  const [showDeleteMessage, setShowDeleteMessage] = useState(false)

  const navigate = useNavigate()
  const location = useLocation();
  const imageId = location.state?.imageId
  console.log("작성자 모달 imageId : ", imageId)

  const handleDelete = async () => {
    try {
      await pb.collection('communityPage').delete(imageId);
      console.log("삭제 성~공")
      setShowDeleteMessage(true)
      setTimeout(() => {
        setShowDeleteMessage(false)
        navigate("/community")
      }, 1500);
    } catch (err) {
      console.error("이미지 삭제 실패 : ", err)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShowCopyMessage(true)
        setTimeout(() => setShowCopyMessage(false), 1500);
      })
      .catch((err) => console.error("링크 복사에 실패했습니다", err))
  }

  // 모달 제외 배경 클릭시 닫히게
  const handleContainerClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // 이벤트 버블링 막아
  const handleModalContainerClick = e => {
    e.stopPropagation()
  }

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center" onClick={handleContainerClick}>
        <div className="relative w-[290px] h-[180px] bg-white border-2 border-black rounded-xl flex justify-center items-center">
          <CloseButton onClose={onClose}/>
          <ul className="flex gap-12 font-semibold">
            <ModalButton href="#" fileName="edit" buttonText="수정"/>
            <ModalButton onClick={handleDelete} fileName="delete" buttonText="삭제"/>
            <ModalButton onClick={handleCopyLink} fileName="linkCopy" buttonText="링크 복사"/>
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
      {showDeleteMessage && (
        <div className="fixed top-16 inset-0 flex justify-center z-50">
          <div>
            <img src="/images/deleteAlert.svg"/>
          </div>
        </div>
      )}
    </>
  );
};

export default WriterModal;