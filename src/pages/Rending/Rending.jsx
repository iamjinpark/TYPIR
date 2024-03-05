import DetailImage from '@/molecules/DetailImage/DetailImage';
import Category from '@/molecules/Category/Category';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { useMatch } from 'react-router-dom';
import { useStyleStore } from '@/zustand/useStore';

const Rending = () => {
  const categoryImageMatch = useMatch('/category/detail/:imageId');
  const layoutId = categoryImageMatch?.params.imageId;
  const styles = useStyleStore((state) => state.styles);
  const imageSrc = styles.find((style) => style.id === layoutId)?.image;

  return (
    <div className="template">
      <Category />
      {categoryImageMatch ? <DetailImage layoutId={layoutId} imageSrc={imageSrc} /> : null}
    </div>
  );
};

export default Rending;
