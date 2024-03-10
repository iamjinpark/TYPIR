import FileInput from '@/molecules/FileInput/FileInput';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import CommonTextarea from '@/atoms/CommonTextarea/CommonTextarea';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import Backward from '@/atoms/Backward/Backward';
import TextContents from '@/atoms/TextContents/TextContents';
import DetailImageFile from '@/molecules/DetailImageFile/DetailImageFile';
import CategoryButton from '@/molecules/CategoryButton/CategoryButton';
import { useLocation } from 'react-router-dom';
import { useBoardInputStore } from '@/zustand/useStyleStore';

const NewBoard = () => {
  const location = useLocation();
  const imageSrc = location.state?.imageSrc;

  const { title, content, setTitle, setContent } = useBoardInputStore();

  // 제목 상태 업데이트
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 상태 업데이트
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleCancel = () => {
    // 취소 버튼을 클릭할 때 수행할 작업
    console.log('취소');
  };

  const handleSave = () => {
    // 저장 버튼을 클릭할 때 수행할 작업
    console.log('pb로 데이터 전송');
  };

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
      <form className="  gap-[10px] xs:flex flex-row xs:gap-[50px] xs:mx-auto">
        <FileInput imageSrc={imageSrc} />

        <div className="flex flex-col gap-2 xs:gap-4 justify-center">
          <CategoryButton />
          {/* 제목 입력(input) 컴포넌트 */}
          <CommonInput
            text=""
            value={title}
            onChange={handleTitleChange}
            placeholder="제목"
            border="rounded-2xl"
            borderColor="border-gray-200"
          />
          {/* 내용 입력(input) 컴포넌트 */}
          <CommonTextarea value={content} onChange={handleContentChange} className="xs:h-[220px]" />
          <div className="flex flex-row justify-center gap-[30px] mt-[15px]">
            {/* 취소 버튼 */}
            <CommonButton
              fontSize="text-[14px]"
              bgColor="bg-white"
              fontColor="text-black"
              text="취소"
              onClick={handleCancel}
            />
            {/* 저장 버튼 */}
            <CommonButton fontSize="text-[14px]" onClick={handleSave} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBoard;
