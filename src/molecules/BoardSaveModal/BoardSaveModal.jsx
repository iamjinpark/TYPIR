import { useState } from 'react';
import AddBookmark from '@/atoms/AddBookmark/AddBookmark';
import BookmarkList from '@/atoms/BookmarkList/BookmarkList';
import CloseButton from '@/atoms/CloseButton/CloseButton';
import BookmarkInputModal from '../BookmarkInputModal/BookmarkInputModal';

const BookmarkSaveModal = ({ text = '기존 북마크에 추가', onClose }) => {
  const [openInputModal, setOpenInputModal] = useState(false);
  const [list, setList] = useState(['프로필에 저장', 'simple', 'daily']);

  const handleAddBookmark = (bookmarkName) => {
    setList([...list, bookmarkName]);
  };

  const openModal = () => {
    setOpenInputModal(true);
  };

  const closeModal = () => {
    setOpenInputModal(false);
  };

  return (
    <div className="absolute w-[290px] h-[300px] top-[-101px] left-[] xs:w-[380px] xs:h-[350px] xs:top-[-122px] xs:left-[px] border border-black rounded-xl flex flex-col overflow-auto bg-white">
      <p className=" absolute font-semibold top-3 w-full text-center">저장</p>
      <CloseButton onClose={onClose} />
      <div className="mt-14 ml-3">
        <ul className="text-sm mb-5">
          <p className="mb-2">빠른 저장 후 나중에 정리</p>
          <BookmarkList title="프로필에 저장" />
        </ul>
        <ul className="text-sm mb-5">
          <p className="mb-2">{text}</p>
          {list.map((board, index) => (
            <BookmarkList key={index} title={board} />
          ))}
        </ul>
      </div>
      <AddBookmark onClick={openModal} text="나만의 보드 만들기" />
      {openInputModal && <BookmarkInputModal onAddBookmark={handleAddBookmark} onClose={closeModal} />}
    </div>
  );
};

export default BookmarkSaveModal;
