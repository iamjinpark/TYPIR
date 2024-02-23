import CommonButton from '@/atoms/CommonButton/CommonButton';
import TextContents from '@/atoms/TextContents/TextContents';

function DeleteModal() {
  return (
    <div className="w-[250px] h-[145px] border border-black rounded-md flex flex-col justify-center items-center">
      <div className="mb-4">
        <TextContents fontSize="15px" text="정말 삭제 하시겠습니까?" />
      </div>
      <div className="flex gap-5">
        <CommonButton text="확인" bgColor="misty" fontColor="black" />
        <CommonButton text="취소" bgColor="misty" fontColor="black" />
      </div>
    </div>
  );
}
export default DeleteModal;
