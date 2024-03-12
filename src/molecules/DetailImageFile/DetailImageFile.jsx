import { useImageStore } from '@/zustand/useStore';
import React, { useRef } from 'react';

const DetailImageFile = ({ imageSrc }) => {
  return (
    <div className=" absolute z-10 right-2 bottom-2 border border-white rounded-2xl">
      <img src={imageSrc} alt="선택한 이미지" className="w-[105px] h-[160px] object-cover rounded-2xl" />
    </div>
  );
};

export default DetailImageFile;
