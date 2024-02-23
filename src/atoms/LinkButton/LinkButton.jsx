const size = {
  '26px': 'text-[26px]',
  '14px': 'text-[14px]',
};

function LinkButton({ text, fontSize = '26px' }) {
  return <button className={`font-serif text-white ${size[fontSize]}`}>{text}</button>;
}
export default LinkButton;
