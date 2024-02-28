import TextContents from '../TextContents/TextContents';

function CommonInput({
  width = 'w-[290px]',
  height = 'h-[45px]',
  border = 'rounded-2xl',
  borderColor = 'border-content',
  text = 'label',
  onChange,
  value,
  placeholder = '',
}) {
  return (
    <div>
      <TextContents text={text} fontWeight="font-bold" fontSize="text-[15px]" padding="pl-2" margin="mt-3" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${width} ${height} border ${border} ${borderColor} px-2 `}
      ></input>
    </div>
  );
}
export default CommonInput;
