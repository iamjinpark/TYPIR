import { useUserStore } from '@/zustand/useUserStore';
import React, { useState, useRef } from 'react';

const ModifyProfileImg = () => {
  const [preview, setPreview] = useState('');
  const fileInputRef = useRef(null);
  const setImageInStore = useUserStore((state) => state.setImage);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setPreview(newImage);
      setImageInStore(file);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className="w-32 h-32 bg-gray-300 flex flex-col items-center justify-center relative rounded-full cursor-pointer overflow-hidden"
      onClick={() => fileInputRef.current.click()}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Change profile image"
    >
      <input type="file" ref={fileInputRef} onChange={handleAddImage} className="hidden" accept="image/*" />
      {preview ? (
        <img src={preview} alt="Selected image" className="w-full h-full object-cover rounded-full" />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ModifyProfileImg;
