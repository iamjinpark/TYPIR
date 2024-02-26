function LinkButton({
  fontFamily = 'font-serif',
  fontColor = 'text-white',
  fontSize = 'text-[26px]',
  text = 'CATEGORY',
}) {
  return <button className={`${fontFamily} ${fontColor} ${fontSize}`}>{text}</button>;
}
export default LinkButton;
