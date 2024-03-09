const CommonTextarea = ({
  width = 'w-[290px]',
  border = 'rounded-2xl',
  borderColor = 'border-gray-200',
  margin = 'mt-[10px]',
  padding = 'p-[8px]',
  height = 'h-[140px]',
  className,
}) => {
  return (
    <textarea
      placeholder="내용을 입력해주세요."
      rows={5}
      className={`${width} border ${borderColor} ${border} ${padding} ${margin} ${height} ${className}`}
    />
  );
};

export default CommonTextarea;
