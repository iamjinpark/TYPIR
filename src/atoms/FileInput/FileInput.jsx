// import { useState, useRef } from 'react';

// const FileInput = () => {
//   const [imgFile, setImgFile] = useState();
//   const [imgPath, setImgPath] = useState('');
//   const imgRef = useRef(null);
//   const previewImage = () => {
//     if (imgRef.current && imgRef.current.files) {
//       const img = imgRef.current.files[0];
//       setImgFile(img);

//       //이미지 미리보기 기능
//       const reader = new FileReader();
//       reader.readAsDataURL(img);
//       reader.onload = () => {
//         setImgPath(reader.result);
//       };
//     }
//   };

//   return (
//     <>
//       <img src={imgPath ? imgPath : '../../public/fileInput.png'} alt="이미지 업로드" />
//       <lable htmlFor="photo" className="text-white bg-black width-[10rem] height-[10rem]">
//         +
//       </lable>
//       <input
//         type="file"
//         id="photo"
//         name="photo"
//         accept=".png, .jpeg, .jpg"
//         onChange={previewImage}
//         ref={imgRef}
//       ></input>
//     </>
//   );
// };

// export default FileInput;

import React, { useState, useRef } from 'react';

const ImageAddButton = () => {
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
    <div
      className="w-72 h-[410px] bg-gray-300 flex flex-col items-center justify-center relative rounded-lg overflow-hidden cursor-pointer"
      onClick={() => fileInputRef.current.click()}
    >
      <input type="file" ref={fileInputRef} onChange={handleAddImage} className="hidden" accept="image/*" />
      {preview ? (
        <img src={preview} alt="Selected image" className="w-full h-full object-cover" />
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

export default ImageAddButton;
