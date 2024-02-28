function CommonButton({
  width = 'w-[70px]',
  height = 'h-[30px]',
  border = 'rounded-md',
  bgColor = 'bg-black',
  fontColor = 'text-white',
  fontSize = 'text-[12px]',
  margin = 'm-0',
  text = '저장',
  onClick,
}) {
  return (
    <button className={`${width} ${height} ${border} ${bgColor} ${fontColor} ${fontSize} ${margin}`} onClick={onClick}>
      {text}
    </button>
  );
}
export default CommonButton;
