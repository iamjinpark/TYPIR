function TextContents({ text, fontSize = '12px' }) {
  return <div className={`text-[${fontSize}]`}>{text}</div>;
}
export default TextContents;
