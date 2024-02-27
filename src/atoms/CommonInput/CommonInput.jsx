import TextContents from '../TextContents/TextContents';

function CommonInput({
  width = 'w-[290px]',
  height = 'h-[45px]',
  border = 'rounded-xl',
  borderColor = 'border-content',
  text = 'label',
}) {
  return (
    <div>
      <TextContents text={text} fontWeight="font-bold" fontSize="text-[15px]" padding="pl-2" margin="mt-3" />
      <input className={`${width} ${height} border ${border} ${borderColor} `}></input>
    </div>
  );
}
export default CommonInput;
