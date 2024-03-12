import { useEffect, useState } from "react";

const HeartButton = ({ onClick, imageId }) => {
  const localStorageKey = `isClickedHeart_${imageId}`

  const [isClickedHeart, setIsClickedHeart] = useState(() => {
    const savedState = localStorage.getItem(localStorageKey)

    return savedState ? JSON.parse(savedState) : false
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(isClickedHeart))
  }, [isClickedHeart, localStorageKey])

  const handleClick = () => {
    setIsClickedHeart(prev => {
      const newState = !prev
      onClick(newState ? 1 : -1, imageId)

      return newState
    })
  }

  return (
    // <img onClick={handleClickButton} src={isClickedHeart ? "/images/heart_fill.svg" : "/images/heart_none.svg"}/>
    <button onClick={handleClick}>
      {isClickedHeart ? <img src="/images/heart_fill.svg"/> : <img src="/images/heart_none.svg"/>}
    </button>
  );
};

export default HeartButton;