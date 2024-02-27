import { useState } from 'react';
import AddBookmark from "@/atoms/AddBookmark/AddBookmark";
import BookmarkList from "@/atoms/BookmarkList/BookmarkList";
import CloseButton from "@/atoms/CloseButton/CloseButton";
import BookmarkInputModal from '../BookmarkInputModal/BookmarkInputModal';

const BookmarkSaveModal = () => {
  const [openInputModal, setOpenInputModal] = useState(false)
  const [list, setList] = useState(["프로필에 저장", "북마크 1", "북마크 2"])

  const handleAddBookmark = (bookmarkName) => {
    setList([...list, bookmarkName])
  };

  const openModal = () => {
    setOpenInputModal(true)
  };

  const closeModal = () => {
    setOpenInputModal(false)
  };

  return (
    <div className="relative w-[320px] h-[350px] border border-black rounded-xl flex flex-col overflow-auto">
      <p className=" absolute font-semibold top-3 w-full text-center">저장</p> 
      <CloseButton />
      <div className="mt-14 ml-3">
        <ul className="text-sm mb-5">
          <p className="mb-2">빠른 저장 후 나중에 정리</p>
          <BookmarkList title="프로필에 저장"/>
        </ul>
        <ul className="text-sm mb-5">
          <p className="mb-2">기존 북마크에 추가</p>
          {list.map((bookmark, index) => (
            <BookmarkList key={index} title={bookmark} />
          ))}
        </ul>
      </div>   
      {openInputModal && <BookmarkInputModal onAddBookmark={handleAddBookmark} onClose={closeModal} />}
      <AddBookmark onClick={openModal} />
    </div>
  );
};

export default BookmarkSaveModal;
