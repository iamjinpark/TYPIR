const bg = {
  black: 'bg-black',
  misty: 'bg-misty',
};

const font = {
  black: 'text-black',
  white: 'text-white',
};

function CommonButton({ text = '저장', bgColor = 'black', fontColor = 'white' }) {
  return (
    <button className={`w-[70px] h-[30px] rounded-md ${bg[bgColor]} ${font[fontColor]} text-[12px]`}>{text}</button>
  );
}
export default CommonButton;
