import { useEffect, useState } from "react";

const HeartButton = ({ onClick }) => {

  const [isClickedHeart, setIsClickedHeart] = useState(() => {
    // 로컬 스토리지에서 값 가져와 (없으면 기본값 false)
    const initIsClicked = JSON.parse(localStorage.getItem("isClickedHeart"))
    return initIsClicked !== null ? initIsClicked : false;
  })

  // 페이지 새로고침 => 로컬 스토리지에 저장된 상태 가져와
  useEffect(() => {
    localStorage.setItem("isClickedHeart", JSON.stringify(isClickedHeart))
  }, [isClickedHeart]);

  const handleClickButton = () => {
    setIsClickedHeart(val => !val)
    if (onClick) {
      onClick(isClickedHeart ? -1 : 1)  // 눌려있다 => 증가했다
    }
  }

  return (
    <img onClick={handleClickButton} src={isClickedHeart ? "/images/heart_fill.svg" : "/images/heart_none.svg"}/>
  );
};

export default HeartButton;