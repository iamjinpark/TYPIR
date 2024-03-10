import React, { useRef } from 'react';

const DetailImageFile = ({ imageSrc }) => {
  const fileInputRef = useRef(null);

  return (
    <div className=" absolute w-[100px] h-[145px] z-10 right-2 bottom-2 bg-black rounded-2xl">
      <img src={imageSrc} alt="선택한 이미지" className="w-[150px] h-[200px]" />
    </div>
  );
};

export default DetailImageFile;
