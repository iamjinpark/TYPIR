import DetailImage from '@/molecules/DetailImage/DetailImage';
import Category from '@/molecules/Category/Category';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { useMatch } from 'react-router-dom';

const Rending = () => {
  const categoryImageMatch = useMatch('/category/detail/:imageId');
  const layoutId = categoryImageMatch?.params.imageId;

  return (
    <div className="template">
      <Category />
      <ImageTemplate />
      {categoryImageMatch ? <DetailImage layoutId={layoutId} /> : null}
    </div>
  );
};

export default Rending;
