const font = {
  black: 'text-black',
  misty: 'text-misty',
};

const stroke = {
  black: 'border-black',
  misty: 'border-misty',
};

const size = {
  '12px': 'text-[12px]',
  '13px': 'text-[13px]',
  '14px': 'text-[14px]',
  '16px': 'text-[16px]',
};

function StrokeButton({ text = '계정 관리', fontColor = 'black', borderColor = 'black', fontSize = '13px', onClick }) {
  return (
    <button
      className={`w-[100px] h-[40px] rounded-md bg-white ${font[fontColor]} ${size[fontSize]} font-bold border ${stroke[borderColor]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default StrokeButton;
