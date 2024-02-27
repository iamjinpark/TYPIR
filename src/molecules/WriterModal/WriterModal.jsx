import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";

const WriterModal = () => {
  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center"> 
      <CloseButton />
      <ul className="flex gap-12">
        <ModalButton href="#" fileName="edit" buttonText="수정"/>
        <ModalButton href="#" fileName="delete" buttonText="삭제"/>
        <ModalButton href="#" fileName="share" buttonText="공유"/>
      </ul>
    </div>
  );
};

export default WriterModal;