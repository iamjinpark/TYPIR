import { useState } from 'react';

const BookmarkInputModal = ({ onAddBookmark, onClose }) => {
  const [bookmarkName, setBookmarkName] = useState('')

  const handleBookmarkName = (event) => {
    setBookmarkName(event.target.value)
  };

  const handleAddBookmark = () => {
    if (bookmarkName.trim() !== '') {
      onAddBookmark(bookmarkName)
      onClose()
      setBookmarkName('')
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleAddBookmark();
    }
  }

  return (
    <div className='absolute top-[103px] right-[35px]'>
      <div className="w-[250px] h-[145px] bg-white border border-black rounded-xl flex items-center flex-col">
        <p className="mt-[15px] font-semibold">나만의 북마크 만들기</p>
        <input 
          type="text" 
          value={bookmarkName} 
          onChange={handleBookmarkName} 
          onKeyPress={handleEnterPress} 
          className="w-[160px] border border-black my-[15px] rounded-md outline-none"
        />
        <div>
          <button onClick={handleAddBookmark} className="bg-[#F3F3F3] rounded-md px-5 py-1 mr-3 font-semibold">확인</button>
          <button onClick={onClose} className="bg-[#F3F3F3] rounded-md px-5 py-1 font-semibold">취소</button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkInputModal;
