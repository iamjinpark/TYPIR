import CloseButton from "@/atoms/CloseButton/CloseButton";
import ModalButton from "@/atoms/ModalButton/ModalButton";


const UserModal = () => {
  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center">
      <CloseButton />
      <ul className="flex gap-12">
        <ModalButton href="#" fileName="share" buttonText="공유"/>
        <ModalButton href="#" fileName="report" buttonText="신고"/>
      </ul>
    </div>
  );
};

export default UserModal;