import { useEffect, useState } from "react";

const HeartButton = ({ onClick, imageId }) => {
  const localStorageKey = `isClickedHeart_${imageId}`
  const [isClickedHeart, setIsClickedHeart] = useState(JSON.parse(localStorage.getItem(localStorageKey)) || false)

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(isClickedHeart))
  }, [isClickedHeart])

  const handleClick = () => {
    const newState = !isClickedHeart
    
    setIsClickedHeart(newState)
    onClick(newState ? 1 : -1)
  }

  return (
    <button onClick={handleClick}>
      {isClickedHeart ? <img src="/images/heart_fill.svg"/> : <img src="/images/heart_none.svg"/>}
    </button>
  );
};

export default HeartButton;