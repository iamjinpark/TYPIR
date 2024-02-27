import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";

const ShareModal = () => {

  const handleKakaoTalkShare = () => {
    window.location.href = "https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D8080b34d6ab02a4772a21042046109a9%26short_key%3D4e477d5a-ca52-432e-8cb4-e1594f6b0b35#login"
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("URL이 복사되었습니다!"))
      .catch((err) => console.error("링크 복사에 실패했습니다", err))
  }

  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center"> 
      <CloseButton />
      <ul className="flex gap-16">
        <ModalButton onClick={handleKakaoTalkShare} href="#" fileName="kakaotalk" buttonText="카카오톡"/>
        <ModalButton onClick={handleCopyLink} href="#" fileName="linkCopy" buttonText="링크 복사"/>
      </ul>
    </div>
  );
};

export default ShareModal;