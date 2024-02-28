import { useRef } from 'react';
import { create } from 'zustand';

const useStore = create((set) => ({
  selectedFile: null,
  setSelectedFile: (file) => set({ selectedFile: file }),
}));

function ProfileImage({ width = 'w-[120px]', height = 'h-[120px]', border = 'rounded-full', bgColor = 'bg-gray-100' }) {
  const fileInputRef = useRef();
  const selectedFile = useStore((state) => state.selectedFile);
  const setSelectedFile = useStore((state) => state.setSelectedFile);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <div className={`${width} ${height} ${border} ${selectedFile ? '' : bgColor}`} onClick={handleImageClick}>
      {selectedFile && <img src={selectedFile} alt="프로필 이미지" />}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
    </div>
  );
}
export default ProfileImage;
