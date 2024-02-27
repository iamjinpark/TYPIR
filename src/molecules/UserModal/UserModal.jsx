import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";


const UserModal = () => {

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("URL이 복사되었습니다!"))
      .catch((err) => console.error("링크 복사에 실패했습니다", err))
  }

  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center">
      <CloseButton />
      <ul className="flex gap-16">
        <ModalButton onClick={handleCopyLink} href="#" fileName="linkCopy" buttonText="링크 복사"/>
        <ModalButton href="#" fileName="report" buttonText="신고"/>
      </ul>
    </div>
  );
};

export default UserModal;