import DetailCategoryButton from '@/atoms/DetailCategory/DetailCategory';

const DetailCategory = () => {
  return (
    <div className="flex flex-col gap-6 mt-[20px]">
      <DetailCategoryButton text="프로필에 저장" />
      <DetailCategoryButton text="게시글 작성" />
      <DetailCategoryButton text="공유하기" />
    </div>
  );
};

export default DetailCategory;
