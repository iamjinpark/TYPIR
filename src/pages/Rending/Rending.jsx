import Header from '@/molecules/Header/Header';
import Category from '@/molecules/Category/Category';
import ImageTemplate from '@/molecules/ImageTemplate/ImageTemplate';
import { Route } from 'react-router-dom';

const Rending = () => {
  return (
    <div className="template">
      <Category />
      <ImageTemplate />
    </div>
  );
};

export default Rending;
