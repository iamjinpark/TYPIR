function StrokeButton({
  width = 'w-[100px]',
  height = 'h-[40px]',
  border = 'rounded-md',
  borderColor = 'border-black',
  bgColor = 'bg-white',
  fontColor = 'text-black',
  fontSize = 'text-[13px]',
  text = '계정 관리',
  onClick,
}) {
  return (
    <button
      className={`${width} ${height} border ${border} ${borderColor} ${bgColor} ${fontColor} ${fontSize}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default StrokeButton;
