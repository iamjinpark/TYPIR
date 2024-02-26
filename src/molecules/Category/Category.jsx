import CategoryButton from '@/atoms/CategoryButton/CategoryButton';

const Category = ({ gap = 'gap-3' }) => {
  return (
    <div className={`flex flex-row ${gap}`}>
      <CategoryButton text="All" />
      <CategoryButton text="Simple" />
      <CategoryButton text="Vintage" />
      <CategoryButton text="Office" />
    </div>
  );
};

export default Category;
