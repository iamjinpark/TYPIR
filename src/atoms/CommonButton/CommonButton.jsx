const bg = {
  black: 'bg-black',
  white: 'bg-white',
  misty: 'bg-misty',
};

const color = {
  black: 'text-black',
  white: 'text-white',
  misty: 'text-misty',
};

const size = {
  '12px': 'text-[12px]',
  '14px': 'text-[14px]',
  '16px': 'text-[16px]',
};

function CommonButton({ text = '저장', bgColor = 'black', fontColor = 'white', fontSize = '12px' }) {
  return (
    <button className={`w-[70px] h-[30px] rounded-md ${bg[bgColor]} ${color[fontColor]} text-[12px] ${size[fontSize]}`}>
      {text}
    </button>
  );
}
export default CommonButton;
