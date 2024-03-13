import { useRef, useEffect } from 'react';
import { useProfileStore } from '@/zustand/useStore';

function ProfileImage({
  width = 'w-[120px]',
  height = 'h-[120px]',
  border = 'rounded-full',
  bgColor = 'bg-gray-100',
  editable = true,
  margin,
  imageUrl,
}) {
  const fileInputRef = useRef();
  const { tempSelectedImage, setTempSelectedImage } = useProfileStore();
  const handleImageClick = () => {
    if (editable) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      useProfileStore.getState().setTempSelectedImage(tempUrl);
      useProfileStore.getState().setTempSelectedFile(file);
    }
  };

  useEffect(() => {
    setTempSelectedImage(null);
  }, [setTempSelectedImage]);

  const imageSrc = tempSelectedImage || imageUrl;

  return (
    <div className={`${width} ${height} ${border} ${margin} ${imageSrc ? '' : bgColor}`} onClick={handleImageClick}>
      {imageSrc && <img src={imageSrc} alt="프로필 이미지" className={`${width} ${height} ${border}`} />}
      {editable && <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />}
    </div>
  );
}
export default ProfileImage;
