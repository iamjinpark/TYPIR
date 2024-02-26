function CommonButton({
  width = 'w-[70px]',
  height = 'h-[30px]',
  border = 'rounded-md',
  bgColor = 'bg-black',
  fontColor = 'text-white',
  fontSize = 'text-[12px]',
  text = '저장',
}) {
  return <button className={`${width} ${height} ${border} ${bgColor} ${fontColor} ${fontSize}`}>{text}</button>;
}
export default CommonButton;
