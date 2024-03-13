import { useState, useEffect } from 'react';
import AddBookmark from '@/atoms/AddBookmark/AddBookmark';
import BookmarkList from '@/atoms/BookmarkList/BookmarkList';
import CloseButton from '@/atoms/CloseButton/CloseButton';
import BookmarkInputModal from '../BookmarkInputModal/BookmarkInputModal';
import pb from '@/api/pocketbase';
import { useParams } from 'react-router-dom';

const BookmarkSaveModal = ({ text = '기존 북마크에 추가', onClose, onClick }) => {
  const [openInputModal, setOpenInputModal] = useState(false);
  const [list, setList] = useState(['프로필에 저장', 'simple', 'daily']);
  const [board, setBoard] = useState([]);

  const handleAddBookmark = async (bookmarkName) => {
    try {
      const data = { name: bookmarkName };
      const newRecord = await pb.collection('board').create(data);

      setBoard((preBoard) => [...preBoard, newRecord.name]); // 새 북마크 목록에 추가

      setOpenInputModal(false);
    } catch (err) {
      console.error('Error adding bookmark : ', err);
    }
  };

  const imageSrc = useParams();
  const imageArray = Object.values(imageSrc);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;
  // console.log(handle);

  async function SaveToAlbum() {
    const data = {
      handles: userId,
      images: imageArray,
    };
    console.log(data);

    const album = await pb.collection('album').create(data);
    const test = await pb.collection('users').update(userId, { album: album.id });
    console.log(test);
  }

  const openModal = () => {
    setOpenInputModal(true);
  };

  const closeModal = () => {
    setOpenInputModal(false);
  };

  const readyForFeature = () => {
    alert('해당 서비스는 준비중 입니다! 조금만 기다려 주세요 ✨');
  };

  return (
    <div className="absolute w-[290px] h-[300px] top-[-101px] left-[] xs:w-[380px] xs:h-[350px] xs:top-[-122px] xs:left-[px] border border-black rounded-xl flex flex-col overflow-auto bg-white">
      <p className=" absolute font-semibold top-3 w-full text-center">저장</p>
      <CloseButton onClose={onClose} />
      <div className="mt-14 ml-3">
        <ul className="text-sm mb-5">
          <p className="mb-2 font-semibold">빠른 저장 후 나중에 정리</p>
          <BookmarkList title="앨범에 저장" onClick={SaveToAlbum} />
        </ul>
        <ul className="text-sm mb-5">
          <p className="mb-2 font-semibold">{text}</p>
          {list.map((board, index) => (
            <BookmarkList key={index} title={board} onClick={readyForFeature} />
          ))}
        </ul>
      </div>
      <AddBookmark onClick={openModal} text="나만의 보드 만들기" />
      {openInputModal && (
        <BookmarkInputModal onAddBookmark={handleAddBookmark} onClose={closeModal} inputText="나만의 보드 만들기" />
      )}
    </div>
  );
};

export default BookmarkSaveModal;
