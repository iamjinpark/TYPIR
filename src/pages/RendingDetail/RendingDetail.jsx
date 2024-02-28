import Header from '@/molecules/Header/Header';
import FileInput from '@/molecules/FileInput/FileInput';
import DetailCategory from '@/molecules/DetailCategory/DetailCategory';
import DetailImage from '@/atoms/DetailImage/DetailImage';

const RendingDetail = () => {
  return (
    <div className="template">
      <DetailImage />
      <DetailCategory />
    </div>
  );
};

export default RendingDetail;
