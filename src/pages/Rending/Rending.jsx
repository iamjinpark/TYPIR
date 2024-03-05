import DetailImage from '@/molecules/DetailImage/DetailImage';
import Category from '@/molecules/Category/Category';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { useMatch } from 'react-router-dom';
import { useStyleStore } from '@/zustand/useStyleStore';

const Rending = () => {
  return (
    <div className="template">
      <Category />
    </div>
  );
};

export default Rending;
