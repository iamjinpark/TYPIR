function LinkButton({
  fontFamily = 'font-serif',
  fontWeight = 'font-normal',
  fontColor = 'text-white',
  fontSize = 'text-[26px]',
  text = 'CATEGORY',
  hoverColor = 'hover:text-white',
  hoverScale = 'hover:scale-110',
  transition = 'transition-all duration-100',
  position = 'relative',
  onClick,
  children,
}) {
  return (
    <button
      className={`${fontFamily} ${fontWeight} ${fontColor} ${fontSize} ${hoverColor} ${hoverScale} ${transition} ${position}`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
}
export default LinkButton;
