const color = {
  black: 'text-black',
  white: 'text-white',
  misty: 'text-misty',
};

const size = {
  '26px': 'text-[26px]',
  '14px': 'text-[14px]',
};

function LinkButton({ text = 'CATEGORY', fontColor = 'white', fontSize = '26px' }) {
  return <button className={`font-serif ${color[fontColor]} ${size[fontSize]}`}>{text}</button>;
}
export default LinkButton;
