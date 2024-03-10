function TextContents({
  fontFamily = 'font-sans',
  fontWeight = 'font-normal',
  fontSize = 'text-[12px]',
  text = '텍스트를 입력해주세요',
  padding = 'p-0',
  margin = 'm-0',
  maxLength,
  style = {},
}) {
  let displayText = text;

  if (maxLength && text.length > maxLength) {
    displayText = text.substring(0, maxLength) + '...';
  }
  return (
    <div className={`${fontFamily} ${fontWeight} ${fontSize} ${padding} ${margin}`} style={style}>
      {displayText}
    </div>
  );
}
export default TextContents;
