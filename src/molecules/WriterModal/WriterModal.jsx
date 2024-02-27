import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";

const WriterModal = () => {

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("URL이 복사되었습니다!"))
      .catch((err) => console.error("링크 복사에 실패했습니다", err))
  }

  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center"> 
      <CloseButton />
      <ul className="flex gap-12">
        <ModalButton href="#" fileName="edit" buttonText="수정"/>
        <ModalButton href="#" fileName="delete" buttonText="삭제"/>
        <ModalButton onClick={handleCopyLink} href="#" fileName="linkCopy" buttonText="링크 복사"/>
      </ul>
    </div>
  );
};

export default WriterModal;