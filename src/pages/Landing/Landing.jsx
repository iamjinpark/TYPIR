import DetailImage from '@/molecules/DetailImage/DetailImage';
import Category from '@/molecules/Category/Category';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { useMatch } from 'react-router-dom';
import { useStyleStore } from '@/zustand/useStyleStore';

const Landing = () => {
  return (
    <div className="">
      <Category />
    </div>
  );
};

export default Landing;
