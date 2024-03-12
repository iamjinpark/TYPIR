import BookmarkSaveModal from "@/molecules/BookmarkSaveModal/BookmarkSaveModal";
import { useEffect, useState } from "react";

const BookmarkButton = ({ onClick }) => {

  const [isClickedBookmark, setIsClickedBookmark] = useState(() => {
    // 로컬 스토리지에서 값 가져와 (없으면 기본값 false)
    const initIsClicked = JSON.parse(localStorage.getItem("isClickedBookmark"))
    return initIsClicked !== null ? initIsClicked : false;
  })

  const [isModalOpen, setIsModalOpen] = useState(false)

  // 페이지 새로고침 => 로컬 스토리지에 저장된 상태 가져와
  useEffect(() => {
    localStorage.setItem("isClickedBookmark", JSON.stringify(isClickedBookmark))
  }, [isClickedBookmark]);

  const handleClickButton = () => {

    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button onClick={handleClickButton}>
        <img src={isClickedBookmark ? "/images/bookmark_fill.svg" : "/images/bookmark_none.svg"}/>
      </button>
      {isModalOpen && <BookmarkSaveModal onClose={handleCloseModal} onBookmarkChange={() => setIsClickedBookmark(true)}/>}
    </>
  );
};

export default BookmarkButton;