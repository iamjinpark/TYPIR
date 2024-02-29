import CommonButton from '@/atoms/CommonButton/CommonButton';
import TextContents from '@/atoms/TextContents/TextContents';

function DeleteModal({ closeModal }) {
  return (
    <div className="max-w-screen-md mx-auto fixed inset-0 bg-black bg-opacity-50 z-20" onClick={closeModal}>
      <div
        className="w-[250px] h-[145px] bg-white border border-black rounded-xl flex flex-col justify-center items-center "
        style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '21',
        }}
      >
        <div className="mb-4">
          <TextContents fontSize="text-[15px]" text="정말 삭제 하시겠습니까?" />
        </div>
        <div className="flex gap-5">
          <CommonButton text="취소" bgColor="bg-misty" fontColor="text-black" onClick={closeModal} />
          <CommonButton text="확인" bgColor="bg-misty" fontColor="text-black" />
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;
