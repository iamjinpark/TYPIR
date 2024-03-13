function Checkbox({ text = '로그인 상태 유지', className, checked, onChange }) {
  const checkboxId = `checkbox-${text.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`flex items-center px-2 ${className}`}>
      <input type="checkbox" id={checkboxId} checked={checked} onChange={onChange} className="accent-black h-4 w-4" />
      <label htmlFor={checkboxId} className="ml-2 cursor-pointer">
        {text}
      </label>
    </div>
  );
}

export default Checkbox;
