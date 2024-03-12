import CommonButton from '@/atoms/CommonButton/CommonButton';
import Backward from '@/atoms/Backward/Backward';
import TextContents from '@/atoms/TextContents/TextContents';
import { useState, useRef } from 'react';
import CategoryButtons from '@/molecules/CategoryButton/CategoryButton';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';

function NewStyle() {
  const [image, setImage] = useState(null); // 단일 이미지 상태 관리
  const [preview, setPreview] = useState(''); // 미리보기 URL 상태 관리
  const fileInputRef = useRef(null);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImage(file); // 선택된 파일 상태 업데이트
      setPreview(newImage); // 미리보기 URL 업데이트
    }
  };

  return (
    /* 뒤로가기, 타이틀 */
    <div className="flex flex-col h-auto min-h-[600px]">
      <div className="w-full flex flex-row justify-start items-center gap-8">
        <div className="w-full flex justify-between p-5">
          <div className="flex-1">
            <Backward />
          </div>
          <TextContents text="New Style" fontWeight="font-extrabold" fontSize="text-[25px]" fontFamily="font-serif" />
          <div className="flex-1"></div>
        </div>
      </div>

      {/* 이미지 input */}
      <div className="flex justify-center">
        <div
          className="w-[290px] h-[410px] bg-gray-200 flex justify-center relative rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        >
          <input type="file" ref={fileInputRef} onChange={handleAddImage} className="hidden" accept="image/*" />
          {preview ? (
            <img src={preview} alt="이미지 추가하기" className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* 필터링, 버튼 */}
      <div className="flex flex-col items-center mt-2 mb-7 gap-2">
        <CategoryButtons />
        <div className="flex flex-row justify-center gap-[20px] mt-[15px]">
          <StrokeButton
            width="w-[70px]"
            height="h-[30px]"
            fontSize="text-[14px]"
            bgColor="bg-white"
            fontColor="text-black"
            text="취소"
          />
          <CommonButton fontSize="text-[14px]" />
        </div>
      </div>
    </div>
  );
}

export default NewStyle;
