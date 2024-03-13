import { useState } from 'react';
import AddBookmark from '@/atoms/AddBookmark/AddBookmark';
import BookmarkList from '@/atoms/BookmarkList/BookmarkList';
import CloseButton from '@/atoms/CloseButton/CloseButton';
import BookmarkInputModal from '../BookmarkInputModal/BookmarkInputModal';
import pb from '@/api/pocketbase';
import { useEffect } from 'react';

const BookmarkSaveModal = ({ onClose, onBookmarkChange }) => {
  const [openInputModal, setOpenInputModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const userHandle = user.handle
  console.log("유저 : ", user)
  console.log("유저 핸들 : ", userHandle)

  const openModal = () => {
    setOpenInputModal(true);
  };

  const closeModal = () => {
    onClose()
  };

  const handleContainerClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const [bookmarks, setBookmarks] = useState([])

  // 기존 북마크 로드
  useEffect(() => {
    async function loadDefaultBookmarks() {
      try {
        const records = await pb.collection("bookmark").getFullList()
        const bookmarkNames = records.map(record => record.name)

        setBookmarks(bookmarkNames)
      } catch (err) {
        console.error("Error loading bookmarks : ", err)
      }
    }
    loadDefaultBookmarks()
  }, [])

  // 핸들
  async function getUserIdByHandle (handle) {
    const users = await pb.collection("users").getFullList()
    console.log("유저유저유저들 : ", users)
    const user = users.find (val => val.handle === handle)
    console.log("유저유저유저 : ", user)
    return user ? user.id : null
  }

  // 새 북마크 추가
  const handleAddBookmark = async (bookmarkName) => {
    try {
      const userId = await getUserIdByHandle(userHandle)

      if (!userId) {
        // throw new Error ("User handle is not found in users collection")
        throw new Error ("유저 핸들 못 찾아 하 시발")
      }
      const data = { name : bookmarkName, handle : userId}
      console.log("데이터야 데이터 : ", data)
      const newRecord = await pb.collection("bookmark").create(data)
      console.log("데이터야 새로운 데이터 : ",newRecord)

      setBookmarks(prevBookmark => [...prevBookmark, newRecord.name, ])  // 새 북마크 목록에 추가

      setOpenInputModal(false)
      onBookmarkChange()
    } catch (err) {
      console.error ("Error adding bookmark : ", err)
    }
  }


  return (
      <div className="fixed inset-0 flex justify-center items-center z-50" onClick={handleContainerClick}>
        <div className="relative w-[290px] h-[350px] rounded-xl border border-black bg-white flex-col overflow-auto">
          <p className=" absolute font-semibold top-3 w-full text-center">저장</p>
          <CloseButton onClose={onClose}/>
          <div className="mt-14 ml-3">
            <ul className="text-sm mb-5">
              <p className="mb-2">빠른 저장 후 나중에 정리</p>
              <BookmarkList title="프로필에 저장" />
            </ul>
            <ul className="text-sm mb-5">
              <p className="mb-2">기존 북마크에 추가</p>
              {bookmarks.map((bookmark, index) => (
                <BookmarkList key={index} title={bookmarks[index]} />
              ))}
            </ul>
          </div>
          <AddBookmark onClick={openModal} />
          {openInputModal && <BookmarkInputModal onAddBookmark={handleAddBookmark} onClose={closeModal} />}
        </div>
      </div>
  );
};

export default BookmarkSaveModal;
