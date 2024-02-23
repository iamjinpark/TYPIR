function LinkButton({ text, fontSize = '26px' }) {
  return <button className={`font-serif text-white text-[${fontSize}]`}>{text}</button>;
}
export default LinkButton;
