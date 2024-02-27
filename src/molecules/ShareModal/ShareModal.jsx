import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";

const ShareModal = () => {

  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center"> 
    <CloseButton />
    <ul className="flex gap-12">
      <ModalButton href="#" fileName="kakaotalk" buttonText="카카오톡"/>
      <ModalButton href="#" fileName="instagram" buttonText="인스타그램"/>
    </ul>
  </div>
  );
};

export default ShareModal;