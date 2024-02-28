import Header from '@/molecules/Header/Header';
import FileInput from '@/molecules/FileInput/FileInput';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import CommonTextarea from '@/atoms/CommonTextarea/CommonTextarea';
import CommonButton from '@/atoms/CommonButton/CommonButton';

const NewBoard = () => {
  return (
    <div className="template">
        <p className="font-serif text-center text-[24px] font-extrabold my-[10px]">Let's Copy This Style!</p>
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
