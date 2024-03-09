import { useRef } from 'react';
import { useFileStore } from '@/zustand/useStore';

function ProfileImage({
  width = 'w-[120px]',
  height = 'h-[120px]',
  border = 'rounded-full',
  bgColor = 'bg-gray-100',
  margin,
  editable = true,
  imageUrl,
}) {
  const fileInputRef = useRef();
  const selectedFile = useFileStore((state) => state.selectedFile);
  const setSelectedFile = useFileStore((state) => state.setSelectedFile);

  const handleImageClick = () => {
    if (editable) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const imageSrc = selectedFile || imageUrl;

  return (
    <div className={`${width} ${height} ${border} ${margin} ${imageSrc ? '' : bgColor}`} onClick={handleImageClick}>
      {imageSrc && <img src={imageSrc} alt="프로필 이미지" className={`${width} ${height} ${border}`} />}
      {editable && <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />}
    </div>
  );
}
export default ProfileImage;
