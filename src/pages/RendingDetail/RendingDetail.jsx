import Header from '@/molecules/Header/Header';
import FileInput from '@/molecules/FileInput/FileInput';
import DetailCategory from '@/molecules/DetailCategory/DetailCategory';

const RendingDetail = () => {
  return (
    <div className="w-[320px] mx-auto">
      <Header />
      <div className="px-[15px] mt-[10px]">
        <FileInput />
        <DetailCategory />
      </div>
    </div>
  );
};

export default RendingDetail;
