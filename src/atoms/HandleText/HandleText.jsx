function HandleText({ fontFamily = 'font-sans', fontSize = 'text-[11px]', text = 'girls_day' }) {
  return <div className={`${fontFamily} text-gray-200 ${fontSize}`}>{text}</div>;
}
export default HandleText;
