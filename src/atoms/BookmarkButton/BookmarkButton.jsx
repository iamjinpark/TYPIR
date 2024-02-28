import { useEffect, useState } from "react";

const BookmarkButton = ({ onClick }) => {

  const [isClickedBookmark, setIsClickedBookmark] = useState(() => {
    // 로컬 스토리지에서 값 가져와 (없으면 기본값 false)
    const initIsClicked = JSON.parse(localStorage.getItem("isClickedBookmark"))
    return initIsClicked !== null ? initIsClicked : false;
  })

  // 페이지 새로고침 => 로컬 스토리지에 저장된 상태 가져와
  useEffect(() => {
    localStorage.setItem("isClickedBookmark", JSON.stringify(isClickedBookmark))
  }, [isClickedBookmark]);

  const handleClickButton = () => {
    setIsClickedBookmark(prev => !prev)
    if (onClick) {
      onClick()
    }
  }

  return (
    <img onClick={handleClickButton} src={isClickedBookmark ? "/images/bookmark_fill.svg" : "/images/bookmark_none.svg"}/>
  );
};

export default BookmarkButton;