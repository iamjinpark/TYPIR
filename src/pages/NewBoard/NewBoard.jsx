import FileInput from '@/molecules/FileInput/FileInput';
import CommonInput from '@/atoms/CommonInput/CommonInput';
import CommonTextarea from '@/atoms/CommonTextarea/CommonTextarea';
import CommonButton from '@/atoms/CommonButton/CommonButton';
import Backward from '@/atoms/Backward/Backward';
import TextContents from '@/atoms/TextContents/TextContents';
import DetailImageFile from '@/molecules/DetailImageFile/DetailImageFile';
import CategoryButton from '@/molecules/CategoryButton/CategoryButton';
import StrokeButton from '@/atoms/StrokeButton/StrokeButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBoardInputStore, useFileInputStore } from '@/zustand/useStyleStore';
import pb from '@/api/pocketbase';

const NewBoard = ({ imageId, category }) => {
  const location = useLocation();
  const imageSrc = location.state?.imageSrc;

  const { title, context, setTitle, setContent, selectedCategory, setSelectedCategory } = useBoardInputStore();
  const { image, preview, setImage, setPreview } = useFileInputStore();

  // 제목 상태 업데이트
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 내용 상태 업데이트
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/style');
  };

  async function handleSave(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const userName = user.id;
    const formData = new FormData();

    const blob = await fetch(preview).then((res) => res.blob());
    const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
    formData.append('image', file);
    formData.append('username', userName);
    formData.append('title', `${title}`);
    formData.append('category', `${selectedCategory}`);
    formData.append('context', `${context}`);

    // const data = {
    //   userId: userId,
    //   title: `${title}`,
    //   category: `${selectedCategory}`,
    //   context: `${context}`,
    // };

    await pb.collection('communityPage').create(formData);
    navigate('/community');
  }

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
        <FileInput imageSrc={imageSrc} image={image} setImage={setImage} preview={preview} setPreview={setPreview} />

        <div className="flex flex-col gap-2 xs:gap-4 justify-center">
          <CategoryButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

          <CommonInput
            text=""
            value={title}
            onChange={handleTitleChange}
            placeholder="제목"
            border="rounded-2xl"
            borderColor="border-gray-200"
          />
          {/* 내용 입력(input) 컴포넌트 */}
          <CommonTextarea value={context} onChange={handleContentChange} className="xs:h-[220px]" />
          <div className="flex flex-row justify-center gap-[30px] mt-[15px]">
            {/* 취소 버튼 */}
            <StrokeButton
              width="w-[70px]"
              height="h-[30px]"
              fontSize="text-[12px]"
              bgColor="bg-white"
              fontColor="text-black"
              text="취소"
              onClick={handleCancel}
            ></StrokeButton>
            {/* 저장 버튼 */}
            <CommonButton fontSize="text-[14px]" onClick={handleSave} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBoard;
