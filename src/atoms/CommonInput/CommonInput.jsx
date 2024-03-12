import TextContents from '../TextContents/TextContents';

function CommonInput({
  width = 'w-[290px]',
  height = 'h-[45px]',
  bgColor = 'bg-white',
  border = 'rounded-2xl',
  borderColor = 'border-content',
  margin,
  text = 'label',
  onChange,
  value,
  placeholder = '',
  disabled = false,
}) {
  return (
    <div>
      <TextContents text={text} fontWeight="font-bold" fontSize="text-[15px]" padding="pl-2" margin="mt-3" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${width} ${height} ${bgColor} border ${border} ${borderColor} ${margin} px-2 `}
      ></input>
    </div>
  );
}
export default CommonInput;
