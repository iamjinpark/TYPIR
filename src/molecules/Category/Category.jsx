import { useState } from 'react';

const Category = ({ gap = 'gap-3' }) => {
  const categories = ['All', 'Simple', 'Daily', 'Vintage'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="mt-[5px] mb-[15px]">
      <ul className={`flex flex-row ${gap} font-serif`}>
        {categories.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={`cursor-pointer px-[9px] border border-gray-200 rounded-xl ${selectedCategory === item ? 'bg-black' : 'bg-white'} ${selectedCategory === item ? 'text-white' : 'text-gray-200'}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
