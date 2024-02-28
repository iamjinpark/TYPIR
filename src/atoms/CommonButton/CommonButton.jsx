function CommonButton({
  width = 'w-[70px]',
  height = 'h-[30px]',
  border = 'rounded-md',
  borderColor = 'border-black',
  bgColor = 'bg-black',
  fontColor = 'text-white',
  fontSize = 'text-[12px]',
  margin = 'm-0',
  text = '저장',
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${width} ${height} border ${border} ${bgColor} ${borderColor} ${fontColor} ${fontSize} ${margin}`}
    >
      {text}
    </button>
  );
}
export default CommonButton;
