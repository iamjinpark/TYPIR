function TextContents({
  fontFamily = 'font-sans',
  fontWeight = 'font-normal',
  fontSize = 'text-[12px]',
  text = '텍스트를 입력해주세요',
  padding = 'p-0',
  margin = 'm-0',
}) {
  return <div className={`${fontFamily} ${fontWeight} ${fontSize} ${padding} ${margin}`}>{text}</div>;
}
export default TextContents;
