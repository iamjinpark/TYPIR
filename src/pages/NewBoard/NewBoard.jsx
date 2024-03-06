import Header from '@/molecules/Header/Header';
import FileInput from '@/molecules/FileInput/FileInput';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import CommonTextarea from '@/atoms/CommonTextarea/CommonTextarea';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import Backward from '@/atoms/Backward/Backward';
import TextContents from '@/atoms/TextContents/TextContents';

const NewBoard = () => {
  return (
    <div className="template">
      <div className="w-full flex flex-row justify-start items-center gap-8">
        <div className="w-full flex justify-between p-5">
          <div className="flex-1">
            <Backward />
          </div>
          <TextContents
            text="Let's Typir!"
            fontWeight="font-extrabold"
            fontSize="text-[25px]"
            fontFamily="font-serif"
          />
          <div className="flex-1"></div>
        </div>
      </div>
      <FileInput />
      <CommonInput text="" placeholder="제목" border="rounded-2xl" borderColor="border-gray-200" />
      <CommonTextarea />
      <div className="flex flex-row justify-center gap-[20px] mt-[15px]">
        <CommonButton fontSize="text-[14px]" bgColor="bg-white" fontColor="text-black" text="취소" />
        <CommonButton fontSize="text-[14px]" />
      </div>
    </div>
  );
};

export default NewBoard;
