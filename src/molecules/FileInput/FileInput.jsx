import { useState, useRef } from 'react';
import DetailImageFile from '../DetailImageFile/DetailImageFile';
import { useFileInputStore } from '@/zustand/useStyleStore';

const FileInput = ({ imageSrc, image, setImage, preview, setPreview }) => {
  // const { image, preview, setImage, setPreview } = useFileInputStore();

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
    <div
      className="w-[290px] h-[410px] bg-gray-300 flex flex-col items-center justify-center relative rounded-2xl overflow-hidden cursor-pointer"
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
      <DetailImageFile imageSrc={imageSrc} />
    </div>
  );
};

export default FileInput;
