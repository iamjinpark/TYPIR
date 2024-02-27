import Header from '@/molecules/Header/Header';
import Category from '@/molecules/Category/Category';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { Route } from 'react-router-dom';

const Rending = () => {
  return (
    <div className="w-[320px] mx-auto">
      <Header />
      <div className="px-[15px]">
        <Category />
        <ImageTemplate />
      </div>
    </div>
  );
};

export default Rending;
