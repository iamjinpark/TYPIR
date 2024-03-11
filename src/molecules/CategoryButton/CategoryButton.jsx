import React, { useState } from 'react';

const CATEGORIES = ['all', 'simple', 'daily', 'vintage'];

const CategoryButtons = ({ margin = 'mt-15px', selectedCategory, setSelectedCategory }) => {
  const handleCategoryClick = (category, event) => {
    event.preventDefault(); // 폼 제출 방지
    setSelectedCategory(category);
  };
  console.log(selectedCategory);

  return (
    <div className="flex">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={`px-[0.5625rem] border border-gray-200 rounded-xl cursor-pointer ${margin} font-serif
            ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-gray-200'} 
            ${category !== 'all' && 'ml-3'}`} // 'all' 버튼 이외에는 오른쪽 여백 추가
          onClick={(event) => handleCategoryClick(category, event)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
