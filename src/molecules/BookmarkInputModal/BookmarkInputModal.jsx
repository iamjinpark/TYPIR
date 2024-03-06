import { useState } from 'react';

const BookmarkInputModal = ({ onAddBookmark, onClose, inputText = '나만의 북마크 만들기' }) => {
  const [bookmarkName, setBookmarkName] = useState('');

  const handleBookmarkName = (event) => {
    setBookmarkName(event.target.value);
  };

  const handleAddBookmark = () => {
    if (bookmarkName.trim() !== '') {
      onAddBookmark(bookmarkName);
      onClose();
      setBookmarkName('');
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleAddBookmark();
    }
  };

  return (
    <div className="absolute top-[103px] right-[35px]">
      <div className="w-[260px] h-[170px] bg-white border border-black rounded-xl flex items-center flex-col">
        <p className="mt-[15px] font-semibold">{inputText}</p>
        <input
          type="text"
          value={bookmarkName}
          onChange={handleBookmarkName}
          onKeyPress={handleEnterPress}
          className="w-[170px] border-black border-b mt-[22px] outline-none"
        />
        <div className="mt-[25px]">
          <button onClick={onClose} className="border border-black rounded px-[22px] py-1 mr-6 font-semibold">
            취소
          </button>
          <button
            onClick={handleAddBookmark}
            className="border border-black rounded px-[22px] py-1 font-semibold bg-black text-white"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookmarkInputModal;
