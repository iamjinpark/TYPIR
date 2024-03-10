import FileInput from '@/molecules/FileInput/FileInput';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import CommonTextarea from '@/atoms/CommonTextarea/CommonTextarea';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import Backward from '@/atoms/Backward/Backward';
import TextContents from '@/atoms/TextContents/TextContents';
import DetailImageFile from '@/molecules/DetailImageFile/DetailImageFile';
import CategoryButton from '@/molecules/CategoryButton/CategoryButton';

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
      <div className="  gap-[10px] xs:flex flex-row xs:gap-[50px] xs:mx-auto">
        <FileInput />

        <div className="flex flex-col gap-2 xs:gap-4 justify-center">
          <CategoryButton />
          <CommonInput text="" placeholder="제목" border="rounded-2xl" borderColor="border-gray-200" />
          <CommonTextarea className="xs:h-[220px]" />
          <div className="flex flex-row justify-center gap-[30px] mt-[15px]">
            <CommonButton fontSize="text-[14px]" bgColor="bg-white" fontColor="text-black" text="취소" />
            <CommonButton fontSize="text-[14px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBoard;
