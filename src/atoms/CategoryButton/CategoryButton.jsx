import { useState } from 'react';

const CategoryButton = ({
  text = 'category',
  paddingX = 'px-[0.5625rem]',
  paddingY = 'py-[0.1125rem]',
  border = 'border',
  rounded = 'rounded-xl',
  // borderColor = 'border-gray-200',
  // textColor = 'text-gray-200',
  // backgroundColor = 'bg-white',
}) => {
  const [buttonColor, setButtonColor] = useState({
    borderColor: 'border-gray-200',
    textColor: 'text-gray-200',
    backgroundColor: 'bg-white',
  });

  const handleButtonColor = () => {
    const newbutton = { borderColor: 'border-black', textColor: 'text-white', backgroundColor: 'bg-black' };

    setButtonColor(newbutton);
  };

  const generateClassString = (styles) => {
    return Object.entries(styles)
      .map(([key, value]) => `${value}`)
      .join(' ');
  };

  return (
    <button
      className={`${paddingX} ${paddingY} ${border} ${rounded} ${generateClassString(buttonColor)} text-center`}
      onClick={handleButtonColor}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
