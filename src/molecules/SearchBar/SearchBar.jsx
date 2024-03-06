import React, { useState, useEffect } from 'react';

const SearchBar = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [showSearchInput, setShowSearchInput] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput)
  }

  return (
    <div className="h-[36px] absolute right-0 mr-2">
      {/* 기본값 => 352 & 뷰포트 660 => 220 & 뷰포트 550 => 아이콘만 */}
      {viewportWidth >= 500 ? (
        <div className={`flex flex-row relative w-[${viewportWidth >= 660 ? 260 : 180}px] items-center`}>
          <input
            type="text"
            className="w-full h-[36px] border-b-2 pl-[5px] outline-none text-sm"
            placeholder="검색"
          />
          {viewportWidth >= 500 && (
            <button className="absolute right-0 pr-[5px]">
              <img className='w-[15px] h-[15px]' src="/images/search.svg" alt="Search icon" />
            </button>
          )}
        </div>
      ) : (
        <button className="mt-[4px]">
          <img className='min-w-[20px] min-h-[20px]' src="/images/search.svg" alt="Search icon" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
