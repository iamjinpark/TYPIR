import CloseButton from '@/atoms/CloseButton/CloseButton';
import ModalButton from '@/atoms/ModalButton/ModalButton';

const DetailModal = () => {
  const handleSaveBoard = () => {};

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert('URL이 복사되었습니다!'))
      .catch((err) => console.error('링크 복사에 실패했습니다', err));
  };

  return (
    <div className="relative w-[320px] h-[200px] border border-black rounded-xl flex justify-center items-center">
      <CloseButton />
      <ul className="flex gap-12">
        <ModalButton href="#" fileName="savePlus" buttonText="보드에 저장" />
        <ModalButton href="#" fileName="write" buttonText="글쓰기" />
        <ModalButton href="#" fileName="linkCopy" buttonText="공유하기" />
      </ul>
    </div>
  );
};

export default DetailModal;
